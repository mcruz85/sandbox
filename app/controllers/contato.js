
var contatos = [
  {_id: 100, nome: 'MARCUS', email: 'mail@mail.com'},
  {_id: 101, nome: 'GABRIEL', email: 'gmail@mail.com'},
  {_id: 102, nome: 'JOSÉ', email: 'jmail@mail.com'}
];


module.exports = function() {
	var controller = {};

	controller.listarContatos = function(req, res) {
		res.json(contatos);
	};

	return controller;
};