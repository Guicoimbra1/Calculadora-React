import './styles.css'

export default function Botao({children, onClick, expandido}) {
  const classe = expandido ? 'botao botao-expandido' : 'botao';
  return (
    <button className={classe} onClick={onClick}>{children}</button>
  )
}
