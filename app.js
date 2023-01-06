var browserSync = require('browser-sync').create();

browserSync.init({
  proxy: 'https://surefoot.me/',
  https: true,
  serveStatic: ['assets'],
  files: ['assets/__custom.js','assets/__custom.css'],
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function (snippet, match) {
        return '<script src="/__custom.js"></script><link rel="stylesheet" type="text/css" href="/__custom.css"/>' + snippet + match;
      }
    }
  }
})