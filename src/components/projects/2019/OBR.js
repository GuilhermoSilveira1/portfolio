import React from "react";
import Terminal from "../../Terminal";
import './OBR.css'

const OBR = () => {
    const lineOBR = [
        'Voltando para 2019...',
        'Olimpíada Brasileira de Robótica',
    ]


    const text1 = [
        'Em 2019, entrei para o clube de robótica do Colégio Sesi Internacional e tive a oportunidade de participar da Olimpíada Brasileira de Robótica (OBR). Junto com um colega, conquistamos o segundo lugar na etapa regional, realizada no Sesi CiC. Avançamos para a etapa estadual, onde conquistamos o sétimo lugar.'
    ]

    const text2 = [
        'Essa experiência foi transformadora e despertou meu interesse pela Mecatrônica. Logo após, decidi me inscrever no curso técnico em Mecatrônica, na unidade do Senai Celso Charuri, que concluí em 2021. O aprofundamento na área me levou a dar o próximo passo, ingressando na Engenharia Mecatrônica em fevereiro de 2022.']



    return (
        <>
            <div className="obr-intro">
                <Terminal lines={lineOBR} />
            </div>

            <div className="obr-text">
                <Terminal lines={text1} letterSpeed={50} />
                <Terminal lines={text2} letterSpeed={50} />
            </div>

            <div className="image-container">
                <img alt="Foto da medalha da etapa regional da OBR" src="/img/medalhaOBR.jpg" />
                <img alt="Foto na OBR estadual" src="/img/OBR.jpg" />
            </div>
        </>
    )
}

export default OBR