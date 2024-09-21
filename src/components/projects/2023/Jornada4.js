import React from "react";
import Terminal from "../../Terminal";
import img1 from "./../../../img/JA_4.png"
import img2 from "./../../../img/JA_4-2.png"


const Jornada4 = () => {

    const title = ["Automatização de Prensa"];

    const text1 = [
        'Na segunda jornada de 2023, fomos desafiados a automatizar e adequar uma prensa hidráulica, em parceria com a OneSubsea (antiga Aker). Visitamos a planta da empresa para compreender o problema que eles enfrentavam. Diferente de montadoras convencionais, a dinâmica da OneSubsea envolve produtos personalizados para cada cliente, com operações que, em muitos casos, ocorrem apenas uma vez por dia.'
    ];

    const text2 = [
        'O problema apresentado era que a prensa utilizada em um dos processos não estava em conformidade com as Normas Regulamentadoras (NRs). Além disso, havia a necessidade de implementar funcionalidades como a subida e descida automatizadas da prensa.'
    ];

    const text3 = [
        "Nossa solução não apenas incorporou os componentes exigidos pelas NRs, mas também foi além dos requisitos iniciais, adicionando diferenciais importantes, como um sistema de visão para controle remoto da prensa. Isso trouxe mais segurança e eficiência ao processo."
    ];

    const text4 = [
        'O grande aprendizado nessa jornada foi a presença de bancas avaliadoras ao longo do desenvolvimento. Essas bancas, orientadas pelo professor, ajudaram nossa equipe a criar uma solução que poderia, de fato, ser implementada na indústria, tornando o projeto ainda mais relevante e aplicável.'
    ];

    return (
        <>
            <div className="ja4-title">
                <Terminal lines={title} />
            </div>

            <div className="ja4-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
                <Terminal lines={text4} />
            </div>

            <div>
                <img alt="Imagem do projeto 3D" src={img1} />
                <img alt="Imagem do projeto 3D" src={img2} />
            </div>
        </>
    );
};

export default Jornada4;