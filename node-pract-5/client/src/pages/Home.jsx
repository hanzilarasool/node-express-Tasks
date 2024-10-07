import axios from "axios"
import { useState } from "react";

const axiosInstance=axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
})

function Home() {
const [username, setusername] = useState("");
const [email, setemail] = useState("");
const  [password, setpassword] = useState("");
const [userdata, setuserdata] = useState({});

    const handleSubmit=(e)=>{
e.preventDefault();
axiosInstance.post("/api/users/user",{
    username,
    email,
    password,
}).then(response=>setuserdata(response.data)).catch((err)=>console.log("error in posting userData",err));
    }
  return (
    <div className="home-page-container" >
<form onSubmit={handleSubmit}>
    <input type="text" id="username" placeholder="username" value={username} onChange={(e)=>setusername(e.target.value)} name="username" /><br />
    <input type="email" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)} />
    <input type="password" id="password" placeholder="password"  value={password} onChange={(e)=>setpassword(e.target.value)} /><br />
    <button type="submit">Register</button>
</form>
    </div>
  )
}

export default Home;