import React from "react";
import Terminal from "../../Terminal";
import img1 from "./../../../img/Projeto_1.png"
import "./styles/Projeto1.css"


const Projeto1 = () => {

    const title = ["Sistema de Supervisão de Supermercado"];

    const text1 = [
        'Como desafio final da disciplina de Programação Orientada a Objetos, desenvolvi um sistema em Java com uma Interface de Linha de Comando (CLI).'
    ];

    const text2 = [
        "O objetivo era permitir que o usuário realizasse operações de supervisão no supermercado, como gerenciar inventário, registrar vendas e outras funcionalidades essenciais."
    ]

    const text3 = [
        "O sistema também foi projetado para salvar os dados ao final de cada execução, garantindo a persistência das informações."
    ]

    const text4 = [
        'Você pode conferir mais detalhes sobre o projeto no meu '
    ];

    return (
        <>
            <div className="p1-title">
                <Terminal lines={title} />
            </div>

            <div className="p1-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
                <div id="p1-link">
                    <span><Terminal lines={text4} /></span>
                    <span><a href="https://github.com/GuilhermoSilveira1/Supermarket-System">Github</a></span>
                </div>
            </div>

            <div className="p1-image">
                <img alt="Imagem do projeto em funcionamento" src={img1} id="p1-img1" />
            </div>
        </>
    );
};

export default Projeto1;