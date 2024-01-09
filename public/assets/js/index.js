

$(document).ready(function(){	



	$("button").click(function(){

		$.ajax({

			type: 'GET',

			url: '.../../api/searchstudent.php',

			data: "acs",

			dataType: 'text',

			success: function( data, textStatus, jQxhr )

			{

				console.log(data)

			},

			error: function( jqXhr, textStatus, errorThrown ){

				alert("erro: " + textStatus + " - "+ errorThrown + " - " + jqXhr);

			}

		});

					

	});

});