import {Component} from "react"

interface Istate{

}
interface IProps{
}

class Second extends Component<IProps,Istate>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return(
                <table cellSpacing="0" cellPadding="10px">{this.props.children}</table>
        )
    }
}
export default Second