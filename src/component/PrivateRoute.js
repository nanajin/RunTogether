import { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./Login";
// import isLogin from "./isLogin";
import MainPage from "../page/MainPage";

function PrivateRoute(props){
  const isLogin = true;
  return(
    <BrowserRouter>
      <Routes>
        {isLogin?
          <Route path={props.path} element={props.element}/>
          :<Route path='/login' element={<Login/>}/>
        }
      </Routes>
    </BrowserRouter>
  );
}
// render={(props) => <Home {...props}/>}
export default PrivateRoute;