import React from "react"
import Terminal from "../../Terminal"


const GrandPrix = () => {
    const lineGrandPrix = [
        'Projeto 2: Grand Prix de Inovação Senai',
    ]

    const text = [
        'O segundo projeto que participei em 2019 foi um Grand Prix de Inovação, feito pelo Senai, em parceria com '
    ]

    return (
        <>
            <div className="grand-intro">
                <Terminal lines={lineGrandPrix} />
            </div>

            <div className="grand-title">
                <Terminal lines={"Grand Prix de Inovação Senai"} letterSpeed={60} />
            </div>

            <div className="grand-text">
                <Terminal />
                <Terminal />
                <Terminal />
            </div>

        </>
    )
}

export default GrandPrix