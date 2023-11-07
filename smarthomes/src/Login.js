import './style.css';
import Header from './Header';
import { useForm } from 'react-hook-form';
export default function Login() {
    const { register, handleSubmit, formState: {errors}} = useForm();
    const handleRegistration = (formData) => {
        console.log("Form submitted");
        console.log(formData);
    }

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
				<h3>Username</h3></td><td><input type='text' name='username' className='input' {...register("username",registerOptions.username)}></input>
                <small style={{color:"red"}}>{errors?.username && errors.username.message}</small>
				</td></tr><tr><td>
                <h3>Password</h3></td><td><input type='password' name='password' className='input' {...register("password",registerOptions.password)}></input>
                <small style={{color:"red"}}>{errors?.password && errors.password.message}</small>
                </td></tr><tr><td>
                <h3>User Type</h3></td><td><select name='usertype' className='input'><option value='customer'>Customer</option><option value='storeManager'>Store Manager</option><option value='salesManager'>Salesman</option></select>
                </td></tr><tr><td></td><td>
                <input type='submit' className='btnbuy' value='Login' style={{float:'right',height:'20px', margin:'20px',marginRight:'10px'}}></input>
                </td></tr><tr><td></td><td>
                <strong><a className='' href='Registration' style={{float:'right',height:'20px' ,margin:'20px'}}>New User? Register here!</a></strong>
                </td></tr></table>    
        </form>
        </div></div></div>
        </div>
        </>
    );
}