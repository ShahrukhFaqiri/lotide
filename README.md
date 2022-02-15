# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @shafaqiri/lotide`

**Require it:**

`const _ = require('@shafaqiri/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns first element of array
* `tail(...)`: removes first element of array without modifying original array
* `middle(...)`: returns middle element of array
* `countOnly(...)`: returns object key counts
* `letterPositions(...)` return an object with location of letter from string
* `findKeyByValue(...)` return the key based on given value