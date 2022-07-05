/* eslint-disable no-template-curly-in-string */
import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { Globlecontext } from '../Globalstate'

function Barndslist() {
  const {users, remove,adduser}= useContext(Globlecontext)
  console.log(users);
  return (
    <table>
      {users.map(users=>(

        <tbody>
        <td>{users.name}</td>
        <td><Link to={`/edit/${users.id}`}>Edit</Link></td>
        <td><button onClick={()=>remove(users.id)}>delete</button></td>
        </tbody>

      ))}
        
    </table>
//    <ListGroup>
//     <ListGroupItem>
//         <div>
//             <Link to='/edit'>Edit</Link>
//         </div>
//     </ListGroupItem>
//    </ListGroup>
    
  )
}

export default Barndslist