import react, { useEffect, useState } from "react";
import axios from "axios"
import React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";

function UseEffectex(){
    const [res,setRes]= useState([])
    useEffect(()=>{
        axios.get("https://www.w3schools.com/angular/customers.php").then((posRes)=>{
            const {data}=posRes;
            setRes(data.records)
        },(errRes)=>{
            console.log("errRes")
        })
    })
      
        return(
            <React.Fragment>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Country</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { res.map((element:any,index:any)=>(
                                    <TableRow key={index}>
                                        <TableCell>{element.Name}</TableCell>
                                        <TableCell>{element.City}</TableCell>
                                            <TableCell>{element.Country}</TableCell>

                                    </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </React.Fragment>
        )
}
export default UseEffectex;
