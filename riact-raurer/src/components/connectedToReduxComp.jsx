import {connect} from "react-redux"

export const ConnectedToReduxComp=(props)=>{

    return(
        <>
        ConnectedToReduxComp works!
        </>
    )
}

const mapStateToProps=(state,ownProps)=>{

    return{
        
    }
}

const mapDispatchToProps={

}

export default connect(mapStateToProps, mapDispatchToProps) (ConnectedToReduxComp)