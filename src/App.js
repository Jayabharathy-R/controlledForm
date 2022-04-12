import React,{useState} from 'react';
import './index.css';


export default function App() {
  const [state,setState]=useState({firstName:" ",lastName:" ",email:" ",gender:" ",courses:"react"});
  const [error,setError]=useState({firstName:" ",lastName:" ",email:" ",gender:" "});


  const handleSubmit = async (e) => {
    e.preventDefault();
    var error={...error}
  
   await Object.keys(state).map(key=>{
    
        //setError({...error,[key]: key+" is required"});
        if (state[key] === " ")
        {
          error[key]=key+" is required";
        setError(error);
          //setError({...error,[key]: key+" is required"});
        }

   
      })
      //console.log(error)
   
  };
  const handleChange =async (e) => {
    
    setState({...state,[e.target.name]:e.target.value})
  
    if (e.target.value === '')
    {
      await setError({...error,[e.target.name]: e.target.name+" is required"});
    
    }
    else{
      await setError({...error,[e.target.name]: " "});
    }
    //console.log(error)
    //console.log(state);
  
   
   
   }


return (
  <div id="body">
    <h3>Controlled Form</h3>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label>FirstName :</label>&nbsp;&nbsp;&nbsp;
        <input type="text" id="fname" name="firstName" onChange={(e) => handleChange(e)} />
      </div>
      <span style={{ color: 'red' }}>{error.firstName} </span>

      <br /><br />
      <div>
        <label>LastName :</label>&nbsp;&nbsp;&nbsp;
        <input type="text" id="lname" name="lastName" onChange={(e) => handleChange(e)} />
      </div>
      <span style={{ color: 'red' }}> {error.lastName}</span>
      <br /><br />
      <div>
        <label>Email :</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" id="email" name="email" onChange={(e) => handleChange(e)} />
      </div>
      <span style={{ color: 'red' }}>{error.email}</span>
      <br /><br />
      <div>
        <label>Gender :</label>&nbsp;&nbsp;&nbsp;
        <input type="radio" name="gender" value="male" onChange={(e) => handleChange(e)}/> Male
        <input type="radio" name="gender" value="female" onChange={(e) => handleChange(e)}/> Female
      </div>
      <span style={{ color: 'red' }}>{error.gender}</span>
      <br /><br />
      <div>
        <label>Courses :</label>&nbsp;&nbsp;
        <select name="courses" onChange={(e) => handleChange(e)}>
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="mongo">Mongo</option>
        </select>
      </div>
      <br /><br />
      <button type="submit">submit</button>
      &nbsp; &nbsp;
      <button type="button">Reset</button>
      <br/>
    </form>
  </div>
);
}
