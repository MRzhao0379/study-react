import { List } from "./list"
import { SearchPannel } from "./search-pannel"
import { useEffect, useState } from "react"
import * as qs from "qs"
import {clearObject} from "../../utils"
const apiUrl=process.env.REACT_APP_URL_API
export const ProjectListScreen=()=>{
  const [param,setParam]=useState({
    name:'',
    personId:''
  });
  
  const [list,setList]=useState([])
  useEffect(()=>{
    fetch(`${apiUrl}/projects?${qs.stringify(clearObject(param))}`).then(async res=>{
      if(res.ok){
        setList(await res.json())
      }
    })
  },[param])

  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch(`${apiUrl}/users`).then(async res=>{
      if(res.ok){
        setUsers(await res.json())
      }
    })
  },[])
  

  return <div>
    <SearchPannel param={param} setParam={setParam} users={users} setUsers={setUsers}/>
    <List list={list} users={users}/>
  </div>
}