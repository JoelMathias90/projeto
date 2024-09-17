import { useState } from "react"

export default function App() {
  const [valor, setValor] = useState(0)
  function handleChange() {
    setValor(valor + 1)
    
  }
  console.log(window);
  return (
    <>
      <div>
        <h1>O contador está com: {valor}</h1>
        <button type="button" onClick={handleChange}>Atribuir</button>
      </div>
    </>
  )
}