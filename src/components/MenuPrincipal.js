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

    const text = [
        "Olá, aqui está uma coleção dos projetos que já participei ou desenvolvi.",
        "Digite o ano, e veja quais projetos foram feitos naquele ano!",
        "Os anos que participei/desenvolvi projetos foram: 2019, 2022, 2023 e 2024.",
        "(Não se preocupe, basta digitar qualquer um dos anos na mesma input que os projetos serão carregados!)"
    ]

    return (
        <>
            <div className="menu-title">
                <Terminal lines={["PORTIFÓLIO"]} />
                <Terminal lines={["do GUILHERMO SILVEIRA"]} />
            </div>

            <div className="menu-text">
                <Terminal
                    lines={text}
                />
            </div>

            {/* Renderiza o componente do ano correspondente se o ano for "2019" */}
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
