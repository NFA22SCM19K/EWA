import './style.css';
import Header1 from './Header1';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState } from "react";

export default function ProductUpdatePage(){
    const history = useHistory();

    const [productDetails, setProductDetails] = useState({
        pId:"",
        pname: "",
        pdescription: "",
        pdiscount: "",
        pprice: "",
        pimage: "",
        pcondition: "",
        pcompany: "",
        pRebate: '',
        pSale: '',
        pcategory: "",
        pquantity:"",
    });

    function routeToComponent(e, routePath){

        e.preventDefault();
        history.push(routePath);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setProductDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    }

    async function updateProduct(e) {
        e.preventDefault();

        try {
            // Assuming your server is running on the same host as your React app
            const response = await axios.put("http://localhost:3001/api/updateProduct", productDetails);
            const { success, productId } = response.data;

            if (success) {
                alert("Product Updated Successfully!");
                routeToComponent(e, "HomeSM");
            } else {
                alert("Failed to update product. Please try again.");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            alert("An error occurred while updating the product. Please try again.");
        }
    }

    return(
        <>
            <div className="Container">
            <Header1 />
            <div className='post'>
            <div style={{marginRight:"10px",marginLeft:"15px", important: "all" }}><a style={{fontSize: "24px"}}>Update Product</a>
            <form onSubmit={updateProduct}>
            <div className='form-group'><label><b>Select Product:</b></label><select className='form-control' name='pId' value={productDetails.pId} onChange={handleChange}><option value='Ring - Wi-Fi Video Doorbell - Wired - Black' selected>Ring - Wi-Fi Video Doorbell - Wired - Black</option><option value='Ring 1080p Wireless Video Doorbell'>Ring 1080p Wireless Video Doorbell</option><option value='Google - Nest Doorbell Wired (2nd Generation)'>Google - Nest Doorbell Wired (2nd Generation)</option><option value='Arlo Essential 1080p Wired Video Doorbell'>Arlo Essential 1080p Wired Video Doorbell</option><option value='Arlo - Essential Wireless Video Doorbell'>Arlo - Essential Wireless Video Doorbell</option><option value='Blink Video Doorbell'>Blink Video Doorbell</option><option value='Yale Assure Lock 2 Keypad with Bluetooth'>Yale Assure Lock 2 Keypad with Bluetooth</option><option value='Nest x Yale Lock with Nest Connect'>Nest x Yale Lock with Nest Connect</option><option value='SimpliSafe - Smart Lock Wi-Fi'>SimpliSafe - Smart Lock Wi-Fi</option><option value='Philips Smart Lock'>Philips Smart Lock</option><option value='YALE ASSURE YRL226-ZW2'>YALE ASSURE YRL226-ZW2</option><option value='Philips Hue Fair Ceiling Light'>Philips Hue Fair Ceiling Light</option><option value='Gowing Smart Ceiling Light Fixture Flush Mount LED'>Gowing Smart Ceiling Light Fixture Flush Mount LED</option><option value='ET2 Hive 8 inch Wide Mini Pendant'>ET2 Hive 8 inch Wide Mini Pendant</option><option value='ET2 iCorona 18 inch Wide LED Flush Mount Drum Smart Ceiling Fixture - 277'>ET2 iCorona 18 inch Wide LED Flush Mount Drum Smart Ceiling Fixture - 277</option><option value='ET2 Chimes 15 inch Tall LED Bathroom Sconce'>ET2 Chimes 15 inch Tall LED Bathroom Sconce</option><option value='Echo Dot (5th Gen, 2022 release) with clock'>Echo Dot (5th Gen, 2022 release) with clock</option><option value="Bose Home 500:">Bose Home Speaker 500: Smart Bluetooth Speaker</option><option value='Sonos One'>Sonos One</option><option value='Apple'>Apple HomePod mini</option><option value='Amazona alex'>Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa</option><option value='Apple Homepo'>Apple Homepod</option><option value='Google - N'>Google - Nest Learning Smart Wifi Thermostat</option><option value='echobeelite'>echobee3 Lite Smart Thermostat</option><option value='mysasmart'>Mysa Smart Thermostat</option><option value='amazonsmart'>Amazon Smart Thermostat</option><option value='Grohe'>Grohe</option></select></div>
            <div className='form-group'><label><b>Product Name:</b></label><input type='text' className='form-control' name='pname' placeholder='Enter Product Name'  value={productDetails.pname} onChange={handleChange}/></div>
            <div className='form-group'><label><b>Product Description:</b></label><br/><textarea className='form-control' placeholder='Enter Product Description' name='pdescription' value={productDetails.pdescription} onChange={handleChange}></textarea></div>
            <div className='form-group'><label><b>Product Discount:</b></label><br/><input className='form-control' type='text' placeholder='Enter Product Discount' name='pdiscount' value={productDetails.pdiscount} onChange={handleChange} /></div>
		    <div className='form-group'><label><b>Product Price:</b></label><input className='form-control' type='text' placeholder='Enter Product Price' name='pprice' value={productDetails.pprice} onChange={handleChange}/></div>
		    <div className='form-group'><label><b>Enter Product Image Name:</b></label><br/><input className='form-control' type='text'  placeholder='Enter Product Image Name(with Extension)' name='pimage'  value={productDetails.pimage} onChange={handleChange}/></div>
		    <div className='form-group'><label><b>Product Condition:</b></label><br/><input className='form-control' type='text' placeholder='Enter Product Condition' name='pcondition' value={productDetails.pcondition} onChange={handleChange} /></div>
		    <div className='form-group'><label><b>Product Company:</b></label><br/><input className='form-control' type='text' placeholder='Enter Product Company' name='pcompany' value={productDetails.pcompany} onChange={handleChange} /></div>
            <div className='form-group'><label><b>Product Quantity</b></label><br/><textarea style={{width:'100%'}} type='number' placeholder='Enter Product Quantity' name='pquantity' value={productDetails.pquantity} onChange={handleChange} ></textarea><br/><br/></div>
            <div className='form-group'><label><b>Is there any rebate on the product?</b></label><br/><select name='pRebate' value={productDetails.pRebate} onChange={handleChange}><option value='1' selected>Yes</option><option value='0'>No</option></select><br/><br/></div>
            <div className='form-group'><label><b>Is there any sale on the product?</b></label><br/><select name='pSale' value={productDetails.pSale} onChange={handleChange}><option value='1' selected>Yes</option><option value='0'>No</option></select><br/><br/></div>
		    <div className='form-group'><label><b>Select Category:</b></label><br/><select className='form-control' name='pcategory' value={productDetails.pCategory} onChange={handleChange}><option value='Doorbells' selected>Smart Door Bells</option><option value='Doorlocks'>Smart Door Locks</option><option value='Dpeakers'>Smart Speakers</option><option value='Lightings'>Smart Lightings</option><option value='Thermostats'>Smart Thermostats</option></select></div>
            <br/> <br/> <input type='submit' name='Add Product' className='btn btn-primary btn-lg' style={{width : '90%' }} value='Update Product'></input>
		    </form></div>
		    </div>
            </div>
        </>
    );
}