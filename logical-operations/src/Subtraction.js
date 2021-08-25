import React from "react";
class Subtraction extends React.Component{
    constructor(){
        super()
        this.state={
            num1:"",
            num2:"",
            total:""
        }
    }
        handlenum1=(event)=>{
            this.setState({
                num1:event.target.value
            })
        }
            handlenum2=(event)=>{
                this.setState({
                    num2:event.target.value
                })
        }
        addition=()=>{
            this.setState({
                total:parseInt(this.state.num1) - parseInt(this.state.num2)
            })
        
    }
    render(){
        return(
            <div className="container">
            <h1>Subtraction</h1>
            <form>
                <input type="text" value={this.state.num1} onChange={this.handlenum1}></input>{" "}
                <input type="text" value={this.state.num2} onChange={this.handlenum2}></input><br></br><br></br>
                <button onClick={this.addition}>Subtract</button><br></br>
                </form>
                <h4>{this.state.total}</h4>
            </div>        
        )
    }
}
export default Subtraction;
