import React, { useEffect, useState } from 'react'
import axios from "axios"


interface item{
  name:string,
  id:number
}
interface item2{
  date:string,
  customer_id:number
  amount:number
}

export default function Table({users,data}) {
 
  console.log(data)
  return (
    <table className="border-collapse border border-slate-500 w-[90%]  mx-auto my-10 text-center">
    <thead>
      <tr>
        <th className="border border-slate-600 p-2 ">Name</th>
        <th className="border border-slate-600  p-2">Transaction</th>
      </tr>
    </thead>
    <tbody>
      {users?.map((item:item,index:number)=>
        <tr key={index}>
          <td className="border border-slate-700 p-2 ">{item.name}</td>
          <td className="border border-slate-700 flex flex-wrap flex-row justify-center items-center gap-1 md:gap-3  p-2">
            {data?.map((item2:item2,index)=>
            item2.customer_id === item.id? <p key={index}>{"Date:"+item2.date +" : " + item2.amount+"$,"}</p>:"")}
          </td>
        </tr>
      )}
      
    </tbody>
  </table>
  )
}
