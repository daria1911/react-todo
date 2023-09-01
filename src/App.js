import React from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
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
