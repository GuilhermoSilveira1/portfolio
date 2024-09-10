import React from "react";
import Terminal from "../../Terminal";


const Jornada3 = () => {

    const title = ["Braço Colaborativo"];



    const text1 = [

        "No segundo ano, o primeiro desafio foi ajudar com o abastecimento de uma linha de usinagem.",

    ];



    const text2 = [

        "Nesse projeto, fomos introduzidos à alguns novos conceitos de projetos.",

    ];



    const text3 = [

        "A primeira ideia nova, foi a de fazer diferentes níveis em que a nossa aplicação pudesse ser adquirida pela empresa, e fazer de um modo em que a mesma pudesse entrar no nível mais básico, e ir melhorando a operação conforme a necessidade, investimento, etc.",

    ];



    const text4 = [

        "O problema era o abastecimento de virabrequins em uma linha de usinagem. Esse problema englobava alguns outros, como o abastecimento por empilhadeira do posto de trabalho, a eventual falta no posto para o operador abastecer a linha, a ocorrência de Lesão por Esforço Repetitivo (LER), entre outros.",

    ];



    const text5 = [

        "A solução, que deveria conter um braço colaborativo, ficou muito bacana, com 3 níveis distintos que a empresa poderia escolher para implementar, variando de apenas implementar um braço, até um abastecimento automatizado das caixas com virabrequins.",

    ];



    return (

        <>

            <div className="ja3-title">

                <Terminal lines={title} />

            </div>



            <div className="ja3-text">

                <Terminal lines={text1} />

                <Terminal lines={text2} />

                <Terminal lines={text3} />

                <Terminal lines={text4} />

                <Terminal lines={text5} />

            </div>

        </>

    );

};



export default Jornada3;