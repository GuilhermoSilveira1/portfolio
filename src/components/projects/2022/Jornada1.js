import React from "react";
import Terminal from "../../Terminal";
import im1 from "./../../../img/Apresentação do Projeto.jpg"
import im2 from "./../../../img/JA_1.png"
import im3 from "./../../../img/JA_1-2.png"

const Jornada1 = () => {
    const title = [
        "Mesa Rotativa"
    ]

    const text1 = [
        'No início do curso de Engenharia Mecatrônica, em 2022, fui desafiado com um projeto que se tornou um marco na minha jornada acadêmica. O problema apresentado envolvia um operador que, ao soldar uma peça, precisava simultaneamente girar a bancada de trabalho. Essa situação não apenas comprometia a qualidade do trabalho, mas também apresentava riscos significativos à segurança e a possibilidade de Lesão por Esforço Repetitivo (LER), entre outros problemas.'
    ]

    const text2 = [
        'Para resolver essa questão, desenvolvemos uma mesa rotativa inovadora. O projeto consistia em uma mesa acionada por um pedal, que permitia ao operador controlar a rotação da bancada de forma eficiente. Além da funcionalidade básica, a mesa oferecia várias opções, como ajuste da velocidade de rotação, regulagem da altura e um sistema de parada de emergência. O design focava na ergonomia e conforto, proporcionando uma maneira mais segura e eficiente de realizar o trabalho.'
    ]

    const text3 = [
        'Esse projeto foi fundamental para entender a importância da integração de soluções práticas e seguras na indústria, e me proporcionou uma experiência valiosa em resolver problemas reais com inovação e eficácia.'
    ]

    return (
        <>
            <div className="title-jornada1">
                <Terminal lines={title} letterSpeed={10} />
            </div>

            <div className="text-jornada">
                <Terminal lines={text1} />
                <Terminal lines={text2} />
                <Terminal lines={text3} />
            </div>

            <div>
                <img alt="Apresentação do projeto" src={im1} />
                <img alt="Projeto no 3D" src={im2} />
                <img alt="Projeto no 3D" src={im3} />
            </div>
        </>
    )
}

export default Jornada1;