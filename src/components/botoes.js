import './botoes.css'
export default function Botoes({botao,Class,funcao}){
    return <button onClick={funcao} className={Class} > {botao} </button>
}