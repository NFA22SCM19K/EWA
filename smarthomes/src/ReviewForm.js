import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useLocation } from "react-router-dom";
import Header from './Header';
import LeftNavigationBar from './LeftNavigationBar';
import { useUser } from './UserContext';

export default function ReviewForm() {
    const [reviewDetail, setReviewDetail] = useState({
    // Initialize with default values or leave empty
    userName: username,
    prodID: productid,
    prodCategory: productcategory,
  });

  const {user} = useUser();
    const { username, usertype } = user || {}

  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const productname = queryParams.get("name");
    const productid = queryParams.get("id");
    const productcategory = queryParams.get("category");
    const productprice = queryParams.get("price");
    const productimg = queryParams.get("img");
    const productdesc = queryParams.get("desc");
    const productmaker = queryParams.get("maker");
    const type = "";

    switch (productcategory) {
        case "Doorbells":
          type = "doorbells";
          break;
        case "Doorlocks":
          type = "doorlocks";
          break;
        case "Lightings":
          type = "lightings";
          break;
        case "Speakers":
          type = "speakers";
          break;
        case "Thermostats":
          type = "thermostats";
          break;
        default:
          type = "";
          break;
      }
    
    


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReviewDetail({ ...reviewDetail, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/addReview', reviewDetail);
      console.log('Review added successfully');
    } catch (error) {
      console.error('Error adding review:', error.message);
    }
  };

  return (
    <>
    <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id='content'><div className='post'><h2 className='title meta'>
        <a style={{fontSize: "24px",color:"purple",textAlign:"center",fontWeight:"bold",marginLeft:"35%"}}> Write Review for {productname}</a></h2><br/><br/>
        <div> <img src = {'images/' + type + '/' + productimg} alt='' style={{width :"350px" ,important: "all",height:"350px",important: "all",marginLeft:"35%"}}/><h4 style={{textAlign :"center",fontSize:"12px",important:"all"}}>productdesc
        </h4> <h4 style={{textAlign :"center",fontSize:"12px",important:"all"}}> Price - ${productprice}</h4></div></div></div>
      <form onSubmit={handleSubmit}>
        <div id='content'><div className='post'>
        <div className='entry'>
        <table><tr></tr><tr></tr>
        <table><tr><td>
        <b>Enter your Ratings here : <span className='tab'/>       </b> </td>
        <td><select name='ratings' id='ratings' style = {{margin:"50px",important:"all",width : "100px",important:"all"}}>
        <option value='5'>5 Stars</option>
        <option value='4.5'>4.5 Stars</option>
        <option value='4'>4 Stars</option>
        <option value='3.5'>3.5 Stars</option>
        <option value='3'>3 Stars</option>
        <option value='2.5'>2.5 Stars</option>
        <option value='2'>2 Stars</option>
        <option value='1.5'>1.5 Stars</option>
        <option value='1'>1 Star</option>
        <option value='0'>0 Stars</option>
        </select>
        </td></tr></table>
        <tr><td><b>
        Enter your reviews here :</b></td></tr> <tr>
        <td><input type='text' name='reviews' style= {{width: "600px",important:"all",height:"50px",important:"all" ,size:'150'}}></input>
        </td></tr><br/> <br/>
        <input type='hidden' name='userName' value={username}></input>
        <input type='hidden' name='prodID' value={productid}></input>
        <input type='hidden' name='prodCategory' value={productcategory}></input>
        <b style = 'color:red;font-size: 16px'> Please enter your details below </b> <br/> <br/>
        <tr><td><b>
        Enter your age :</b></td></tr> <tr>
        <td><input type='text' name='age' style= {{width: "100px",important:"all",size:'100'}} onChange={handleInputChange}>
            </input>
            </td></tr><br/> <br/> <br/>
            <tr><td><b>
            Enter your gender :</b></td></tr> <tr>
            <td><input type='text' name='gender' style= {{width: "100px",important:"all",size:'100'}} onChange={handleInputChange}></input>
            </td></tr><br/> <br/> <br/>
            <tr><td><b>
            Enter your occupation :</b></td></tr> <tr>
            <td><input type='text' name='occupation' style= {{width: "100px",important:"all",size:'100'}} onChange={handleInputChange}></input>
            </td></tr><br/> <br/> <br/>
            <tr><td colspan='2'>
            <input type='submit' name='submit' class='btnbuy' style= {{width: "600px",important:'all'}} onChange={handleInputChange}></input>
            </td></tr>
            </table>
        </div></div></div>
      </form>
    </div>
    </>
  );
}

