import React, {Component} from "react"
import Second from "./second" 

interface IState{
    key1: any[]
}
interface IProps{

}
class First extends Component<IProps,IState>{
constructor(props:IProps){
    super(props);

    this.state={
        key1:[
            {"pid":111, "pname":"ReactJS", "pcost":10000},
            {"pid":222, "pname":"NodeJS", "pcost":20000},
            {"pid":333, "pname":"ExpressJS", "pcost":30000},
            {"pid":444, "pname":"MongoDB", "pcost":40000}
        ]
    }
}
render(){
    return(
        <React.Fragment>
            <Second>
                <tr>
                    <th>SNO</th>
                    <th>PID</th>
                    <th>PNAME</th>
                    <th>PCOST</th>
                </tr>
            {this.state.key1.map((element,index)=>(
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{element.pid}</td>
                    <td>{element.pname}</td>
                    <td>{element.pcost}</td>
                </tr>
            ))}        
            </Second>
        </React.Fragment>
    )
}

}
export default First