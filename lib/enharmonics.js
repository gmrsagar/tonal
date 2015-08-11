'use strict'

var parse = require('./parse-note')

var ENHARMONICS = [['C', 'B#', 'Dbb'], ['Db', 'C#', 'B##'],
  ['D', 'Ebb', 'C##'], ['Eb', 'D#', 'Fbb'], ['E', 'Fb', 'D##'],
  ['F', 'E#', 'Gbb'], ['Gb', 'F#', 'E##'], ['G', 'Abb', 'F##'],
  ['Ab', 'G#'], ['A', 'Bbb', 'G##'], ['Bb', 'A#', 'Cbb'], ['B', 'Cb', 'A##']]
var NOTE_TO_ENHARMONICS = {}
ENHARMONICS.forEach(function (names) {
  names.forEach(function (name) {
    NOTE_TO_ENHARMONICS[name] = names
  })
})

/**
 * Get a list of note names with the same pitch as the given one
 *
 * @param {Note|String} note - the note to find enharmonics of
 * @param {String} pitchClass - if given, limit the list to notes with this
 * pitch class. Must be uppercase
 * @return {Array} - an array of note names
 *
 * @example
 * var enharmonics = require('tonal/enharmonics')
 * enharmonics('C4') // => ['B#3', 'Dbb4']
 * enharmonics('C4', 'B') // => ['B#3']
 */
function enharmonics (note, pitchClass) {
  note = parse(note)
  var name = note.pc + note.acc
  var oct = note.oct
  var list = []
  NOTE_TO_ENHARMONICS[name].forEach(function (enharmonic) {
    if (isEnharmonic(name, enharmonic, pitchClass)) {
      list.push(enharmonic + octave(enharmonic, oct))
    }
  })
  return list
}

function octave (name, octave) {
  if (!octave) return ''
  else if (name[0] === 'B' && name[1] === '#') return octave - 1
  else if (name[0] === 'C' && name[1] === 'b') return octave + 1
  else return octave
}

function isEnharmonic (root, name, pitchClass) {
  if (pitchClass) return name[0] === pitchClass
  else return root !== name
}

module.exports = enharmonics