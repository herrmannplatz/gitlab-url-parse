# gitlab-url-parse

[![npm version](https://badge.fury.io/js/gitlab-url-parse.svg)](https://badge.fury.io/js/gitlab-url-parse) [![Build Status](https://travis-ci.org/herrmannplatz/gitlab-url-parse.svg?branch=master)](https://travis-ci.org/herrmannplatz/gitlab-url-parse)

> Parse Gitlab urls

## Install

```
$ npm install gitlab-url-parse
```

## Usage

```js
const parse = require('gitlab-url-parse')

console.log(parse('https://gitlab.com/herrmannplatz'))
// { user: 'herrmannplatz' }

console.log(parse('https://gitlab.com/herrmannplatz/gitlab-url-parse'))
// { user: 'herrmannplatz', project: 'gitlab-url-parse' }

console.log(parse('https://gitlab.com/herrmannplatz/gitlab-url-parse/merge_requests/1'))
// { user: 'herrmannplatz', project: 'gitlab-url-parse', mr: 1 }
```
