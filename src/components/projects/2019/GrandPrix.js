import React from "react"
import Terminal from "../../Terminal"


const GrandPrix = () => {
    const lineGrandPrix = [
        'Projeto 2: Grand Prix de Inovação Senai',
    ]

    const text1 = [
        'Também em 2019, participei do Grand Prix de Inovação, promovido pelo Senai em parceria com a Bosch.',
    ]

    const text2 = [
        'Foi o meu primeiro contato com os desafios que uma empresa multinacional enfrenta, assim como sua preocupação com o cliente e a experiência que o cliente tem com a marca.',
    ]

    const text3 = [
        'Nesse Grand Prix, eu e minha equipe ganhamos o terceiro lugar com nossa solução.',
    ]

    const text4 = [
        'Foi uma ótima experiência, que ampliou muito meus horizontes, especialmente com a visita à unidade da Bosch em Curitiba.'
    ]

    return (
        <>
            <div className="grand-intro">
                <Terminal lines={lineGrandPrix} />
            </div>

            <div className="grand-text">
                <Terminal lines={text1} letterSpeed={50} />
                <Terminal lines={text2} letterSpeed={50} />
                <Terminal lines={text3} letterSpeed={50} />
                <Terminal lines={text4} letterSpeed={50} />
            </div>

        </>
    )
}

export default GrandPrix