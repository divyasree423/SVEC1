import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
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
            <Route path="/home" element={<StateInFunctionalComponent/>}></Route>
           
        </Routes>
        </BrowserRouter>
        </div>
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main/>}></Route>
               
            </Routes>
            </BrowserRouter>
            
        </div>
    
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<FormRendering/>}></Route>
           
        </Routes>
        </BrowserRouter>
        </div>
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<ListRendering/>}></Route>
           
        </Routes>
        </BrowserRouter>
        </div>
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<StateinClassComponent/>}></Route>
           
        </Routes>
        </BrowserRouter>
        </div>
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<UnionBank/>}></Route>
           
        </Routes>
        </BrowserRouter>
        </div>
        
        </>
        
    
    )
}

function Main(){
    return(
        <>
        <h1>
            Main 
        </h1>
        </>
    )
}
