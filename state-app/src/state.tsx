import React, {Component} from "react";


interface IState{
    key1:string;
    key2:number;
    key3:boolean;
    key4:string[];
    key5:any;
    key6:any[]
}

interface IProps{

}

class State extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            key1:"data from database soon....!",
            key2:100,
            key3:true,
            key4:["hello1","hello2","hello3","hello4"],
            key5:{"welcome":"hello1","welcome2":"hello2"},
            key6:[
                {"pid":111,"psub":"sub1","pcost":10000},
                {"pid":222,"psub":"sub2","pcost":20000},
                {"pid":333,"psub":"sub3","pcost":30000},
                {"pid":444,"psub":"sub4","pcost":40000},
                 ]
            
        }
    }
    render(){
        return(
            <React.Fragment>
                <h1>{this.state.key1}</h1>
                <h1>{this.state.key2}</h1>
                <h1>{JSON.stringify(this.state.key3)}</h1>
                {
                    this.state.key4.map((element,index)=>(
                        <span key={index}>
                            <h1>{element}</h1>
                        </span>
                    ))
                }
                <h1>{JSON.stringify(this.state.key5)}</h1><br /><br /><br />
                <table cellSpacing="0" cellPadding="10px">
                    <tr>
                        <th>SNO</th>
                        <th>PID</th>
                        <th>PSUB</th>
                        <th>PCOST</th>
                    </tr>
                    {
                        this.state.key6.map((element,index)=>(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.pid}</td>
                                <td>{element.psub}</td>
                                <td>{element.pcost}</td>
                            </tr>
                        ))
                    }
                </table>
            </React.Fragment>
        )
    }
}
export default State;