import { useState } from "react";
import Botoes from "./botoes";
import "./calculadora.css";
import Visor from "./Visor";

export default function Calculadora() {
  const [visor, setVisor] = useState('0');
  const [n1 , setN1] = useState('')
  // const [n2 , setN2] = useState('')
  const [operador , setOperador] = useState('')
// 

// 

  const numero_add = (value) => {
    if(visor === '0' || visor ==='.'){
      setVisor(value);
    }else if(visor !== '0' || visor !== '.'|| visor !== '' ){
      setVisor(visor + value);
    }
  };
  const del_num = () => {
    if(visor === '0' || visor === '.' || visor.length === 1){
      setVisor('0');
    }else
      setVisor(visor.slice(0, -1));
  };
  const porcentagem = () => {
    setVisor((parseFloat(visor) / 100).toString());
  };
  const um_sobre = () => {
    setVisor((1 / parseFloat(visor)).toString());
  };
  const quadrado = () => {
    setVisor((parseFloat(visor) ** 2).toString());
  };
  const raiz = () => {
     setVisor((Math.sqrt(parseFloat(visor))).toString());
  }
  const add_pos_neg = () => {
    if (visor.startsWith('-')){
      setVisor(visor.slice(1));
    }else if (visor !== '0'){
      setVisor('-' + visor);
      
    }
  } 
  const limpar_C = () => {
        setN1('')
        setOperador('')
        setVisor('0')
  }
  const limpar_CE = () => {
        setVisor('0')
  }
  const operar = (value) => {
    if(visor !== "0" && visor !== "." && n1 === ''){
        setN1((parseFloat(visor)))
        setOperador(value)
        setVisor('0')
    } 
  } 
  const calcular = () => {
     let n2 = parseFloat(visor) 

        console.log(n1)
        console.log(n2)

        let resultado = 0;
        
        switch (operador){
          case'+':
            resultado = n1 + n2;
            break;
            
          case'-':
            resultado = n1 - n2;
            break;
            
          case'X':
            resultado = n1 * n2;
            break;
            
          case'/':
            resultado = n1 / n2;
            break;
          default:
            break;
             }
        setN1('')
        n2 = ''
        setOperador('')
        setVisor(resultado.toString())
        
        }

  return (
    <div className="calculadora">
      <div>
        <Visor display={visor} />
      </div>
      <div className="btns">
        <Botoes botao="%" Class="Botao" funcao={() => porcentagem()} />
        <Botoes botao="CE" Class="Botao" funcao={() => limpar_CE()}/>
        <Botoes botao="C" Class="Botao" funcao={() => limpar_C()}/>
        <Botoes botao="DEL" Class="Botao" funcao={() => del_num()} />
        <Botoes botao="1/x" Class="Botao" funcao={() => um_sobre()} />
        <Botoes botao="x^2" Class="Botao" funcao={() => quadrado()} />
        <Botoes botao="√" Class="Botao" funcao={() => raiz()}/>
        <Botoes botao="/" Class="Botao" funcao={() => operar('/')}/>
        <Botoes botao="7" Class="Botao_n" funcao={() => numero_add("7")} />
        <Botoes botao="8" Class="Botao_n" funcao={() => numero_add("8")} />
        <Botoes botao="9" Class="Botao_n" funcao={() => numero_add("9")} />
        <Botoes botao="X" Class="Botao" funcao={() => operar('X')}/>
        <Botoes botao="4" Class="Botao_n" funcao={() => numero_add("4")} />
        <Botoes botao="5" Class="Botao_n" funcao={() => numero_add("5")} />
        <Botoes botao="6" Class="Botao_n" funcao={() => numero_add("6")} />
        <Botoes botao="-" Class="Botao" funcao={() => operar('-')}/>
        <Botoes botao="1" Class="Botao_n" funcao={() => numero_add("1")} />
        <Botoes botao="2" Class="Botao_n" funcao={() => numero_add("2")} />
        <Botoes botao="3" Class="Botao_n" funcao={() => numero_add("3")} />
        <Botoes botao="+" Class="Botao" funcao={() => operar('+')}/>
        <Botoes botao="+/-" Class="Botao_n" funcao={() => add_pos_neg()}/>
        <Botoes botao="0" Class="Botao_n" funcao={() => numero_add("0")} />
        <Botoes botao="." Class="Botao_n" funcao={() => numero_add(".")} />
        <Botoes botao="=" Class="Botao_I" funcao={() => calcular()}/>
      </div>
    </div>
  );
}
