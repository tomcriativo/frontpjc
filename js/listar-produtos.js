        $.ajax({
            url: 'https://playground.barato.com.br/desafio-front/api/offers',
            type: 'GET',
            dataType: 'json',
            success: function (resposta) {

                console.log(resposta[0]);


                for (var x in resposta) {
                  var elemento = $('.produto:first-child').clone(); //usar para pegar
                  elemento.find('.card-img-top').attr('src', resposta[x].image.url);
                  elemento.find('.card-title').text(resposta[x].title.substring(0, 30) + '...'); //sub string faz pegar a quantidade de caracteres
                  elemento.find('.card-text').html(resposta[x].description.substring(0, 100) + '...');
                  elemento.find('.valor').text('R$ ' + resposta[x].market_price);
                  elemento.removeClass('invisible');
                  $('.container').append(elemento);



                } 
                
                
            }
        });

