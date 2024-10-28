$(document).ready(function(){
    
    $('#carrossel').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').on('click',function(){
        //slideToggle faz com que, se o menu está aberto, ele sobe, e se ele está em cima, desca
        $("#menu").slideToggle(500)  
    })

    /*
    $('#telefone').mask('(00) 00000-0000',{
        placeholder:'(__) _____-____'
    })
        */
    
    //se quiser colocar letras, é com 'S'
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            //o nome dos campos se refere a indentificação 'name', não ao id
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                //verifica se o formato da entrada está de acordo com o formato padrão de um e-mail
                email: true
            },
            interesse:{
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome'
        },
        //substitui o evento padrao que aconteceria pelo especificado dentro dele
        submitHandler: function(form){ 
            console.log(form)
        },
        //quando o evento atrelado ao formulario nao for valido, uma ação desencadeará a partir dele
        invalidHandler: function(evento, validador){
            let camposInvalidos = validador.numberOfInvalids()
            alert(`${camposInvalidos} campos inválidos`)
        }
    })

    $('.carros button').on('click',function(e){
        //'this' se refere ao elemento clicado, 'parent()' faz com que naveguemos até o elemento pai dele,
        //'find('algo')' faz com que achemos o algo que é filho do elemento em que estamos navegando, e 'text()' retira apenas o texto do elemento 
        let veiculoDesejado = $(this).parent().find('h3').text()
        const destino = $('#contato');

        $('#interesse').val(veiculoDesejado)

        //tem que ser o html, não pode ser body> Porém, em alguns navegadores, a animação pe aplicada ao body,
        //como no firefox. Logo, é bom colocar os dois
        //$(elemento).animate({ propriedades }, duracao, easing, callback);
        //proriedades -> objeto css que define a propriedade css que será animada e seu valores finais
        //scrollTop: posicao do elemento da página em relação ao topo
        //offset().top -> distância que o elemento ta em relação ao topo
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})