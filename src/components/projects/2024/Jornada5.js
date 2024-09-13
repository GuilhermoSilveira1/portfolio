import React from "react";
import Terminal from "../../Terminal";

const Jornada5 = () => {
    const title = [
        "Concepção de um Site de Recrutamento e Seleção"
    ]

    const text1 = [
        'Em 2024, tomei uma decisão importante: troquei o curso de Engenharia Mecatrônica por Engenharia de Software. O que mais me encantava na mecatrônica era a parte de software, e após muita reflexão e conversas com meus pais e minha namorada, resolvi seguir esse novo caminho.'
    ]

    const text2 = [
        'Minha primeira jornada nessa nova fase foi um projeto apresentado pela empresa Code Sails, que enfrentava dificuldades com recrutamento ágil de mão de obra qualificada. Além da lentidão dos processos convencionais, outros desafios também precisavam ser solucionados.'
    ]

    const text3 = [
        'Para desenvolver a solução, utilizamos o Canva para criar as telas do site, aplicando conceitos de usabilidade e experiência do usuário (UI e UX). Também nos aprofundamos no processo de seleção de talentos, especialmente na área de tecnologia, explorando tendências e boas práticas na criação de aplicações voltadas para o usuário final.'
    ]

    const text4 = [
        'Notei uma grande diferença em relação à mecatrônica: enquanto anteriormente desenhávamos soluções físicas e elétricas, em software o foco é muito mais nas soft skills, como criar uma experiência agradável para o usuário. A documentação também desempenhou um papel essencial no projeto.'
    ]

    const text5 = [
        'Ao final, apresentamos nossa solução a um representante da Code Sails, e foi incrível receber um feedback direto de alguém da indústria. Essa troca proporcionou uma visão prática e relevante para o nosso aprendizado.'
    ]

    return (
        <>
            <div className="ja5-title">
                <Terminal lines={title} />
            </div>

            <div className="ja5-text">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
                <Terminal lines={text4} />
                <Terminal lines={text5} />
            </div>
        </>
    )
}

export default Jornada5;