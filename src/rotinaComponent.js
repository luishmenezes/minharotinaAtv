import React from 'react';



const RotinaComponent = ({titulo, img, altText}) => {
    return (
    <div className="rotina" >
        <h1>{titulo="Luís Henrique"}</h1>
        <img src={img = "https://christianosantos.com/files/cs1/avatar-homem.jpg"} alt= {altText = "foto de perfil"}/>
        <video src="https://www.w3schools.com/tags/movie.mp4" typeof="movie/mp4"  autoPlay muted/>
        <audio src="https://christianosantos.com/files/cs1/musica01.mp3" typeof="audio/mp3" autoPlay loop  />
        <p>Acordo por volta das <b>06:00</b>, levanto tomo café da manhã, geralmente <b>bacon com ovos</b>, tomo meu banho e pego o onibus para o trabalho, <b>começo no trabalho as 8</b>, almoço as 12, geralmente uma marmita que levo de casa e volto ao trabalho até as <b>17:30</b>, saindo de lá vou pra <b>faculdade</b> e vejo aula das 18:30 até as 22, quando acaba pego o onibus e chego em casa por volta das 22:40/23:00, <b>janto e durmo.</b></p>
        <p><i>Agua mole em pedra dura tanto bate até que fura</i> ~Ovidio</p>
    </div>
    )
}

export default RotinaComponent;