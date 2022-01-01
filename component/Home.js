import React from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import FormRendering from './FormRendering';
import ListRendering from './ListRendering';
import StateinClassComponent from './StateinClassComponent';
import StateInFunctionalComponent from './StateInFunctionalComponent';
import UnionBank from './UnionBank';

export default function Home() {
    return (
     <>
        <div>
        <BrowserRouter>
        <Routes>
          
            <Route path="/home" element={<Main/>}></Route>
            <Route path="/login" element={<FormRendering/>}></Route>
           
            <Route path="/home" element={<FormRendering/>}></Route>   
            <Route path="/home" element={<ListRendering/>}></Route>
            <Route path="/home" element={<StateinClassComponent/>}></Route>
            <Route path="/home" element={<StateInFunctionalComponent/>}></Route>
            
           
        </Routes>
        </BrowserRouter>
        {/* <FormRendering/>
        <ListRendering/>
        <StateinClassComponent/>
        <StateInFunctionalComponent/> */}
    </div>
        
    </>      
 )
}

function Main(){
    return (
        <>
        <h1>
            Main 
        </h1>
        <Link to="/login">Login</Link>
        </>
    )
}
