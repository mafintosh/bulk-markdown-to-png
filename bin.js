#!/usr/bin/env node

var render = require('./')
var images = process.argv.indexOf('--no-images') === -1

process.stdin.pipe(render({images:images})).pipe(process.stdout)