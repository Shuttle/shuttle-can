var chokidar = require('chokidar');
var fs = require('fs');
var pathio = require('path');    

var options = {
  ignoreInitial: true,
  ignored: [
    'LICENSE',
    'package*',
    'node_modules', 
    'README.md',
    /(^|[\/\\])\../]
}

var destination = function(path) {
  return '..\\shuttle-canstrap-samples\\node_modules\\shuttle-canstrap\\' + path;
}

var logger = console.log.bind(console);

var log  = function(what, path) {
  logger(`[${what}]: ${path}`);
}

chokidar
  .watch('.', options)
  .on('add', path => {
    fs.copyFileSync(path, destination(path));
    log('add-file', path);
  })
  .on('addDir', path => {
    fs.mkdirSync(destination(path));
    log('add-folder', path);
  })
  .on('change', path => {
    fs.copyFileSync(path, destination(path));
    log('change', path);
  })
  .on('unlink', path => fs.unlinkSync(destination(path)))
  .on('unlinkDir', path => fs.unlinkSync(destination(path.substr(__dirname.length - 1))))
  .on('error', error => logger(`Watcher error: ${error}`));