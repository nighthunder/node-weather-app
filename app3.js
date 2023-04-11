console.log(__dirname + "/public/index.html")
console.log(path.join(__filename,'..\public'))

const publicDirectory = path.join(__filename,'../public')

const app = express();

app.use(express.static(publicDirectory))

app.get('/', (req, res) => {
    res.send("/css/index.html");
})


const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});
  

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

