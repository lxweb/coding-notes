const fakerator = require('fakerator')()
const anagram = require('anagram')
const out = console.log

//const wlength = process.argv[2] //Set the amount externally as a parameter

const base = fakerator.times(fakerator.random.letter, 10)
const w = base.join('') //random word
const wa = base.reverse().join('') // anagram
const wna = fakerator.times(fakerator.random.letter, 10).join('') // not an anagram


var isAnagram = (test, original) => (test !== original && test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join(''))


out('IS ANAGRAM CASE')

console.time('A')
let t10 = isAnagram(w,wa)
console.timeEnd('A')

out('IS NOT AN ANAGRAM CASE')
console.time('NA')
let na = isAnagram(w,wna)
console.timeEnd('NA')

console.log(w, wa, wna, t10);
