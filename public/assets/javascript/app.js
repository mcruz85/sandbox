var myAPP = {

  init: function( settings ){

    myAPP.config = {
    	urlList: "contatos",
    	urlBase: "contato",
    	container: $("ul.contacts"),
    	modal: $(".modal"),
    	spinner: $(".sk-spinner")
    }

    // Allow overriding the default config
    $.extend( myAPP.config, settings );

    myAPP.setup();

  },

  setup: function() {

  	var doc = $(document);
  	doc.on("ajaxStart", myAPP.onAjaxStart );
  	doc.on("ajaxStop", myAPP.onAjaxStop );
  	$(".contacts").on("click", "a", myAPP.onItemClick );
  	$(".show-more").on("click", myAPP.onClickShowMore );
  	$(".close").on("click", myAPP.onClickCloseModal );

  },


  onItemClick: function(event) {

  	$.ajax({
	  	dataType: "json",
	  	url: myAPP.config.urlBase + "/" + $(this).data("id"),	  
	  	success: myAPP.viewDetails
		});

		event.preventDefault();
  },

  viewDetails: function(item) {

  	myAPP.config.modal.find("#nome").text(item.nome);
		myAPP.config.modal.find("#_id").text(item._id);
		myAPP.config.modal.find("#email").text(item.email);
		$(".modal, .overlay").show();

  },

  onClickCloseModal: function(event) {
  	$(".modal, .overlay").hide();
  },

  onClickShowMore: function(event) {

  	$.ajax({
	  	dataType: "json",
	  	url: myAPP.config.urlList,
	  	success: function(items) {

	  		myAPP.createList(items);

	    	$("ul").fadeOut("fast", function(){
	      	$("ul").fadeIn("slow");	
	    	});	       
	  	}
		});  
		
  },

  createItem: function(item) {
		var li = $("<li/>")
			.appendTo(myAPP.config.container);

		var aa = $("<a/>")
			.data("id", item._id)
			.attr("href", "#")
			.text(item.nome)
			.appendTo(li);

  },

  onAjaxStart: function() {
    $(".overlay-load").show();
  	myAPP.config.spinner.show();
  },

  onAjaxStop: function() {
    $(".overlay-load").hide();
  	myAPP.config.spinner.hide();
  },

  createList: function(items) {
  	$.each(items, function(i, item) {
	  	myAPP.createItem(item);
		});
  }

};



$(document).ready( myAPP.init );
