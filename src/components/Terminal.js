import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Terminal.css'


const Terminal = ({ lines, letterSpeed }) => { //Aqui é colocado um parâmetro de entrada, uma variável chamada Lines, que irá ser o texto escrito
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        if (currentLine < lines.length) {
            const timer = setTimeout(() => {
                setCurrentLine(currentLine + 1);
            }, 0); // Ajuste o tempo entre as frases conforme necessário
            return () => clearTimeout(timer);
        }
    }, [currentLine, lines.length]);
    //Esse código acima é usado para que o programa itere sobre as linhas na varíavel lines

    return (
        <div className="terminal" >
            {lines.slice(0, currentLine + 1).map((line, index) => (
                <div key={index}>
                    <Typewriter
                        words={[line]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={letterSpeed || 70}
                        //Se não estou maluco, essa mudança me permite controlar a velocidade de escrita, ao mesmo tempo que pode ser padrão caso não seja necessária uma velocidade específica
                        deleteSpeed={50}
                    />
                </div>
            ))}
        </div>
    );
};


export default Terminal;