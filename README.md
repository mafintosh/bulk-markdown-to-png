# bulk-markdown-to-png

Render a stream of markdown files to a tarball of pngs

```
npm install -g bulk-markdown-to-png
```

## Usage

```
dat clone npm.dathub.org --skim
dat cat --gte dat --limit 20 | bulk-markdown-to-png > readmes.tar
```

## Programmatic usage

``` js
var render = require('bulk-markdown-to-png')
var fs = require('fs')

var transform = render()

transform.write('{"key":"hello", "readme":"# hello world"}')
transform.end()

transform.pipe(fs.createWriteStream('readmes.tar'))
```

## License

MIT
