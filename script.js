function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');

    var data = new Date();

    var hora = data.getHours();

    /*var hora = 8;*/

    msg.innerHTML = `Agora são ${data.getHours()} horas e ${data.getMinutes()} minutos`;

    if(hora >= 0 && hora < 12)
    {
        img.src = 'fotomanha.png';
        document.body.style.background = "rgb(202, 93, 38)";
    }
    else if(hora > 11 && hora < 18)
    {
        img.src = 'fototarde.png';
        document.body.style.background = "rgb(240, 162, 24)";
    }
    else
    {
        img.src = 'fotonoite.png';
        document.body.style.background = "rgb(1, 49, 113)";
    }
}