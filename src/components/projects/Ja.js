import React from "react";
import Terminal from "../Terminal"

const Ja = () => {
    const title = [
        "Jornadas de Aprendizagem na UniSenaiPR: Preparando para o Mercado de Trabalho"
    ]

    const text1 = [
        'Na faculdade UniSenaiPR, o foco é preparar os profissionais da melhor forma possível para o mercado de trabalho, especialmente no setor industrial. Uma das matérias essenciais desse processo é a Jornada de Aprendizagem, onde todos os estudantes, independentemente da localidade, participam de um ciclo prático de desenvolvimento de projetos.'
    ]

    const text2 = [
        'Essa disciplina é única, pois conecta os alunos com problemas reais trazidos por empresas parceiras. O objetivo é que os estudantes vivenciem na prática o processo completo de criação de soluções, desenvolvendo habilidades fundamentais para o mercado, como gerenciamento de tempo, trabalho em equipe e apresentação de projetos. Além disso, os alunos passam por bancas avaliadoras que ajustam o rumo das soluções, pesquisam componentes, geram orçamentos e aprendem a lidar com todas as etapas envolvidas na entrega de um projeto.'
    ]

    const text3 = [
        'Essa abordagem imersiva garante que, ao final, os alunos estejam mais preparados para enfrentar os desafios da indústria com confiança e competência.'
    ]

    return (
        <>
            <div className="title-ja">
                <Terminal lines={title} letterSpeed={40} />
            </div>

            <div className="text-ja">
                <Terminal lines={text1} letterSpeed={30} />
                <Terminal lines={text2} letterSpeed={30} />
                <Terminal lines={text3} letterSpeed={30} />
            </div>
        </>
    )
}

export default Ja;