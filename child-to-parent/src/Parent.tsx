import React, {Component} from "react"
import Child from "./Child"


interface IState{

    mydata:any;
}

interface IProps{}


class Parent extends Component<IProps,IState>{
   constructor(props:IProps){
       super(props)
       this.state={
           mydata:{}
       }

   }
  myfun=(arg1:any)=>{
      this.setState({
          mydata:arg1
      })
  }
myfun1=()=>{
    console.log("Doubleclick response")
}

   render(){
       return(
           <React.Fragment>
               <Child key1={this.myfun}></Child>
               <h1>{JSON.stringify(this.state.mydata)}</h1>

               <button onDoubleClick={this.myfun1}>Double click Here</button>

               <h1>{this.myfun1}</h1>

           </React.Fragment>
       )
   }
}
export default Parent;