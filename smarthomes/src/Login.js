import './style.css';
import Header from './Header';
import { useForm, Controller } from 'react-hook-form';
import {React, useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Login(userDetails) {

    const { register, handleSubmit, control, setValue,formState: {errors}} = useForm();
    const [error, setError] = useState('');
    const history = useHistory()

    useEffect(() => {
        // Set the default value for usertype when the component mounts
        setValue('usertype', 'customer');
      }, [setValue]);

    const handleRegistration = (formData) => {
        console.log("Form submitted");
        console.log(formData);
        handleLogin(formData);
    }

    const handleLogin = (formData) => {
        const { username, password, usertype } = formData;
    
        // Check if the user exists in the local data
        const userDetailsList = userDetails.userDetails
        const user = userDetailsList[username];
        console.log(username)
        console.log(user)
    
        if (user && user.password === password && user.usertype === usertype) {
          // Simulate successful login
          setError('');
          
          if(usertype === "customer")
          {
            history.push("home")
          }
          if(usertype === "storeManager")
          {
            history.push("homesm")
          }
          if(usertype === "salesManager")
          {
            history.push("homesam")
          }

        } else {
          // Simulate login failure
          setError('Invalid username, password, or user type.');
        }
      };

    const handleError = (errors) => {};

    const registerOptions = {
        username : {required : "Username cannot be blank"},
        password : { required : "Password cannot be blank" },
    };  
    return (
        <>
        <div className="Container">
        <Header />
        <div className='post' style={{float: 'none', width: '100%'}}>
            <h2 className='title meta'><a style={{fontSize:'24px'}}>Login</a></h2>   
            <div className='entry'>
            <div style={{width:'400px', margin:'25px', marginLeft:'auto',marginRight: 'auto'}}>
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
			<table style={{width:'100%'}}>
                <tr><td>
				<h3>Username</h3></td><td><Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                            <>
                            <input type='text' name='username' className='input' {...register("username",registerOptions.username)} {...field} ></input>
                <small style={{color:"red"}}>{errors?.username && errors.username.message}</small></>)} />
				</td></tr><tr><td>
                <h3>Password</h3></td><td><Controller
                        name="password"
                        control={control}
                        render={({ field }) => ( <> <input type='password' name='password' className='input' {...register("password",registerOptions.password)} {...field}></input>
                <small style={{color:"red"}}>{errors?.password && errors.password.message}</small></>)} />
                </td></tr><tr><td>
                <h3>User Type</h3></td><td><Controller
                        name="usertype"
                        control={control}
                        render={({ field }) => (<select name='usertype' className='input' {...field} ><option value='customer'>Customer</option><option value='storeManager'>Store Manager</option><option value='salesManager'>Salesman</option></select>
                        )}
                        />
                </td></tr><tr><td></td><td>
                <input type='submit' className='btnbuy' value='Login' style={{float:'right',height:'20px', margin:'20px',marginRight:'10px'}}></input>
                </td></tr><tr><td></td><td>
                <strong><a className='' href='Registration' style={{float:'right',height:'20px' ,margin:'20px'}}>New User? Register here!</a></strong>
                </td></tr></table>    
                {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
        </div></div></div>
        </div>
        </>
    );
}