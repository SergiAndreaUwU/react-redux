import {useState, useEffect,useRef ,useReducer, useMemo} from "react"

const UsaEstado=(props)=>{

    const [objeto,setObjeto]=useState({
        
        prop1:"XD",
        prop2:true,
        prop3:10
        
    })

    const handleClick=()=>{

        setObjeto({...objeto, prop1:"LOL"})
        props.callback(objeto)
    }

    return(
        <button onClick={handleClick}>
        CLICK ME!
        </button>
    )
}

export default UsaEstado