import React, { createContext, useReducer, useState } from 'react';
import {Routes as Switch, Route} from 'react-router-dom'
import { appData } from './appData';
import Add from './context-api/add';
import Home from './context-api/home';
import Edit from './context-api/edit';
import { GlobleProveder } from './Globalstate';
// import Display from './components/disply';
// import Count from './components/count';

// export const store =createContext()
// // const [ininitalstate]=store
// // const reducer=(state,action)=>{
// //   switch(action){
// //     case 'delete':{

// //     }
// //   }
// // }

function App() {
  // const[data, setData]=useState(appData)


  return (
   
  
      <div className="App">
        <GlobleProveder>
          <Switch>
              <Route path='/' element={<Home/>}/>
              <Route path='/add'  element={<Add/>}/>
              <Route path='/edit/:id' element={<Edit/>}/>
            </Switch>
          
        </GlobleProveder>
    </div>
  
    
  );
}

export default App;
