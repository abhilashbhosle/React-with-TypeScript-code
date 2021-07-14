import {Component} from "react"

interface IState{}

interface IProps{}

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return <h1> WELCOME TO FIRST COMPONENT </h1>
    }
}
export default First
