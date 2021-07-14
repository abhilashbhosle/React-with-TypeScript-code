import React, {Component} from "react"

interface IState{

}
interface IProps{
     strdata:string
     numdata:number
     booldata:boolean
    }
class Second extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.props.strdata}</h1>
                <h1>{this.props.numdata}</h1>
                <h1>{JSON.stringify(this.props.booldata)}</h1>
            </React.Fragment>
        )
    }
}
export default Second 