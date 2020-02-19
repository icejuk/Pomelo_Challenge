
const Hapi = require('hapi');
var path = require('path');

const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8888
});

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
			reply.file('./index.html');
	}
});

server.route({
	method: 'POST',
	path: '/reParent',
	handler: function (request, reply) {
		const payload = request.payload;
		reply(reParent(payload.data));
	}
});

function reParent(input) {
	const children = [];
	let parentId = null;
	for (const key in input) {
		const element = input[key];
		for (const child of element) {
			if (child.parent_id == null)
				parentId = child.id
			children.push(child);
		};
	}
	children.sort((a, b) => (a.level > b.level) ? -1 : 1)

	const result = [];
	for (const child of children) {
		if (!result[child.parent_id]) {
			result[child.parent_id] = [];
		}
		if (!result[child.id]) {
			result[child.id] = child;
		}
		else {
			const childrenOfId = result[child.id];
			result[child.id] = child;
			result[child.id]['children'] = childrenOfId.reverse();
		}

		result[child.parent_id].push(result[child.id])
	}
	return [result[parentId]];
}

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