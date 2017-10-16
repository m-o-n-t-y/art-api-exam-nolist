require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const HTTPError = require('node-http-error')
const { assoc, isEmpty, compose, omit, prop, join, not, path } = require('ramda')
const { addPainting, getPainting, updatePainting, deletePainting } = require('./dal')
const checkRequiredFields = require('./lib/check-required-fields')
const generatePK = require('./lib/build-pk.js')


app.use(bodyParser.json())

app.get('/', (req, res, next) => res.send('Welcome to the Art API. Manage all the paintings for much win.'))

app.post('/paintings', (req, res, next) => {

  const body = prop('body', req)

  if (isEmpty(body)) {
    return next(
      new HTTPError(400, `Missing request body.`)
    )
  }
  const missingFields = checkRequiredFields(['name', 'movement', 'artist', 'yearCreated', 'museum'], body)
  if (not(isEmpty(missingFields))) {
    return next(
      new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`)
    )
  }

  const painting = compose(
    assoc('_id', generatePK('painting', '_', prop('name', body))),
    omit(['_rev'])
  )(body)

  addPainting(painting)
    .then(result => res.status(201).send(result))
    .catch(err => next(new HTTPError(err.status, err.message)))

})


app.get('/paintings/:id', (req, res, next) =>
  getPainting(path(['params', 'id'], req))
    .then(doc => res.status(200).send(doc))
    .catch(err => next(new HTTPError(err.status, err.message)))
)

app.put('/paintings/:id', (req, res, next) => {

  const body = prop('body', req)

  if (isEmpty(body)) {
    return next(
      new HTTPError(400, `Missing request body.`)
    )
  }
  const missingFields = checkRequiredFields(['_id', '_rev', 'name', 'movement', 'artist', 'yearCreated', 'museum'], body)
  if (not(isEmpty(missingFields))) {
    return next(new HTTPError(400, `Missing required fields: ${join(' ', missingFields)}`))
  }

  updatePainting(body)
    .then(doc => res.status(200).send(doc))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.delete('/paintings/:id', (req, res, next) => {
  deletePainting(path(['params', 'id'], req))
    .then(doc => res.status(200).send(doc))
    .catch(err => next(new HTTPError(err.status, err.message)))
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err)
})

app.listen(process.env.port, () => console.log('API is up on port: ', process.env.port))