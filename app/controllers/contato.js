var contatos = [
  {_id: 101, nome: 'Marcus', email: 'marcus@mail.com'},
  {_id: 102, nome: 'Gabriel', email: 'gabriel@mail.com'},
  {_id: 103, nome: 'Pedro', email: 'pedor@mail.com'},
  {_id: 104, nome: 'José', email: 'jose@mail.com'}
];


module.exports = function() {
	var controller = {};

	controller.listarContatos = function(req, res) {
	  res.json(contatos);
	};

	controller.obtemContato = function(req, res) {

	  var id = req.params.id;

/*
	  var tmp =0;
	  for (var i = 0; i < 1000000000; i++) {
	  	tmp++;
	  };
*/
	  console.log('fim');

	  var contato = contatos.filter((contato) => {
	    return contato._id == id;		
	  })[0];

	  contato ?
	    res.json(contato) :
	    res.status(404).send('Contato não encontrado');



	};

	return controller;
};
