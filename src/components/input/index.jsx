import './styles.css'

export default function Input({children}) {
  return (
    <div className="inputContainer"><input value={children} readOnly></input></div>
  )
}
