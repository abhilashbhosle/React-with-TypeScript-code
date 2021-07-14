import {Component} from "react"

interface IState{

}

interface IProps{

}

class Body extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return <h1>THIS IS A BODY</h1>
    }
}
export default Body
