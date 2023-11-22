import './style.css';
import Header1 from './Header1';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState } from "react";

export default function ProductDeletePage(){
    const history = useHistory();
    const [selectedProduct, setSelectedProduct] = useState('ringwired');

    const handleProductChange = (e) => {
        setSelectedProduct(e.target.value);
    };

    const handleDeleteProduct = async () => {
        try {
        // Make a request to delete the selected product
        const response = await axios.delete('http://localhost:3001/api/deleteProduct', {
            params: { productName: selectedProduct }
        });

        } catch (error) {
        console.error('Error deleting product:', error);
        // Handle the error (show an error message, etc.)
        }
    };

    function routeToComponent(e, routePath){

        e.preventDefault();
        history.push(routePath);
    }

    return(
        <>
            <div className="Container">
            <Header1 />
            <div className='post'>
            <div style={{marginRight:"10px",marginLeft:"15px", important: "all" }}><a style={{fontSize: "24px"}}>Delete Product</a>
            <form>
            <div className='form-group'><label>Select Product:</label><select className='form-control' name='pId' value={selectedProduct} onChange={handleProductChange}><option value='Ring - Wi-Fi Video Doorbell - Wired - Black' selected>Ring - Wi-Fi Video Doorbell - Wired - Black</option><option value='Ring 1080p Wireless Video Doorbell'>Ring 1080p Wireless Video Doorbell</option><option value='Google - Nest Doorbell Wired (2nd Generation)'>Google - Nest Doorbell Wired (2nd Generation)</option><option value='Arlo Essential 1080p Wired Video Doorbell'>Arlo Essential 1080p Wired Video Doorbell</option><option value='Arlo - Essential Wireless Video Doorbell'>Arlo - Essential Wireless Video Doorbell</option><option value='Blink Video Doorbell'>Blink Video Doorbell</option><option value='Yale Assure Lock 2 Keypad with Bluetooth'>Yale Assure Lock 2 Keypad with Bluetooth</option><option value='Nest x Yale Lock with Nest Connect'>Nest x Yale Lock with Nest Connect</option><option value='SimpliSafe - Smart Lock Wi-Fi'>SimpliSafe - Smart Lock Wi-Fi</option><option value='Philips Smart Lock'>Philips Smart Lock</option><option value='YALE ASSURE YRL226-ZW2'>YALE ASSURE YRL226-ZW2</option><option value='Philips Hue Fair Ceiling Light'>Philips Hue Fair Ceiling Light</option><option value='Gowing Smart Ceiling Light Fixture Flush Mount LED'>Gowing Smart Ceiling Light Fixture Flush Mount LED</option><option value='ET2 Hive 8 inch Wide Mini Pendant'>ET2 Hive 8 inch Wide Mini Pendant</option><option value='ET2 iCorona 18 inch Wide LED Flush Mount Drum Smart Ceiling Fixture - 277'>ET2 iCorona 18 inch Wide LED Flush Mount Drum Smart Ceiling Fixture - 277</option><option value='ET2 Chimes 15 inch Tall LED Bathroom Sconce'>ET2 Chimes 15 inch Tall LED Bathroom Sconce</option><option value='Echo Dot (5th Gen, 2022 release) with clock'>Echo Dot (5th Gen, 2022 release) with clock</option><option value="Bose Home 500:">Bose Home Speaker 500: Smart Bluetooth Speaker</option><option value='Sonos One'>Sonos One</option><option value='Apple'>Apple HomePod mini</option><option value='Amazona alex'>Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa</option><option value='Apple Homepo'>Apple Homepod</option><option value='Google - N'>Google - Nest Learning Smart Wifi Thermostat</option><option value='echobeelite'>echobee3 Lite Smart Thermostat</option><option value='mysasmart'>Mysa Smart Thermostat</option><option value='amazonsmart'>Amazon Smart Thermostat</option><option value='Grohe'>Grohe</option></select></div>
            </form></div>
		    <button  data-toggle='modal' data-target='#myModal2' className='btn btn-primary' onClick={handleDeleteProduct}>Delete Product</button></div>
		    <div id='myModal2' className='modal fade' role='dialog'><div className='modal-dialog'><div className='modal-content'><div className='modal-header'> <button type='button' className='close' data-dismiss='modal'>&times;</button> <h4 className='modal-title'>Product Status</h4> </div>
		    <div className='modal-body'><p>Product Deleted Successfully!.</p></div><div className='modal-footer'><button type='button' className='btn btn-default' data-dismiss='modal' onClick={(e)=>(routeToComponent(e,"HomeSM"))}>Close</button></div></div></div></div>
            </div>
        </>
    );
}