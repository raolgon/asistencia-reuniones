let mime_types = {
    'js' : 'text/javascript',
    'html' : 'text/html',
    'css' : 'text/css',
    'jpg' : 'image/jpg',
    'gif' : 'image/gif',
    'png' : 'image/png'
}

function create(http, url, fs){
    http.createServer(function(req,res){
        let path_file = returnPathFile(url, req)

        readFile(fs, path_file, function(number, file_content){
            if(number ===  400){
                res.writeHead(number, 'text/plain')
                res.end('Error 404. El enlace no existe o ha dejado de existir.')
            } else if(number === 500){
                res.writeHead(number, 'text/plain')
                res.end('Error interno.')
            } else {
                var extention = path_file.split('.').pop();
                var mine_type = mime_types[extention]
                res.writeHead(number, {'Content-Type': mine_type})
                res.end(file_content)
            }
        })
    }).listen(4000, '127.0.0.1');
}

function returnPathFile(url, req){
    let path_name = (url.parse(req.url).pathname == '/') ? '/index.html' : url.parse(req.url).pathname
    let path_file = 'public/' + path_name
    return path_file
}

function readFile(fs, path_file, callback){
    fs.exists(path_file, function(exist){
        if(exist){
            fs.readFile(path_file, function(error, file_content){
                if(error){
                    callback(500, null)
                } else {
                    callback(200, file_content)
                }
            })
        } else {
            callback(400, null)
        }
    })
}
exports.create = create