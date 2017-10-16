const {prop, assoc} = require('ramda')
const {add, get, update, deleteDoc} = require('./lib/dal-helper')

const addPainting = painting => add(painting)
const getPainting = id => get(id)
const updatePainting = painting => update(painting)
const deletePainting = id => deleteDoc(id)

const dal = {
    addPainting,
    getPainting,
    updatePainting,
    deletePainting
}

module.exports = dal

