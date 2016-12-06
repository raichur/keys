var fs = require('fs');
var ejs = require('ejs');

module.exports = function(req, res){
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./index.html', 'utf-8', function(err, content) {
    if (err) {
      res.end('Error: ' + err);
      return;
    }
    var data = [];
    data.keys = req.params.keys;
    var html = ejs.render(content, {data: data});
    res.end(html);
  });
}
