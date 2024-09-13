import React from "react";

import Terminal from "../../Terminal";

const Jornada2 = () => {

    const title = ["Automatização de Máquina de Suco"];

    const text1 = [
        'No segundo semestre de 2022, tivemos a oportunidade de trabalhar em um projeto desafiador em parceria com a Bosch, que envolvia a automatização de suas máquinas de suco. O objetivo inicial era realizar um piloto em uma das máquinas da empresa para avaliar a viabilidade de implementar a solução em outras unidades.'
    ];

    const text2 = [
        'No entanto, devido ao suporte limitado da Bosch ao longo do semestre, nossa professora orientadora decidiu redirecionar o foco do projeto para a documentação detalhada dos processos envolvidos. Embora a implementação prática da ideia original não tenha sido possível, essa mudança de direção foi extremamente valiosa.'
    ];

    const text3 = [
        'O projeto nos proporcionou um profundo aprendizado sobre documentação de processos, uma habilidade essencial para qualquer engenheiro. Além disso, tivemos a oportunidade de continuar refinando as habilidades que começamos a desenvolver na jornada anterior. Esse desafio mostrou a importância da flexibilidade e adaptabilidade no desenvolvimento de projetos, e como uma abordagem detalhada na documentação pode ser crucial para o sucesso de futuras implementações.'
    ]

    return (
        <>
            <div className="ja2-title">
                <Terminal lines={title} />
            </div>

            <div className="ja2-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
            </div>
        </>
    );
};

export default Jornada2;