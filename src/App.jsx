
import './App.css';
import { Routes,Route } from 'react-router-dom';
import {Home} from "./components/Home"
import {About} from "./components/About"
import {Navbar} from "./components/navbar"
import {Userlist} from "./components/userlist"
import { Userdetails } from './components/userdetails';
import {PrivateComponent} from "./components/PrivateComponents";
import {Login} from "./components/login";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/users/:id"
          element={
            <PrivateComponent>
              <Userdetails></Userdetails>
            </PrivateComponent>
          }>
        </Route>
        <Route path="/index" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/users" element={<Userlist></Userlist>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
       {" "}
      </Routes>
    </div>
  );
}

export default App;
