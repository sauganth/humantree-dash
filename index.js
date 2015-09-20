/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
var dns = require('dns');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });

    res.write('Hello from Hello World.\n');
    dns.lookup('www.google.com', function onLookup(err, addresses, family) {
        console.log('addresses:', addresses);
        res.write('addresses:'+String(addresses));
        res.end();
    });
}).listen(9080, "");