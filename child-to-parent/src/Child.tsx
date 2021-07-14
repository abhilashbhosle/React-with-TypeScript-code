import {Component} from "react"
interface IState{

}
interface IProps{
    key1:(arg1:any)=>void
}

class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
    
    }
    render(){
        return(
            <button onClick={()=>{
                this.props.key1(
                    {
                        "sub1":"ReactJS",
                        "sub2":"NodeJS",
                        "sub3":"MOngoDB"
                    }
                )
            }}>Click me</button>
        )
    }
}
export default Child;