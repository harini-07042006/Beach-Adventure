import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BasicCard from './component/BasicCard'

function App() {
  const [count, setCount] = useState(0)
  let arr=[
    {
      title:"FIRST CARD",
      description:"this the first card description"
    },
    {
      title:"SECOND CARD",
       description:"this the second card description"
    },
    {
      title:"THIRD CARD",
       description:"this the third card description"
    },
    {
      title:"FOUR CARD",
       description:"this the four card description"
    }
  ]
  return (
    <>
    <div style={{
      display:"flex",
      border:"2px solid black",
      height:"100vh",
      justifyContent:"center",
      alignItems:"center",
      gap:20,
      flexWrap:"wrap",
      flexDirection:"column"
    }}>
    <BasicCard title={"Card one"} description={"description of card one"} buttonText={"DO SOMETHING"}/>
    <BasicCard title={"Card two"} description={"description of card two"} buttonText={"DO ANYTHING"}/>
    <BasicCard title={"Card three"} description={"description of card three"} buttonText={"DO NOTHING"}/>
    </div>
    </>
  )
}

export default App