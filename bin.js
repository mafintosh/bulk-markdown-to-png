#!/usr/bin/env node

var render = require('./')

process.stdin.pipe(render()).pipe(process.stdout)