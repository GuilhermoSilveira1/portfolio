import React, { useState, useRef, useEffect } from "react";
import Terminal from "./Terminal";
import Ano2019 from "./projects/2019/2019"; // Importação do componente específico de 2019
import Ano2022 from "./projects/2022/2022"; // Importação do componente específico de 2019
import Ano2023 from "./projects/2023/2023"; // Importação do componente específico de 2019
import Ano2024 from "./projects/2024/2024"; // Importação do componente específico de 2019
import "./Terminal.css";
import "./MenuPrincipal.css"
import fotoGui from "./../img/Foto Guilhermo.jpg"

const MenuPrincipal = () => {
    const [inputAno, setInputAno] = useState(""); // Valor digitado no input
    const [anoSelecionado, setAnoSelecionado] = useState(""); // Ano para renderizar o componente correspondente
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus(); // Coloca o foco no input automaticamente
        }
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        setAnoSelecionado(inputAno); // Define o ano selecionado ao submeter o formulário
    };

    const asciiPortfolio = [
        '________  ________  ________  _________  ________ ________  ___       ___  ________     ',
        '|\\   __  \\|\\   __  \\|\\   __  \\|\\___   ___\\\\  _____\\\\   __  \\|\\  \\     |\\  \\|\\   __  \\    ',
        '\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\__/\\ \\  \\|\\  \\ \\  \\    \\ \\  \\ \\  \\|\\  \\   ',
        ' \\ \\   ____\\ \\  \\\\\\  \\ \\   _  _\\   \\ \\  \\ \\ \\   __\\\\ \\  \\\\\\  \\ \\  \\    \\ \\  \\ \\  \\\\\\  \\  ',
        '  \\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\\\  \\|   \\ \\  \\ \\ \\  \\_| \\ \\  \\\\\\  \\ \\  \\____\\ \\  \\ \\  \\\\\\  \\ ',
        '   \\ \\__\\    \\ \\_______\\ \\__\\\\ _\\    \\ \\__\\ \\ \\__\\   \\ \\_______\\ \\_______\\ \\__\\ \\_______\\ ',
        '    \\|__|     \\|_______|\\|__|\\|__|    \\|__|  \\|__|    \\|_______|\\|_______|\\|__|\\|_______| '
    ]

    const sub_title = [
        "Por Guilhermo Silveira"
    ]

    const text = [
        'Olá, eu sou Guilhermo Silveira, e aqui você encontrará uma coleção dos projetos nos quais participei ou desenvolvi ao longo dos anos. Explore meu trabalho e acompanhe minha evolução!',
        "Para começar, basta digitar um ano no campo abaixo e visualizar os projetos realizados naquele período.",
        "Os anos com projetos disponíveis são: 2019, 2022, 2023 e 2024.",
        "Não se preocupe, é só digitar o ano desejado e apertar \"Enter\" e os projetos serão exibidos automaticamente!"
    ]


    return (
        <>
            <div className="main-title">
                <Terminal lines={asciiPortfolio} timeToRender={0} />
            </div>

            <div className="sub-menu">
                <Terminal lines={sub_title} />
                <img src={fotoGui} alt="Foto de Guilhermo" />
            </div>

            <div className="menu-text">
                <Terminal lines={text} />
            </div>

            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input
                        ref={inputRef}
                        value={inputAno}
                        onChange={(e) => setInputAno(e.target.value)}
                        className="input-hidden"
                        placeholder="Digite o ano..." // Placeholder para orientar o usuário
                    />
                </form>
            </div>

            {/* Renderiza o componente do ano correspondente */}
            {anoSelecionado === "2019" && <Ano2019 />}
            {anoSelecionado === "2022" && <Ano2022 />}
            {anoSelecionado === "2023" && <Ano2023 />}
            {anoSelecionado === "2024" && <Ano2024 />}
        </>
    );
};

export default MenuPrincipal;