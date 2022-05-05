import React from "react";



export default function Main() {

    function slider(imagem, cor) {
         document.querySelector('.extrasimg').src = imagem
         document.querySelector('.extras').style.background = cor


    }

    function changeColor(color) {
        const circulo = document.querySelector('.extras');
        circulo.style.background = color;
    }

    return (

        <section className="sobre">
            <div className="extras"> {/*Aqui será a sessão do circulo*/}
                <img className="extrasimg" src="img/img1.png"></img>
                <div className="redes-sociais">
                    <a href="#"><img src="img/facebook.png"></img></a>
                    <a href="#"><img src="img/instagram.png"></img></a>
                    <a href="#"><img src="img/twitter.png"></img></a>
                </div>
            </div>

            <div className="textos">
                <h1>It's not just Coffee</h1>
                <h1>It's <b style={{ color: '#017143' }}>Starbucks</b></h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                <button className="botao">Learn More</button>
            </div>

            <footer>
                <ul className="drinks">
                    <li><img className="img1" src="img/thumb1.png" onClick={() =>slider('img/img1.png', '#017143' )} /*{...() =>changeColor('#017143')}*/></img></li>
                    <li><img className="img2" src="img/thumb2.png" onClick={() => slider('img/img2.png', 'rgb(226 170 161)')} /*{...() =>changeColor('#ff05ff')}*/></img></li>
                    <li><img className="img3" src="img/thumb3.png" onClick={() =>slider('img/img3.png', 'rgb(241 119 173)')} /*{...() =>changeColor('#5f005f')}*/></img></li>
                </ul>
            </footer>


        </section>


    )
}