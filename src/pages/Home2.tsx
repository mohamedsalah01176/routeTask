import React, { useEffect, useState } from 'react'
import Table from '../commponent/Table.tsx'
import Chart from '../commponent/Chart.tsx'
import axios from 'axios'

export default function Home2() {
    const [users, setUsers] = useState([])
    const [data, setData] = useState([])
  
    function getUser(){
      axios.get("http://localhost:3000/customers").then((res)=>setUsers(res.data))
    }
    function getDataUser(){
      axios.get("http://localhost:3000/transactions").then((res)=>setData(res.data))
    }
  
    useEffect(()=>{
      getUser();
      getDataUser()
    },[])
  return (
    <div>
        <Chart users={users} data={data}/>
        <Table users={users} data={data}/>
    </div>
  )
}
