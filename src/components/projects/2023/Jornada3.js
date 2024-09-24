import React from "react";
import Terminal from "../../Terminal";
import img1 from "./../../../img/JA_3.png"
import img2 from "./../../../img/JA_3-2.png"
import img3 from "./../../../img/JA_3-3.png"
import "./styles/Jornada3.css"


const Jornada3 = () => {

    const year = [
        "Voltando para 2023..."
    ]

    const title = ["Braço Colaborativo"];

    const text1 = [
        'No primeiro semestre do segundo ano, enfrentamos um novo desafio proposto pelo professor: desenvolver uma solução para uma linha de abastecimento de virabrequins, essencial para um processo de usinagem que não pode ser interrompido. Os problemas identificados incluíam a falta de abastecimento, Lesão por Esforço Repetitivo (LER) do operador responsável por retirar os virabrequins das caixas e o risco de abastecimento incorreto.'
    ];

    const text2 = [
        'Para abordar esses problemas, fomos introduzidos a um conceito inovador na criação e venda de soluções. O professor propôs a implementação de diferentes níveis de aplicação, permitindo que a empresa adotasse a solução de forma modular. O objetivo era desenvolver uma solução escalável, começando com um nível básico e permitindo melhorias progressivas com base nas necessidades e no investimento da empresa.'
    ];

    const text3 = [
        'Desenvolvemos três níveis distintos de implementação: básico, intermediário e avançado. O nível básico incluía a integração de um braço colaborativo, enquanto os níveis mais avançados incorporavam funcionalidades adicionais, como o abastecimento automatizado das caixas com virabrequins. A solução foi projetada para melhorar continuamente a operação, tornando-a mais eficiente e menos suscetível a falhas.'
    ];

    const text4 = [
        'Esse projeto não apenas nos desafiou a criar uma solução técnica eficiente, mas também a pensar estrategicamente sobre a escalabilidade e a modularidade em projetos industriais.'
    ];

    return (
        <>

            <div className="year-2023">
                <Terminal lines={year} />
            </div>

            <div className="ja3-title">
                <Terminal lines={title} />
            </div>

            <div className="ja3-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
                <Terminal lines={text4} />
            </div>

            <div className="ja3-image">
                <img alt="Imagem do projeto 3D" src={img1} id="ja3-img1" />
                <img alt="Imagem do projeto 3D" src={img2} id="ja3-img2" />
                <img alt="Imagem do projeto 3D" src={img3} id="ja3-img3" />
            </div>
        </>
    );
};

export default Jornada3;