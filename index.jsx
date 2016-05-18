var http = require('http');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Body = require('./components/Body');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(
    ReactDOMServer.renderToString(
      <html>
        <head>
          <title>Redux React TODO App</title>
        </head>

        <Body />
      </html>
    )
  )
}).listen(1337)
console.log('Server running at http://localhost:1337/');
