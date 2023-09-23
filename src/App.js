import React from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import styles from './Home.module.css';

function App() {

    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}> </Route>
               <Route path="/new" element= {<h1>todo</h1>}></Route>
           </Routes>
      </BrowserRouter>
  );
}

export default App;
