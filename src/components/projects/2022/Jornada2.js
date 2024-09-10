import React from "react";

import Terminal from "../../Terminal";



const Jornada2 = () => {

    const title = ["Automatização de Máquina de Suco"];



    const text1 = [

        "No segundo semestre de 2022, o desafio foi automatizar uma máquina de suco.",

    ];



    const text2 = [

        "A solução em si não foi muito difícil de fazer funcionar, utilizando um microcontrolador, uma válvula solenoide e algumas chapas de alumínio já conseguimos atender os requisitos do projeto. Porém, foi a primeira vez que precisamos documentar o projeto. Então isso significou colocar os valores, os esquemas elétricos, os desenhos da solução, como realizar a manutenção, entre outros.",

    ];



    return (

        <>

            <div className="ja2-title">

                <Terminal lines={title} />

            </div>



            <div className="ja2-text">

                <Terminal lines={text1} />

                <Terminal lines={text2} />

            </div>

        </>

    );

};



export default Jornada2;