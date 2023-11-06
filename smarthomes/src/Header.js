import LeftNavigationBar from "./LeftNavigationBar";
import './style.css';
export default function Header(){
    return(
        <>
		{/* The name of the company goes here  */}
			
			<h1 style={{textAlign:"center",alignItems:"center",alignSelf:"center"}}><span><img src="images/logo.jpg" style={{width:"40px",height:"50px",margin:"2px",paddingBottom:"6px"}} alt="no image"/></span><span style={{color:'#799AC0'}}>SMART HOMES</span></h1>

		{/* the navigation bar starts here, the remaining items are added according to the session value from utilites servlet  */}

        <nav className="navbar navbar-default">
			<div className="container-fluid" id="menu">
				<ul className="nav navbar-nav">
					<li><a href="Home" className="first"><span className="glyphicon glyphicon-home">Home</span></a></li>
					<li><a href="DoorBellsList"><span className="glyphicon">Smart-Doorbells</span></a></li>
					<li><a href="DoorLocksList"><span className="glyphicon">Smart-Doorlocks </span></a></li>
					<li><a href="SpeakersList"><span className="glyphicon">Smart-Speakers</span></a></li>
					<li><a href="LightingsList"><span className="glyphicon">Smart-Lightings</span></a></li>
					<li><a href="ThermostatsList"><span className="glyphicon">Smart-Thermostats</span></a></li>
					<li><a href="AccessoryList?maker=all"><span className="glyphicon">Accessory </span></a></li>
				</ul>
			</div>
            <div style={{float: 'right'}} >
                <ul className='nav navbar-nav'>
                    <li><a href='ViewOrder'><span className='glyphicon'>View Order</span></a></li>
                    <li><a href='Login'><span className='glyphicon'>Login</span></a></li>
                    <li><a href='Cart'><span className='glyphicon'>Cart(0)</span></a></li>
                </ul>
            </div>
        </nav>
    

        </>
    );
}