import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./components/NavBar";
import Index from "./components/Index";
import Show from "./components/Show";
import Edit from "./components/Edit";
import New from "./components/New";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [total, setTotal] = useState();

  return (
    <>
      <NavBar total={total} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Index setTotal={setTotal} total={total} />}
          ></Route>
          <Route path="/transaction/:id" element={<Show />}></Route>
          <Route path="/transaction/:id/edit" element={<Edit />}></Route>
          <Route path="/New" element={<New />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
