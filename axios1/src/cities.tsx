import React, {Component} from "react"
import axios from "axios"

interface IState{
    response:any[any]
}

interface IProps{

}

class Cities extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props)
        this.state={
            response:[]
        }
    }
    componentDidMount(){
        axios.get('https://www.w3schools.com/angular/customers.php').then((posres)=>{
            const {data}=posres;
            this.setState({
                response:data.records
            })
        },(erres)=>{
            console.log(erres)
        })
    }
    render(){
        return(
            <React.Fragment>
                <table cellSpacing="0">
                    <tr>
                        <th>SNO</th>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>COUNTRY</th>
                    </tr>
                    {this.state.response.map((element:any,index:number)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
                        </tr>
                    ))}
                </table>
            </React.Fragment>
        )
    }
}
export default Cities;