import React from "react";



const ContatoComponente = ({text,facebook}) => {
    return (
        <div className="contato">
            <p>{text = "Você pode me encontrar pelo facebook, whatsapp e instagram"}</p>
            <section>
                <p>{facebook = "Email: luishpmenezes@hotmail.com e Nome no facebook: Luis Henrique"}</p>
                <a href="https://www.linkedin.com/in/luis-henrique-008a39246" target="_blank" rel="noopener noreferrer" > clique aqui para me conhecer</a>
            </section>
            
        </div>

    )
}

export default ContatoComponente;
