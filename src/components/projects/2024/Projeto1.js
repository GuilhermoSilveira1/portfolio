import React from "react";
import Terminal from "../../Terminal";


const Projeto1 = () => {

    const title = ["Sistema de Supervisão de Supermercado"];



    const text1 = [

        "Como último desafio na matéria de Programação Orientado à Objetos, a ideia foi criar um sistema em Java, com uma Interface na Linha de Comando (Command Line Interface, CLI), que permitisse ao usuário realizar algumas operações, além de salvar os dados no final do programa.",

    ];



    const text2 = [

        "Pode conferir em mais detalhes no meu " +

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



export default Projeto1;