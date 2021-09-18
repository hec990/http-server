var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if (!port) {
    console.log('��ָ���˿ںźò�����\nnode server.js 8888 ����������')
    process.exit(1)
}

var server = http.createServer(function(request, response) {
    var parsedUrl = url.parse(request.url, true)
    var pathWithQuery = request.url
    var queryString = ''
    if (pathWithQuery.indexOf('?') >= 0) { queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
    var path = parsedUrl.pathname
    var query = parsedUrl.query
    var method = request.method

    /******** �����￪ʼ�������治Ҫ�� ************/

    console.log('�и�ɵ�ӷ������������·��������ѯ������Ϊ��' + pathWithQuery)

    // ���ʸ�Ŀ¼����Ӧ������
    if (path === '/') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write("后台服务器登录成功！")
        response.end()
    } else if (path === '/x') { // ���ʸ�Ŀ¼����ѯ����  ==> CSS code
        response.statusCode = 200 // ״̬��
        response.setHeader('Content-Type', 'text/css;charset=utf-8')
        response.write(`
                        body { color: green; }
                        `)
        response.end()
    } else if (path === '/y') { // ���ʸ�Ŀ¼����ѯ����  ==> JS code
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
        response.write(`
                        console.log('Hello JS')
                        `)
        response.end()
    } else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.write(`�������·�������
                        ڶ� Ӧ������ `)
        response.end()
    }

    /******** ������������治Ҫ�� ************/
})

server.listen(port)
console.log('���� ' + port + ' �ɹ�\n�����ڿ���ת��720��Ȼ���õ緹�Ҵ� http://localhost:' + port)