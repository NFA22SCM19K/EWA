import './style.css';
import Header from './Header';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
export default function Registration(){
    const { register,control, handleSubmit, setError, formState: { errors } } = useForm();
    const history = useHistory();
    const handleRegistration = (data) => {
        if (data.password !== data.repassword) {
            setError('repassword', { type: 'manual', message: "Passwords don't match" });
          } else {
            // You can send the form data to your server for registration and data storage here
            console.log('Form submitted', data);
      
            // Redirect to login or account page
            //history.push('/Login'); // Change '/Login' to the appropriate route
          }
      }
      const handleError = (errors) => {};

    const registerOptions = {
        username : {required : "Username cannot be blank"},
        password : { required : "Password cannot be blank" },
        repassword : {required : "Password cannot be blank"},
    };  
    return(
        <>
             <div className="Container">
                <Header />
                <div className='post' style={{float: "none", width: "100%"}}>
                <h2 className='title meta'><a style={{fontSize: "24px"}}>Registration</a></h2>
                <div className='entry'>
                <div style={{width:"400px", margin:"25px", marginLeft: "auto",marginRight: "auto"}}>
                <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                    <table style={{width:'100%'}}><tr><td>
                    <h3>Username</h3></td><td><Controller
                    name='username'
                    control={control}
                    render={({ field }) => (
                        <>
                        <input type='text' name='username' className='input' {...register("username",registerOptions.username)} {...field} ></input>
                    <small style={{color:"red"}}>{errors?.username && errors.username.message}</small>
                    </>
                    )} />
                    
                    </td></tr><tr><td>
                    <h3>Password</h3></td><td><Controller
                    name='password'
                    control={control}
                    render={({ field }) => (
                    <>
                    <input type='password' name='password' className='input' {...register("password",registerOptions.password)} {...field}></input>
                    <small style={{color:"red"}}>{errors?.password && errors.password.message}</small>
                    </>
                    )}
                  />
                    </td></tr><tr><td>
                    <h3>Re-Password</h3></td><td><Controller
                    name='repassword'
                    control={control}
                    render={({ field }) => (
                    <>
                    <input type='password' name='repassword' className='input' {...register("repassword",registerOptions.repassword)} {...field}></input>
                    <small style={{color:"red"}}>{errors?.repassword     && errors.repassword.message}</small>
                    </>
                    )}
                    />
                    </td></tr><tr><td>
                    <h3>User Type</h3></td><td><Controller
                        name="usertype"
                        control={control}
                        render={({ field }) => (<select name='usertype' className='input'><option value='customer'>Customer</option><option value='storeManager'>Store Manager</option><option value='salesManager'>Salesman</option></select>
                        )}
                        />
                        </td></tr></table>
                    <input type='submit' className='btnbuy' name='ByUser' value='Create User' style={{float: "right",height: "20px", margin: "20px", marginRight: "10px"}}></input>
                </form>
                </div></div></div>
            </div>
        </>
    );
}