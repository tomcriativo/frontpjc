$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    console.log(id);

    $.ajax({
        url: 'https://playground.barato.com.br/desafio-front/api/offer/' + id,
        type: 'get',
        dataType: 'json',
        success: function (resposta) {
            console.log(resposta);

            $('#title').html(resposta.title);
            $('#category').html(resposta.category);
            $('#description').html(resposta.description);
            $('#valor').html('De <strike>R$ '+resposta.market_price+'</strike> Por <span class="text-danger">R$ '+resposta.price+'</span>');

            for (var x in resposta.images){
                $('#images').append('<img src="'+resposta.images[x].url+'" class="img-thumbnail">')
            }

        }
    });
});