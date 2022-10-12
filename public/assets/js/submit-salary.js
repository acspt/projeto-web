$(document).ready(function(){	



	$("button").click(function(){

		var student = $("#student").val();
		var salary = $("#salary").val();

		postedData = {
			"student":student,
			"salary": salary
		 }
		 console.log(postedData)

		$.ajax({
			type: 'POST',
			url: '.../../api/submit-salary.php',
			data: JSON.stringify(postedData),
			dataType: 'json',
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