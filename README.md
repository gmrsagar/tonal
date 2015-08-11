# tonal

Tonal is a modular, functional (but currently __experimental__) music theory library. It provides lot of functions to create and manipulate musical entities:

```js
var transpose = require('tonal/transpose')
transpose('M2', 'f#4') // => 'G#4'
```

It's modular because you can require just what you need. The library is still big, but your dependencies can be tiny.

It's functional because all the library is built using functions with no side effects, just data-in, data-out. Notes and intervals are represented by strings. No objects. Functions are isolated, simpler and tested.

__This is alpha software__, if you need a stable music theory library in javascript you can use the excellent [teoria](https://github.com/saebekassebil/teoria)

## What

The library functions are divided in some different areas:

- __notes__: parseNote, freq, midi, transpose, enharmonics, pitchClass
- __intervals__: parseInterval, intervalNames, intervalNumber, invertInterval, distance
- __scales__:
- __chords__:

## Why

First of all, because I want to learn:

> Reinventing the wheel is bad for business, but it’s great for learning
[*](http://philipwalton.com/articles/how-to-become-a-great-front-end-engineer)

The more I code music entities, the more I understand the relations between them.

Also, I want a complete library, where I can model all what I learn, with some esoteric features like interval classes, binary scales and weird stuff. You can require the parts you need.

## Usage

You can install it using npm: `npm i --save tonal` and although you can require the whole library:

```js
var tonal = require('tonal')
tonal.tranpose('P5', 'C')
```

The idea is that you only require the methods you need:

```js
var transpose = require('tonal/transpose')
tranpose('P5', 'C')
```

## Documentation

You can read the generated documentation [here]](https://github.com/danigb/tonal/blob/master/documentation.md)

## References

The binary representation of the scales are based on the awesome book [Arpeggio & Scale Resources](https://archive.org/details/ScaleAndArpeggioResourcesAGuitarEncyclopedia) by [Rich Cochrane](http://cochranemusic.com/). Additional scale code is inspired by the works of [Walter Zettel](http://www.muzuu.org/new_life/pics/simpleblog/scales/scalesadvice.html) and [William Zeitler](http://www.allthescales.org/)

Interval analisys is based on the book [Harmonic Materials of Modern Music](https://archive.org/details/harmonicmaterial00hans) of Howard Hanson.

## License

MIT License