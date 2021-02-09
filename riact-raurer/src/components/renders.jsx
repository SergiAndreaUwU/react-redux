
import {useState, useEffect,useRef ,useReducer, useMemo} from "react"
import UsaEstado from "./usaEstado"



const Renders=()=>{

    const [usaEstado,setUsaEstado]=useState("")
    
  const handleCallback=(e)=>{
    alert(e)
    setUsaEstado(e)
  }

  const handleClick=()=>{
      setUsaEstado(+usaEstado + 1)
  }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(e)
    }

    
    return(
        <>
            <form onSubmit={handleSubmit}>
            <label>input1</label><input />
                <button>boton XD</button>
                <p>{ (new Date).toLocaleTimeString()}</p>
            </form>
            <UsaEstado  callback={handleCallback}/>
            <p>xd{usaEstado}</p>
            <button onClick={handleClick}>{usaEstado}</button>
        </>
    )
}


export default Renders