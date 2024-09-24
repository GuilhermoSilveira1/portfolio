import React from "react";
import Terminal from "../../Terminal";
import "./styles/Projeto2.css"

const Projeto2 = () => {

    const title = ["Sistema de Supervisão de Supermercado"];

    const text1 = [
        'Este portfólio é o meu projeto mais recente!'
    ];


    const text2 = [
        "Ao iniciar meus estudos em React, percebi que seria a oportunidade perfeita para criar algo que mostrasse minhas experiências e aprendizados, enquanto aprimorava minhas habilidades na ferramenta."
    ];

    const text3 = [
        "Foi uma experiência extremamente enriquecedora, que me permitiu consolidar os conhecimentos adquiridos e organizar muitas das experiências relevantes que tive nos últimos anos."
    ];

    const text4 = [
        'Se quiser conferir o código-fonte, ele está disponível no meu '
    ];

    return (
        <>
            <div className="p2-title">
                <Terminal lines={title} />
            </div>

            <div className="p2-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
                <div id="p2-link">
                    <span><Terminal lines={text4} /></span>
                    <span><a href="https://github.com/GuilhermoSilveira1/portifolio">GitHub</a></span>
                </div>
            </div>
        </>
    );
};

export default Projeto2;