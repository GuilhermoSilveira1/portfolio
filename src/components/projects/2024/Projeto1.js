import React from "react";
import Terminal from "../../Terminal";


const Projeto1 = () => {

    const title = ["Sistema de Supervisão de Supermercado"];

    const text1 = [
        'Como desafio final da disciplina de Programação Orientada a Objetos, desenvolvi um sistema em Java com uma Interface de Linha de Comando (CLI). O objetivo era permitir que o usuário realizasse operações de supervisão no supermercado, como gerenciar inventário, registrar vendas e outras funcionalidades essenciais. O sistema também foi projetado para salvar os dados ao final de cada execução, garantindo a persistência das informações.'
    ];

    const text2 = [
        'Você pode conferir mais detalhes sobre o projeto no meu ' + <a href="https://github.com/GuilhermoSilveira1/Supermarket-System">GitHub</a>
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

export default Projeto1;