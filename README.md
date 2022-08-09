# Stamp it out

Starting point for a TDD journey through an evolving tax.

## Requirements

This package has no dependencies, development or otherwise, but does require Node 18.

The exercise will assume basic TDD-in-JavaScript knowledge (e.g. see [this tutorial][js-tdd-ftw]).

We will be using two built-in Node modules, rather than Jest, for running the tests:

- [Assert] - `assert.equal(actual, expected)` is basically Jest's `expect(actual).toEqual(expected)`); and
- [Test] - `describe` and `it` work much the same as in Jest.

## Context

For this exercise we will be modelling the UK's Stamp Duty Land Tax (SDLT).

You don't need to know anything up front, but for reference:

- Summary: [Wikipedia][1]
- Current rates: [gov.uk][2]
- Historical rates: [gov.uk][3]

## Setup

[Clone] this repository, navigate to the relevant directory then run the tests:

```shell
$ npm test

> stamp-it-out@0.1.0 test
> node --test

TAP version 13
# Subtest: path/to/stamp-it-out/index.test.js
ok 1 - path/to/stamp-it-out/index.test.js
  ---
  duration_ms: 0.057278667
  ...
1..1
# tests 1
# pass 1
# fail 0
# cancelled 0
# skipped 0
# todo 0
# duration_ms 0.092508584
```

This output may seem odd, but it's just [TAP]. The key thing to check is that no tests failed: `fail 0`.

If you see `node: bad option: --test`, you're running the wrong version of Node - install 18 with e.g. [NVM].

[1]: https://en.wikipedia.org/wiki/Stamp_duty_in_the_United_Kingdom

[2]: https://www.gov.uk/stamp-duty-land-tax/residential-property-rates

[3]: https://www.gov.uk/government/publications/rates-and-allowances-stamp-duty-land-tax

[assert]: https://nodejs.org/api/assert.html

[clone]: https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

[js-tdd-ftw]: https://blog.jonrshar.pe/2020/Aug/31/js-tdd-ftw.html

[nvm]: https://github.com/nvm-sh/nvm

[tap]: https://testanything.org/

[test]: https://nodejs.org/api/test.html
