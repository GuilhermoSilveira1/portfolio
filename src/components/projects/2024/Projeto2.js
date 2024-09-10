import React from "react";
import Terminal from "../../Terminal";


const Projeto2 = () => {

    const title = ["Sistema de Supervisão de Supermercado"];



    const text1 = ["Sim, esse portifólio é o meu projeto mais recente!"];



    const text2 = [

        'Já que estou "molhando os pés" em React, e ainda não havia feito meu portifólio, foi uma ótima oportunidade de criá-lo e utilizar mais React.',

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