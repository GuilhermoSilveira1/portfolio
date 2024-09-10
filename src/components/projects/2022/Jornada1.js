import React from "react";
import Terminal from "../../Terminal";

const Jornada1 = () => {
    const title = [
        "Mesa Rotativa"
    ]

    const text1 = [
        "No meu primeiro ano na faculdade, em 2022, cursando Engenharia Mecatrônica, o primeiro desafio que resolvi com minha equipe foi uma mesa rotativa para solda. A empresa que tinha essa dor nos contou que o operador tinha que soldar a peça em questão com uma mão, enquanto girava a sua bancada de trabalho com a outra, o que poderia gerar inúmeros problemas de qualidade."
    ]

    const text2 = [
        "Assim, nossa ideia final foi uma mesa rotativa que girava por meio de um pedal, além de oferecer ao operador algumas opções, como velocidade da rotação, regulagem da altura da mesa, parada de emergência, entre outras."
    ]

    return (
        <>
            <div className="title-jornada1">
                <Terminal lines={title} letterSpeed={10} />
            </div>

            <div className="text-jornada">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
            </div>
        </>
    )
}

export default Jornada1;