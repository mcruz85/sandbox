var myAPP = {

  init: function( settings ){

    myAPP.config = {
    	urlBase: "contatos",
    	container: $("ul.contacts")
    }

    // Allow overriding the default config
    $.extend( myAPP.config, settings );

    myAPP.setup();

  },

  setup: function() {

  	console.log($(".show-more"));

  	$("a").on("click", function(evt) {

  	  $(".modal, .overlay").show();
  	  evt.preventDefault();
  	 
  	});

  	$(".close, .overlay").on("click", function (evt) {
  		$(".modal, .overlay").hide();
  		evt.preventDefault();
  	})

  	$(".show-more").on("click", function(e){

  	  console.log("load");

	  $.ajax({
	    dataType: "json",
	    url: myAPP.config.urlBase,
	    success: function(data) {

	       $.each(data, function(i, item) {
	         myAPP.createItem(item);
	    	});


	       $("ul").fadeOut("fast", function(){
	         $("ul").fadeIn("slow");	
	       });
	       
	  	}
	  });  

	  e.preventDefault();

  	});


  },

  createItem: function(item) {
    console.log("item", item);
	var li = $("<li/>")
		.appendTo(myAPP.config.container);

	var aa = $("<a/>")
		.attr("id",item._id)
		.attr("href", "#")
		.text(item.nome)
		.appendTo(li);

  }

};



$(document).ready( myAPP.init );