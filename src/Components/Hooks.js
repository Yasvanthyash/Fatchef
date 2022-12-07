import React,{useState} from 'react'

function Hooks() {
    const[count,setcount]=useState(69)
    const[count1,setcount1]=useState(69)
    let inc=()=>{
       setcount(count+1)
    }
    let dec=()=>{
       setcount1(count1+5)
    }
  return (
    <div>
    <button onClick={inc}>clickme {count}</button>
    <button onClick={dec}>clickme {count1}</button>
    </div>
  )
}

export default Hooks

