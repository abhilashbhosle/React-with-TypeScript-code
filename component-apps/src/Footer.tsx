import {Component} from "react"

interface IState{

}

interface IProps{

}

class Footer extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return <h1>THIS IS A FOOTER</h1>
    }
}
export default Footer
