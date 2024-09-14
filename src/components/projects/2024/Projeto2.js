import React from "react";
import Terminal from "../../Terminal";


const Projeto2 = () => {

    const title = ["Sistema de Supervisão de Supermercado"];

    const text1 = [
        'Este portfólio é o meu projeto mais recente! Ao iniciar meus estudos em React, percebi que seria a oportunidade perfeita para criar algo que mostrasse minhas experiências e aprendizados, enquanto aprimorava minhas habilidades na ferramenta. Foi uma experiência extremamente enriquecedora, que me permitiu consolidar os conhecimentos adquiridos e organizar muitas das experiências relevantes que tive nos últimos anos.'
    ];

    const text2 = [
        'Se quiser conferir o código-fonte, ele está disponível no meu ' + <a href="https://github.com/GuilhermoSilveira1/portifolio">GitHub</a>
    ];

    const text3 = [
        "Aprendi muito sobre o funcionamento da ferramenta, e ainda aproveitei colocar muitas experiências relevantes que tive nos últimos anos.",
    ];

    const text4 = [
        "E novamente, o código fonte está disponível no meu " +
        <a href="https://github.com/GuilhermoSilveira1">GitHub</a>
    ];

    return (
        <>
            <div className="projeto1-title">
                <Terminal lines={title} />
            </div>

            <div>
                <Terminal lines={text1} />
                <Terminal lines={text2} />
            </div>
        </>
    );
};

export default Projeto2;