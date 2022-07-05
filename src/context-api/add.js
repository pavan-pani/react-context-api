import React,{useContext, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Globlecontext } from '../Globalstate'


function Add() {
  const {users, adduser}= useContext(Globlecontext)
  const navigate=useNavigate()
  const [name, setName]=useState('')


  const onSubmit=()=>{
    const newuser={
      id: users.length+1,
      name
    }
    adduser(newuser)
    navigate('/', {replace:true})
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
       
          <label> Name</label>
          <input type='text' placeholder='enter user'value={name}
          onChange={(e)=>setName(e.target.value)}></input><br></br>
          <button type='update' >Submit</button> 
          <Link to='/'>Cancel</Link>
        
      </form>
      
    </div>
  )
}

export default Add