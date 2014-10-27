var tape = require('tape')
var render = require('./')

tape('renders', function(t) {
  var r = render()

  r.end('{"key":"hello", "readme":"# hello"}\n')

  r.once('data', function(data) {
    t.ok(true, 'got data')
  })

  r.on('end', function() {    
    t.end()
  })
})