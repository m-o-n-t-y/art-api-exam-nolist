//build an _id prop that takes prefix and name does the follow:
// such as   "name": "The Persistence of Memory"
// transform it into "<prefix>_persistence_of_memory"
//  lower case
//  strip off the the A or The if its the first word
//  concatenate the word "prefix"
//  replace the spaces with underscores _

// prefix = "book"
// value = "A Brave New World"
// return value =>  "book_brave_new_world"

const {
  compose,
  toLower,
  split,
  join,
  concat,
  contains,
  head,
  drop
} = require('ramda')

const removeArticles = arrData =>
  contains(toLower(head(arrData)), ['the', 'a']) ? drop(1, arrData) : arrData

module.exports = (prefix, joiner, value) =>
  compose(
    concat(prefix + joiner),
    join(joiner),
    removeArticles,
    split(' '),
    toLower()
  )(value)
