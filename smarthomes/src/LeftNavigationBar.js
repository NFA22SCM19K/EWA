import './style.css';

function LeftNavigationBar() {
    return(
        <div>
        <div id="sidebar">
	<ul>
		<li>
			<h2>Smart Doorbells</h2>
			<ul>
				<li id="first"><a href="DoorBellsList?maker=arlo">Arlo </a></li>
				<li><a href="DoorBellsList?maker=blink">Blink </a></li>
				<li><a href="DoorBellsList?maker=google">Google </a></li>
				<li><a href="DoorBellsList?maker=ring">Ring</a></li>
			</ul>
		</li>
		<li>
			<h2>Smart Doorlocks</h2>
			<ul>
				<li id="first"><a href="DoorLocksList?maker=yale">Yale</a></li>
				<li><a href="DoorLocksList?maker=philips">Philips</a></li>
				<li><a href="DoorLocksList?maker=simplisafe">Simplisafe</a></li>
			</ul>
		</li>
		<li>
			<h2>Smart Lightings</h2>
			<ul>
				<li id="first"><a href="LightingsList?maker=et2">ET2</a></li>
				<li><a href="LightingsList?maker=philips">Philips</a></li>
				<li><a href="LightingsList?maker=gowing">Gowing</a></li>
			</ul>
		</li>
		
		<li>
			<h2>Smart Speakers</h2>
			<ul>
				<li id="first"><a href="SpeakersList?maker=bose">Bose</a></li>
				<li><a href="SpeakersList?maker=apple">Apple</a></li>
				<li><a href="SpeakersList?maker=amazon">Amazon</a></li>
				<li><a href="SpeakersList?maker=sonos">Sonos</a></li>
			</ul>
		</li>
		<li>
			<h2>Smart Thermostats</h2>
			<ul>
				<li id="first"><a href="ThermostatsList?maker=amazon">Amazon</a></li>
				<li><a href="ThermostatsList?maker=echobee">Echobee</a></li>
				<li><a href="ThermostatsList?maker=mysa">Mysa</a></li>
				<li><a href="ThermostatsList?maker=google">Google</a></li>
			</ul>
		</li>
		<li>
			<h2>Accessories</h2>
			<ul>
				<li id="first"><a href="AccessoryList?maker=doorbells">Doorbells</a></li>
				<li><a href="AccessoryList?maker=speakers">Speakers</a></li>
				<li><a href="AccessoryList?maker=lightings">Lightings</a></li>
			</ul>
		</li>
	</ul>
</div>
    </div>    
    );
}
export default LeftNavigationBar;