$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

function getQuote(url){
  $.ajax({url: url, success: function(response){
    var forexcode = $("#forexcode").val();
    //console.log(forexcode)
    //alert( response.rates[forexcode] + $("#forexcode").val());
    $('#paneltext').html(response.rates[forexcode]+' '+$("#forexcode").val() + '/USD' );
    }, error: function(){console.log('error: '+ response.result)}
  });
};

$(document).ready(function(){
  $("button").click(function(){
    //var query = $("#forexcode").val();
    const URL =  "https://open.er-api.com/v6/latest/USD"; 
    getQuote(URL)
  });
});