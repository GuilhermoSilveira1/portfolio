import React from "react";
import Terminal from "../../Terminal";


const Jornada4 = () => {

    const title = ["Automação de Prensa"];



    const text1 = [

        "A segunda jornada de 2023 foi realizar a automação e adequação de uma prensa.",

    ];



    const text2 = [

        "Dessa vez em parceria com a antiga Aker, atualmente OneSubsea, fomos na planta para entendermos uma dor que eles tinham.",

    ];



    const text3 = [

        "A dinâmica da empresa é bastante diferente de montadoras convencionais, em que certas montagens são realizadas dezenas de vezes. Lá, os seus produtos são feitos de forma personalizada para cada cliente, de acordo com como serão exploradas as reservas de petróleo abaixo do mar.",

    ];



    const text4 = [

        "Então o maior desafio não era adequar para a operação, mas realizar a automação do processo, para que o que o operador pudesse ter maior controle do processo, ao mesmo tempo que poderia gerar dados para a empresa, e o principal, adequar às Normas Regulamentadoras (NRs).",

    ];



    const text5 = [

        "Como era um problema claro, a solução desenvolvida pela minha equipe foi bastante robusta, e conseguimos aplicar uma grande quantidade de tecnologias para conter qualquer eventual problema.",

    ];



    const text6 = [

        "E o maior aprendizado nessa jornada, foi a presença de bancas avaliadoras ao longo da produção da solução, o que resultou em soluções muito acima do esperado pela equipe, um resultado que realmente poderia ser implementado na indústria.",

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

                <Terminal lines={text5} />

                <Terminal lines={text6} />

            </div>

        </>

    );

};

export default Jornada4;