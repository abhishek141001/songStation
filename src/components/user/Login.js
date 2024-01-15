import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/UserAuth";
import { useNavigate } from "react-router-dom";



function Login() {
  const dispatch = useDispatch()
const navigate = useNavigate();

const [form,setForm] = useState({})
const [error, setError] = useState('');
const [isCredential,setIsCredential] = useState(true);


const handleChange = (e)=>{
// console.log(e.target.name,e.target.value)



setForm({
  ...form,
  [e.target.name] : e.target.value
})
}
const handleSubmit = async (e)=>{
  e.preventDefault();
  if (!form.username || !form.password) {
    setError('Please enter both username and password.');
    return;
  }
  try{
  const response = await fetch("http://localhost:5000/login",{
    method: "POST",
    body: JSON.stringify(form),
    headers:{
      "Content-Type": "application/json"
    }
  })
  const data = await response.json();
    if (response.status === 200) {
      dispatch(login({ username: form.username }));
      //  dispatch(login())
       navigate("/connect")
      
      
      console.log("Login successful",data); // You can set state or perform further actions upon successful login.
      // Redirect or set some state indicating successful login
    } else {
      console.log("Login failed");
      // Handle failed login (show error message, etc.)
    }
  } catch(error){
    setError("An error occurred. Please try again later.");
    console.error("Login error:", error);
    setIsCredential(false);

  }
   
  
}

  return (
    <form className="user" onSubmit={handleSubmit}>
      <card>
        <h3>LOGIN</h3>

        <p className= {isCredential ? ("correctPassword"): ("incorrectPassword")}>⚠ Username or password is incorrect</p>
        <input type='text' placeholder='Email' name='username' required onChange={handleChange}></input>
        <input type='password' placeholder='Password' name='password' required onChange={handleChange}></input>
        <input type='submit' value='submit'></input>
        </card>
    </form>
  );
}

export default Login;