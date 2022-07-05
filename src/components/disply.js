import React, { useContext, useState } from 'react'
import { store } from '../App'

function Display() {
    const [data,setData]=useContext(store)
    const [name, setName]=useState('')
    const [prize, setPrize]=useState('')
    const [model, setModel]=useState('')

    const Submithandler=e=>{
      e.preventDefault();
      setData([...data,{id:data.length+1},{brandname:name},{prize:prize},{model:model}])
    }
  return (

    

    <div>
      
      {data.map((items)=> {
      return(
        <tr>
        <td style={{border:'10px solid white'}}>{items.brandname}</td>
        <td style={{border:'10px solid white'}}>{items.prize}</td>
        <td style={{border:'10px solid white'}}>{items.model}</td>
        {/* <td style={{border:'10px solid white'}}>
          <input type='submit' value='delete' ></input></td> */}
      </tr>
      )}
          )}

       
        <form onSubmit={Submithandler}>
          <input 
          type='text' 
          placeholder='Enter brand name' 
          onChange={(e)=>setName(e.target.value)}/>
          <br></br>
          <input 
          type='text' 
          placeholder='Enter prize' 
          onChange={(e)=>setPrize(e.target.value)}/>
          <br></br>
          <input 
          type='text' 
          placeholder='Enter model' 
          onChange={(e)=>setModel(e.target.value)}/>
          <br></br>
          <input type='submit' value='add'/>
        </form>
        

        
    </div>
  )
}

export default Display