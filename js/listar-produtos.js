$(document).ready(function () {
    $.ajax({
        url: 'https://playground.barato.com.br/desafio-front/api/offers',
        type: 'get',
        dataType: 'json',
        success: function (resposta) {
            console.log(resposta);
            var cards = '';
            var colunas = 0;
            for (var x in resposta) {
                
                var elemento = $('.produto:first-child').clone();


                elemento.find('.card-img-top').attr('src', resposta[x].image.url);
                elemento.find('.card-title').html(resposta[x].title.substring(0, 30)+'...'); //o substring faz exibir o numero de caracteres
                elemento.find('.card-text').html(resposta[x].description.substring(0, 200)+'...');
                elemento.find('.valor').html('De <strike>R$ '+resposta[x].market_price+'</strike> Por <span class="text-danger">R$ '+resposta[x].price+'</span>');
                elemento.find('.btn').attr('href', 'detalhes.html?id='+resposta[x].id);

                cards += elemento.html();
                colunas++;

                if (colunas == 4) {
                    $('.container-fluid').append('<br><div class="card-deck">' + cards + '</div>');
                    colunas = 0;
                    cards = '';
                }
            }
            if (colunas < 4) {
                $('.container-fluid').append('<br><div class="card-deck">' + cards + '</div>');
            }

        }
    });
});