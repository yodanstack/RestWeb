import http from 'http';
import http2 from 'http2';
import fs from 'fs'


const server = http2.createSecureServer({
    key: fs.readFileSync('./keys/server.key'),
    cert: fs.readFileSync('./keys/Server.crt')
},(req, resp) => {

    console.log(req.url);

    // resp.write('Hola Mundo');
    // resp.end();

    // resp.writeHead(200, {'content-type': 'text/html'});
    // resp.write('<h1>Hola Mundo</h1>');
    // resp.end();

    // const data = {name: 'John Doe', age: 30, city: 'New York'};
    // resp.writeHead(200, {'content-type': 'application/json'});
    // resp.end(JSON.stringify(data));


    if(req.url === '/'){
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        resp.writeHead(200,{'content-type': 'text/html'});
        resp.end(htmlFile);
        return;
    }

    if(req.url?.endsWith('.js')){
        resp.writeHead(200,{'content-type': 'application/javascript'});
    }else if(req.url?.endsWith('.css')) {
        resp.writeHead(200,{'content-type': 'text/css'});
    }

    try {
        const responsecontent = fs.readFileSync(`./public${req.url}`, 'utf-8');
        resp.end(responsecontent);

    } catch (error) {
        resp.writeHead(404, {'Content-type': 'text/html'});
        resp.end();
    }

});


server.listen(3000, ()=> {
    console.log('server runnig on port 3000');
});


