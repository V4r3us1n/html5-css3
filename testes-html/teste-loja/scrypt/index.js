var contadorAbrirFecharMenu = 0;

function ExibirMenu()
{
    var menuLateral = document.getElementById("menu-lateral");

    if (contadorAbrirFecharMenu % 2 == 0)
    {
        menuLateral.classList.remove("fechar-menu");
        menuLateral.classList.add("abrir-menu");
    }
    else
    {
        menuLateral.classList.remove("abrir-menu");
        menuLateral.classList.add("fechar-menu");
    }

    contadorAbrirFecharMenu++;
}

function CarregarImagens()
{
    var imagens = document.getElementsByClassName("imagem-produto");

    for (var i = 0; i < imagens.length; i++)
    {
        
        switch (i)
        {
            case 0:
                imagens[i].classList.add("item0");
                break;
            case 1:
                imagens[i].classList.add("item1");

                break;
            case 2:
                imagens[i].classList.add("item2");

                break;
            case 3:
                imagens[i].classList.add("item3");

                break;
            case 4:
                imagens[i].classList.add("item4");

                break;
            case 5:
                imagens[i].classList.add("item5");

                break;
            case 6:
                imagens[i].classList.add("item6");

                break;
            case 7:
                imagens[i].classList.add("item7");

                break;
            case 8:
                imagens[i].classList.add("item8");

                break;
            case 9:
                imagens[i].classList.add("item9");

                break;
        }
    }
}