'use strict';
console.log('test');
const Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: 5555
});

server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        reply('<h1>Hello Hapi :)</h1');
    }
});
server.start(function () {
    console.log('Hapi running at: ', server.info.uri);
});

// const init = async () => {

//     const server = Hapi.server({
//         port: 3000,
//         host: 'localhost'
//     });

//     server.route({
//         method: 'GET',
//         path: '/',
//         handler: (request, h) => {

//             return 'Hello World!';
//         }
//     });

//     await server.start();
//     console.log('Server running on %s', server.info.uri);
// };

// process.on('unhandledRejection', (err) => {

//     console.log(err);
//     process.exit(1);
// });

// init();