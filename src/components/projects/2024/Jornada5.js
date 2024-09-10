import React from "react";
import Terminal from "../../Terminal";

const Jornada5 = () => {
    const title = [
        "Concepção de um Site de Recrutamento e Seleção"
    ]

    const text1 = [
        "No primeiro semestre de 2024, e meu primeiro em Engenharia de Software, o desafio era fazer as telas de um site de recrutamento e solução para a empresa Code Sails."
    ]

    const text2 = [
        "Alguns pontos que apareceram para mim foram o primeiro contato com o figma para planejar as telas, e posteriormente o uso do canva. A contextualização do problema, quais conceitos seriam usados para produzir a solução esperada, como Experiência e Interface do usuário (UI e UX), a documentação do processo todo em um artigo que poderia ser publicado na revista da UniSenai. A mudança no modo de pensar as soluções também foi algo que senti diferença de como era na Mecatrônica."
    ]

    return (
        <>
            <div className="ja5-title">
                <Terminal lines={title} />
            </div>

            <div className="ja5-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
            </div>
        </>
    )
}

export default Jornada5;