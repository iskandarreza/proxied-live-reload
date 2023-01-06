var browserSync = require('browser-sync').create();

browserSync.init({
  proxy: 'https://surefoot.me/', // target remote url
  https: true,
  serveStatic: ['assets'], // directory to serve static files from
  files: ['assets/__custom.js','assets/__custom.css'], // files to serve
  snippetOptions: { // inject before <head> tag close. `snippet` refers to the browser-sync snippet that out reloads js or auto refreshes the css
    rule: {
      match: /<\/head>/i,
      fn: function (snippet, match) {
        return '<script src="/__custom.js"></script><link rel="stylesheet" type="text/css" href="/__custom.css"/>' + snippet + match;
      }
    }
  }
})
