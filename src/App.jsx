import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import { ReactDOM } from "react";
import { Outlet } from "react-router-dom";

import { Provider } from 'react-redux'
import appStore from "./utils/appStore";




function App() {
  return (
    
     
      <div className="app">
        <Header />
        <Outlet />
      </div>
  
  );
}



export default App;
