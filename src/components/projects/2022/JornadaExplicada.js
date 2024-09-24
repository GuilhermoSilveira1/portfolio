import React from "react";
import Terminal from "../../Terminal";
import "./styles/JornadaExplicada.css"

const JornadaExplicada = () => {

    const year = [
        "Voltando para 2022..."
    ]

    const title = [
        "Jornada de Aprendizagem"
    ]

    const text1 = [
        "Na UniSenaiPR todo semestre temos uma matéria para desenvolver projetos. A faculdade entra em contato com uma empresa com um problema, e cabe aos alunos desenvolverem a solução. "
    ]

    const text2 = [
        "O andamento durante o semestre se dá com base em algumas fases, como a explicação do problema por parte da empresa, a pesquisa para descobrir se existem soluções parecidas para o problema, a elaboração de uma solução, e a apresentação para a empresa."
    ]

    const text3 = [
        "A partir do segundo semestre de 2023 também começaram a dar um foco maior na elaboração de artigos que explicam a solução, para publicação na revista da UniSenai, além da premiação da Jornada, que teve sua primeira edição neste ano. Os vencedores do primeiro lugar chegaram até a darem entrevista para redes de televisão."
    ]

    return (
        <>
            <div className="year-2022">
                <Terminal lines={year} />
            </div>

            <div className="ja-title">
                <Terminal lines={title} />
            </div>

            <div className="ja-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
            </div>
        </>
    )
}

export default JornadaExplicada