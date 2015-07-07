$(document).ready(function() {

$('#loading').show();

get_data();

function get_data(){
	var AmbilData;
	$.ajax({
				type : 'GET',
				url : 'http://192.168.0.144/coba/dbcon.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						AmbilData = data.client;
							$('#loading').hide();
							$('#tampilData').show(); 
							$.each(AmbilData, function(index, loaddata) {
							$('#dataList').append(
								'<tr><td><a onClick="alert(\''+ loaddata.saldo_credit + '\');" data-ajax="false">'+ loaddata.client_name + '</a></td></tr>');
							}); 
				},
				error: function(jqXHR, exception) {
					$('#loading').hide();
					$('#gagal').show();
				}
		});
}

});