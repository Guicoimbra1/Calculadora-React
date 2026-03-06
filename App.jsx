import { useState } from "react";
import Botao from "./components/botao";
import Input from "./components/input";

function App() {
  const [conteudo, setConteudo] = useState('0');

  const adicionar = (num) => {
    if (conteudo === '0') {
      setConteudo(num);
    } else {
      setConteudo(conteudo + num);
    }
  };

  const apagar = () => {
    setConteudo('0');
  };

  const calcular = () => {
    try {
      const expressao = conteudo.replace(/x/g, '*');
      const resultado = eval(expressao);
      setConteudo(resultado.toString());
    } catch (error) {
      setConteudo('Erro');
    }
  };

  return (
    <>
      <div className="container">
        <div className="content">
          <Input>{conteudo}</Input>
          <div className="fileira">
            <Botao onClick={() => adicionar('+')}>+</Botao>
            <Botao onClick={apagar}>C</Botao>
          </div>
          <div className="fileira">
            <Botao onClick={() => adicionar('7')}>7</Botao>
            <Botao onClick={() => adicionar('8')}>8</Botao>
            <Botao onClick={() => adicionar('9')}>9</Botao>
            <Botao onClick={() => adicionar('/')}>/</Botao>
          </div>
          <div className="fileira">
            <Botao onClick={() => adicionar('4')}>4</Botao>
            <Botao onClick={() => adicionar('5')}>5</Botao>
            <Botao onClick={() => adicionar('6')}>6</Botao>
            <Botao onClick={() => adicionar('x')}>x</Botao>
          </div>
          <div className="fileira">
            <Botao onClick={() => adicionar('1')}>1</Botao>
            <Botao onClick={() => adicionar('2')}>2</Botao>
            <Botao onClick={() => adicionar('3')}>3</Botao>
            <Botao onClick={() => adicionar('-')}>-</Botao>
          </div>
          <div className="fileira">
            <Botao onClick={() => adicionar('0')}>0</Botao>
            <Botao onClick={() => adicionar('.')}>.</Botao>
            <Botao onClick={calcular}>=</Botao>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default App;
