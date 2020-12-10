$(document).ready(function(){

    $('input[name=cep]').change(function(){

  
        var cep = $(this).val().replace('-','');

    $.ajax({
   
        type: 'GET',
        url: 'http://viacep.com.br/ws/' + cep + '/json/',
        beforeSend: function(){
          //exibir loading
        },


        success: function(data){
        $('input[name=state]').val(data.uf);
        $('input[name=city]').val(data.localidade);
        $('input[name=adress]').val(data.logradouro);
        $('input[name=neighborhood]').val(data.bairro);
        $('input[name=complement]').val(data.complemento);
        $('input[name=ibge]').val(data.ibge);
        //removerloading
        }

    });

    
    });

});