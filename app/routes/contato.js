module.exports = function(app) {
	
	var controller = app.controllers.contato;
	app.get('/contatos', controller.listarContatos);
	app.get('/contato/:id', controller.obtemContato);
}