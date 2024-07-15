import React, { useState } from 'react'



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
  const[data2,setData2]=useState(users)
  const[date2,setDate2]=useState(users)
  const[dateSearch,setDateSearch]=useState(users)

  function SearcByName(name){
    let user=users.filter((item)=>item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
    setData2(user)
  }
  function SearcByData(date){
    let dateSearch=data.filter((item)=>item.date.toString().indexOf(date.toString()) !== -1)
    let userId = dateSearch.map((item)=>item.customer_id)
    let filteredUsers=users.filter(user=>userId.includes(user.id))
    setDate2(filteredUsers)
    setDateSearch(dateSearch)
    
  }
  console.log("SSS",date2)
  function SearcByValue(value){
    let dateSearch=data.filter((item)=>item.amount.toString().indexOf(value.toString()) !== -1)
    let userId = dateSearch.map((item)=>item.customer_id)
    let filteredUsers=users.filter(user=>userId.includes(user.id))
    setDate2(filteredUsers)
    setDateSearch(dateSearch)

  }
  return (
    <div className='mt-10'>
      <div className='flex justify-center items-center flex-wrap gap-4 w-[100%] mx-auto'>
        <input type='text' placeholder='Search By Name' onChange={(e)=>SearcByName(e.target.value)} className='bg-black p-2 text-white text-lg rounded-lg border-none outline-none '/>
        <input type='text' placeholder='Search By Date' onChange={(e)=>SearcByData(e.target.value)} className='bg-black p-2 text-white text-lg rounded-lg border-none outline-none '/>
        <input placeholder='Search By Amount' onChange={(e)=>SearcByValue(e.target.value)} className='bg-black p-2 text-white text-lg rounded-lg border-none outline-none '/>
      </div>
      <table className="border-collapse border border-slate-500 w-[90%]  mx-auto my-5 text-center">
      <thead>
        <tr>
          <th className="border border-slate-600 p-2 ">ID</th>
          <th className="border border-slate-600 p-2 ">Name</th>
          <th className="border border-slate-600  p-2">date</th>
          <th className="border border-slate-600  p-2">amount</th>
        </tr>
      </thead>
      <tbody>
        {data2.length >0?
        data.map((item,index)=>
          <>
          {data2.map((item2,index)=>
          <>
          {item.customer_id === item2.id?
          
          <tr key={index}>
            <td  className="border border-slate-700 p-2 ">{item.id}</td>
            <td className="border border-slate-700 p-2 ">{item2.name}</td>
            <td className="border border-slate-700 p-2 ">{item.date}</td>
            <td className="border border-slate-700 p-2 ">{item.amount}</td>
          </tr>
          
          :
          ""}
          </>
          )}
          </>
        )
      :
      <>
      {dateSearch.length >0?
       dateSearch.map((item,index)=>
        <>
        {date2.map((item2,index)=>
        <>
        {item.customer_id === item2.id?
        
        <tr key={index}>
          <td  className="border border-slate-700 p-2 ">{item.id}</td>
          <td className="border border-slate-700 p-2 ">{item2.name}</td>
          <td className="border border-slate-700 p-2 ">{item.date}</td>
          <td className="border border-slate-700 p-2 ">{item.amount}</td>
        </tr>
        
        :
        ""}
        </>
        )}
        </>
      )
      :
        data.map((item,index)=>
          <>
          {users.map((item2,index)=>
          <>
          {item.customer_id === item2.id?
          
          <tr key={index}>
            <td  className="border border-slate-700 p-2 ">{item.id}</td>
            <td className="border border-slate-700 p-2 ">{item2.name}</td>
            <td className="border border-slate-700 p-2 ">{item.date}</td>
            <td className="border border-slate-700 p-2 ">{item.amount}</td>
          </tr>
          
          :
          ""}
          </>
          )}
          </>
        )
      

      }
      </>
      
    }
      </tbody>
    </table>
      {/* <table className="border-collapse border border-slate-500 w-[90%]  mx-auto my-5 text-center">
      <thead>
        <tr>
          <th className="border border-slate-600 p-2 ">ID</th>
          <th className="border border-slate-600 p-2 ">Name</th>
          <th className="border border-slate-600  p-2">Transaction</th>
        </tr>
      </thead>
      <tbody>
        {data2.length >0?
        data2?.map((item:item,index:number)=>
          <tr key={index}>
            <td className="border border-slate-700 p-2 ">{item.id}</td>
            <td className="border border-slate-700 p-2 ">{item.name}</td>
            <td className="border border-slate-700 flex flex-wrap flex-row justify-center items-center gap-1 md:gap-3  p-2">
              {data?.map((item2:item2,index)=>
              item2.customer_id === item.id? <p key={index}>{"Date:"+item2.date +" : " + item2.amount+"$"}</p>:"")}
            </td>
          </tr>
        )
      :
      users?.map((item:item,index:number)=>
        <tr key={index}>
          <td className="border border-slate-700 p-2 ">{item.id}</td>
          <td className="border border-slate-700 p-2 ">{item.name}</td>
          <td className="border border-slate-700 flex flex-wrap flex-row justify-center items-center gap-1 md:gap-3  p-2">
            {data?.map((item2:item2,index)=>
            item2.customer_id === item.id? <p key={index}>{"Date:"+item2.date +" : " + item2.amount+"$"}</p>:"")}
          </td>
        </tr>
      )
      }
        
      </tbody>
    </table> */}
    </div>
  )
}
