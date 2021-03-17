
import {useEffect} from "react"

const ArrowFunctionVSFunction = () => {
    
    useEffect(()=>{
        const testingObjects={

            func1: function(){
                console.log(this)
            },
            func2: ()=>{
                console.log(this)
            }
        }
        testingObjects.func1()
        testingObjects.func2()
    },[])
    

  return <> check the console</>;
};

export default ArrowFunctionVSFunction;
