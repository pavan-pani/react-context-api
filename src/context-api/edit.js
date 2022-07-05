import React, {useContext, useEffect, useState} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Globlecontext } from '../Globalstate'

function Edit(props) {
  
  const {users, edituser}= useContext(Globlecontext)
  const [selctedUser, setselctedUser]=useState({
    id:'',
    name:''
  })

  const navigate=useNavigate()
  const {currentId}=useParams()

  useEffect(()=>{
    const userId=currentId
    const selctedUser=users.find(user=> user.id === Number(userId))
    setselctedUser(selctedUser)
  },[currentId,users]) 


  const onsubmit=(e)=>{
    e.preventDefault();
    edituser(selctedUser)
    
    navigate('/', {replace:true})
  }

  const onchange=(e)=>{
    setselctedUser({...selctedUser,[e.target.name]:e.target.value})
  }

  return (
    
    <div>
    <form onSubmit={onsubmit}>
     
        <label>Name</label>
        <input type='text'  placeholder='enter user' 
        value={selctedUser.name} onChange={onchange}></input><br></br>
        <button type='submit'>Edit</button> 
        <Link to='/'>Cancel</Link>
      
    </form>
  </div>

  )
}

export default Edit

