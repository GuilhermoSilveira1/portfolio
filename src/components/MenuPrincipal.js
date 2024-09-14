import React, { useState, useRef, useEffect } from "react";
import Terminal from "./Terminal";
import Ano2019 from "./projects/2019/2019"; // Importação do componente específico de 2019
import Ano2022 from "./projects/2022/2022"; // Importação do componente específico de 2019
import Ano2023 from "./projects/2023/2023"; // Importação do componente específico de 2019
import Ano2024 from "./projects/2024/2024"; // Importação do componente específico de 2019
import "./Terminal.css";

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
        ' ________  ________  ________  _________  ___  ________ ________  ___       ___  ________     _',
        '|\\   __  \\|\\   __  \\|\\   __  \\|\\___   ___\\\\  \\|\\  _____\\\\   __  \\|\\  \\     |\\  \\|\\   __  \\    _',
        '\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\ \\  \\__/\\ \\  \\|\\  \\ \\  \\    \\ \\  \\ \\  \\|\\  \\   _',
        ' \\ \\   ____\\ \\  \\\\\\  \\ \\   _  _\\   \\ \\  \\ \\ \\  \\ \\   __\\\\ \\  \\\\\\  \\ \\  \\    \\ \\  \\ \\  \\\\\\  \\  _',
        '  \\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\\\  \\|   \\ \\  \\ \\ \\  \\ \\  \\_| \\ \\  \\\\\\  \\ \\  \\____\\ \\  \\ \\  \\\\\\  \\ _',
        '   \\ \\__\\    \\ \\_______\\ \\__\\\\ _\\    \\ \\__\\ \\ \\__\\ \\__\\   \\ \\_______\\ \\_______\\ \\__\\ \\_______\\ _',
        '    \\|__|     \\|_______|\\|__|\\|__|    \\|__|  \\|__|\\|__|    \\|_______|\\|_______|\\|__|\\|_______| _'
    ];


    const asciiLinesGuilhermo = [
        '________  ___  ___  ___  ___       ___  ___  _______   ________  _____ ______   ________     ',
        '|\\   ____\\|\\  \\|\\  \\|\\  \\|\\  \\     |\\  \\|\\  \\|\\  ___ \\ |\\   __  \\|\\   _ \\  _   \\|\\   __  \\    ',
        ' \\ \\  \\___|\\ \\  \\\\\\  \\ \\  \\ \\  \\    \\ \\  \\\\\\  \\ \\   __/|\\ \\  \\|\\  \\ \\  \\\\\\__\\ \\  \\ \\  \\|\\  \\   ',
        '  \\ \\  \\  __\\ \\  \\\\\\  \\ \\  \\ \\  \\    \\ \\   __  \\ \\  \\_|/_\\ \\   _  _\\ \\  \\\\|__| \\  \\ \\  \\\\\\  \\  ',
        '   \\ \\  \\|\\  \\ \\  \\\\\\  \\ \\  \\ \\  \\____\\ \\  \\ \\  \\ \\  \\_|\\ \\ \\  \\\\  \\\\ \\  \\    \\ \\  \\ \\  \\\\\\  \\ ',
        '    \\ \\_______\\ \\_______\\ \\__\\ \\_______\\ \\__\\ \\__\\ \\_______\\ \\__\\\\ _\\\\ \\__\\    \\ \\__\\ \\_______\\ ',
        '     \\|_______|\\|_______|\\|__|\\|_______|\\|__|\\|__|\\|_______|\\|__|\\|__|\\|__|     \\|__|\\|_______| '
    ];

    const asciiRobotica = [
        ' ________  ________  ________  ________  _________  ___  ________  ________  ',
        '|\\   __  \\|\\   __  \\|\\   __  \\|\\   __  \\|___   ___\\\\  \\|\\   ____\\|\\   __  \\|',
        '\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\ /\\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\ \\  \\___|\\ \\  \\|\\  \\ ',
        ' \\ \\   _  _\\ \\  \\\\\\  \\ \\   __  \\ \\  \\\\\\  \\   \\ \\  \\ \\ \\  \\ \\  \\    \\ \\   __  \\ ',
        '  \\ \\  \\\\  \\\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\\\\\  \\   \\ \\  \\ \\ \\  \\ \\  \\____\\ \\  \\ \\  \\ ',
        '   \\ \\__\\\\ _\\\\ \\_______\\ \\_______\\ \\_______\\   \\ \\__\\ \\ \\__\\ \\_______\\ \\__\\ \\__\\ ',
        '    \\|__|\\|__|\\|_______|\\|_______|\\|_______|    \\|__|  \\|__|\\|_______|\\|__|\\|__|\\'
    ];


    const asciiLinesHackathon = [
        ' ___  ___  ________  ________  ___  __    ________  _________  ________  ________      ',
        '|\\  \\|\\  \\|\\   __  \\|\\   ____\\|\\  \\|\\  \\ |\\   __  \\|___   ___\\\\   __  \\|\\   ___  \\    ',
        '\\ \\  \\\\\\  \\ \\  \\|\\  \\ \\  \\___|\\ \\  \\/  /|\\ \\  \\|\\  \\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\\\ \\  \\   ',
        ' \\ \\   __  \\ \\   __  \\ \\  \\    \\ \\   ___  \\ \\   __  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\  ',
        '  \\ \\  \\ \\  \\ \\  \\ \\  \\ \\  \\____\\ \\  \\\\ \\  \\ \\  \\ \\  \\   \\ \\  \\ \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ ',
        '   \\ \\__\\ \\__\\ \\__\\ \\__\\ \\_______\\ \\__\\\\ \\__\\ \\__\\ \\__\\   \\ \\__\\ \\ \\_______\\ \\__\\\\ \\__\\ ',
        '    \\|__|\\|__|\\|__|\\|__|\\|_______|\\|__| \\|__|\\|__|\\|__|    \\|__|  \\|_______|\\|__| \\|__| '
    ];

    const asciiLinesProjects = [
        ' ________  ________  ________        ___  _______  _________  ________  ________      ',
        '|\\   __  \\|\\   __  \\|\\   __  \\      |\\  \\|\\  ___ \\|___   ___\\\\   __  \\|\\   ____\\     ',
        '\\ \\  \\|\\  \\ \\  \\|\\  \\ \\  \\|\\  \\     \\ \\  \\ \\   __/\\|___ \\  \\_\\ \\  \\|\\  \\ \\  \\___|_    ',
        ' \\ \\   ____\\ \\   _  _\\ \\  \\\\\\  \\  __ \\ \\  \\ \\  \\_|/__  \\ \\  \\ \\ \\  \\\\\\  \\ \\_____  \\   ',
        '  \\ \\  \\___|\\ \\  \\\\  \\\\ \\  \\\\\\  \\|\\  \\\\_\\  \\ \\  \\_|\\ \\  \\ \\  \\ \\ \\  \\\\\\  \\|____|\\  \\  ',
        '   \\ \\__\\    \\ \\__\\\\ _\\\\ \\_______\\ \\________\\ \\_______\\  \\ \\__\\ \\ \\_______\\____\\_\\  \\ ',
        '    \\|__|     \\|__|\\|__|\\|_______|\\|________|\\|_______|   \\|__|  \\|_______|\\_________\\',
        '                                                                      \\|_________|   '
    ];

    const asciiLinesMore = [
        ' _______           _____ ______   ________  ___  ________      ',
        ' |\\  ___ \\         |\\   _ \\  _   \\|\\   __  \\|\\  \\|\\   ____\\     ',
        ' \\ \\   __/|        \\ \\  \\\\__\\ \\  \\ \\  \\|\\  \\ \\  \\ \\  \\___|_    ',
        '  \\ \\  \\_|/__       \\ \\  \\|__| \\  \\ \\   __  \\ \\  \\ \\_____  \\   ',
        '   \\ \\  \\_|\\ \\       \\ \\  \\    \\ \\  \\ \\  \\ \\  \\ \\  \\|____|\\  \\  ',
        '    \\ \\_______\\       \\ \\__\\    \\ \\__\\ \\__\\ \\__\\ \\__\\____\\_\\  \\ ',
        '     \\|_______|        \\|__|     \\|__|\\|__|\\|__|\\|__|\\_________\\ '
    ];


    const text = [
        'Olá, eu sou Guilhermo Silveira, e aqui você encontrará uma coleção dos projetos nos quais participei ou desenvolvi ao longo dos anos. Explore meu trabalho e acompanhe minha evolução!',
        "Para começar, basta digitar um ano no campo abaixo e visualizar os projetos realizados naquele período.",
        "Os anos com projetos disponíveis são: 2019, 2022, 2023 e 2024.",
        "Não se preocupe, é só digitar o ano desejado e apertar \"Enter\" e os projetos serão exibidos automaticamente!"
    ]


    return (
        <>
            <div className="menu-title">
                <Terminal lines={asciiPortfolio} timeToRender={0} />
                <Terminal lines={asciiLinesGuilhermo} timeToRender={0} />
                <Terminal lines={asciiRobotica} timeToRender={0} />
                <Terminal lines={asciiLinesHackathon} timeToRender={0} />
                <Terminal lines={asciiLinesProjects} timeToRender={0} />
                <Terminal lines={asciiLinesMore} timeToRender={0} />
            </div>

            <div className="menu-text">
                <Terminal lines={text} />
            </div>

            {/* Renderiza o componente do ano correspondente */}
            {anoSelecionado === "2019" && <Ano2019 />}
            {anoSelecionado === "2022" && <Ano2022 />}
            {anoSelecionado === "2023" && <Ano2023 />}
            {anoSelecionado === "2024" && <Ano2024 />}

            <div>
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

        </>
    );
};

export default MenuPrincipal;
