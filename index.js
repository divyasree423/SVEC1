import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Functional from './component/Functional';
import ClassComponent from './component/ClassComponent';
import UnionBank from './component/UnionBank';
import StateinClassComponent from './component/StateinClassComponent';
import StateInFunctionalComponent from './component/StateInFunctionalComponent';
import FormRendering from './component/FormRendering';
import Home from './component/Home';


ReactDOM.render(
  <React.StrictMode>
      {/* <App /> */}
     {/* <Functional/> */}
    {/* <ClassComponent/> */} 
    {/* <UnionBank/> */}
    {/* <FormRendering/> */}
    <Home/>
    {/* <StateinClassComponent/> */}
    {/* <StateInFunctionalComponent/> */}
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
