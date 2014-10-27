var phantom = require('phantom-render-stream')
var fs = require('fs')
var marked = require('marked')
var tar = require('tar-stream')
var ndjson = require('ndjson')
var through = require('through2')
var concat = require('concat-stream')
var util = require('util')
var duplexify = require('duplexify')

var style = fs.readFileSync(__dirname+'/style.css', 'utf-8')

module.exports = function() {
  var render = phantom()
  var pack = tar.pack()
  var parse = ndjson.parse()

  parse.pipe(through.obj(function(data, enc, cb) {
    var body = marked(data.readme)
    var html = util.format('<html><head><style>%s</style><body class="markdown-body" style="background-color: #fff; padding: 25px;">%s</body></html>', style, body)
    var r = render()

    r.pipe(concat(function(png) {
      pack.entry({name:(data.key || dat.name)+'.png'}, png, cb)
    }))

    r.end(html)
  }), function(cb) {
    pack.finalize()
    cb()
  })  

  return duplexify(parse, pack)
}
