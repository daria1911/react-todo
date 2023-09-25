import React from 'react';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import Lists from "./Lists";

function App() {

    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<Home/>}> </Route>
               <Route path="/profile" element= {<h1>Profile</h1>}></Route>
               <Route path="/lists" element= {<Lists/>}></Route>
           </Routes>
      </BrowserRouter>
  );
}

export default App;
