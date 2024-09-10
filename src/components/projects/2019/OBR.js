import React from "react";
import Terminal from "../../Terminal";
import './OBR.css'

const OBR = () => {
    const lineOBR = [
        'Voltando para 2019...',
        'Projeto 1: Olimpíada Brasileira de Robótica',
    ]


    const text1 = [
        'Em 2019, engressei no clube de robótica, por onde participei da competição.Junto com um amigo, conseguimos o segundo lugar na etapa regional, disputada no Sesi CiC.'
    ]

    const text2 = [
        'Passamos para a etapa do estadual, mas acabamos parando no sétimo lugar, sem nos classificarmos para a etapa nacional.'
    ]

    const text3 = [
        'Por conta dessa experiência, eu comecei a fazer o curso de técnico em Mecatrônica, completando em 2021.E por ter me aprofundado em Mecatrônica, entrei para a Engenharia Mecatrônica em feveiro de 2022.'
    ]


    return (
        <>
            <div className="obr-intro">
                <Terminal lines={lineOBR} />
            </div>

            <div className="obr-text">
                <Terminal lines={text1} letterSpeed={50} />
                <Terminal lines={text2} letterSpeed={50} />
                <Terminal lines={text3} letterSpeed={50} />
            </div>

            <div className="image-container">
                <img alt="Foto da medalha da etapa regional da OBR" src="/img/medalhaOBR.jpg" />
                <img alt="Foto na OBR estadual" src="/img/OBR.jpg" />
            </div>
        </>
    )
}

export default OBR