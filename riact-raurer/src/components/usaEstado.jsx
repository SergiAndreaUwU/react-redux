import {useState, useEffect,useRef ,useReducer, useMemo} from "react"

const UsaEstado=(props)=>{

    const [objeto,setObjeto]=useState(0)

    const handleClick=()=>{

        setObjeto(objeto+1)
        props.callback(objeto)
    }

    return(
        <button onClick={handleClick}>
        CLICK ME!
        </button>
    )
}

export default UsaEstado