import axios from "axios";
import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs';

function Mate(){
  const [user, setUser] = useState("");

  const onChange =(e)=>{
    setUser(e.target.value);
  }
  const onSearch =()=>{
    axios.get("http://localhost:8080/api/users",{
      // params: {
      //   email: user,
      // }
    }).then(res=>{
    console.log(res.data);

    }).catch(e=>{
      console.log(e);
    })
  }
  return(
    <>
    <form>
      <label>Searching your Mate</label>
      <input type="search" placeholder="Search by Email" onChange={onChange}></input>
      <input type="submit" onClick={onSearch}><BsSearch/></input>
    </form>
    </>
  )
}
export default Mate;