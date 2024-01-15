import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/UserAuth";
import { useNavigate } from "react-router-dom";



function Register() {
 const navigate = useNavigate();
 const dispatch = useDispatch();
const [form,setForm] = useState({ })


  const handleChange = (e)=>{
    e.preventDefault();
    // console.log(e.target.value,e.target.name)

    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(JSON.stringify(form))
 const response =  await fetch("http://localhost:5000/register",{
  method: 'POST',
  body: JSON.stringify(form),
  headers:{
    'Content-Type': 'application/json'
  }
 })

 const data = await response.text();
 console.log(data)
 if(response.status === 200){
  dispatch(login({ username: form.username }));
  navigate("/connect")
 }

  }




  return (

    <form className="user" onSubmit={handleSubmit} >
      <card>
        <h3>SIGNUP</h3>
        <input type='text' placeholder='Name' name='name' onChange={handleChange}></input>
        <input type='text' placeholder='Username' name='username' onChange={handleChange}></input>
        <input type='password' placeholder='Password' name='password' onChange={handleChange}></input>
        <input type='submit' value='submit'></input>
        </card>
    </form>
    
  );
}

export default Register;
