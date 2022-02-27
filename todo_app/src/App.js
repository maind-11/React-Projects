import { store } from "./Store/store";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Form from "./Components/Form";
import Nav from "./Components/Nav";

import "./App.scss";
import Edit_todo from "./Components/Edit_todo";

function App() {
  console.log(store.getState());
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Form />}></Route>
          <Route path="/edit" element={<Edit_todo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
