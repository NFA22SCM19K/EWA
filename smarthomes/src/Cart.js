import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import { useState } from "react";
import { useUser } from "./UserContext";

export default function Cart(cartItems){

 
  const {user} = useUser();
  let ID = 0
  const { username, usertype } = user || {};

  const [items,setItems] = useState(cartItems.cartItems)
  const [display,setDisplay] = useState(1)  
  const [orderId,setOrderID] = useState(0)  
  
  let total =0;

  


  items.map((item)=>{
    total = total + parseFloat(item.price)
  })



  function removeItem(item) {
    
    console.log("removeiscalled")

    const temp = items.filter((cartItem)=> !(cartItem === item))

    console.log(temp)

    setItems(temp)
    cartItems.removeItem(item)

  };


  function storedPaymentDetails(){

    const storedPaymentDetails = JSON.parse(localStorage.getItem('PaymentDetails'));

    console.log(storedPaymentDetails);

    let tempOrder = storedPaymentDetails.orders;
    console.log(tempOrder)

    let orderId = tempOrder[tempOrder.length -1].orderid + 1;

    let orderItems = items.map((i) =>({'userName':username,'orderName':i.name,'orderPrice':i.price}))
    tempOrder.push({'orderid' : orderId, 'items':orderItems})

    console.log("added payment items")
    console.log(storedPaymentDetails)

    localStorage.setItem('PaymentDetails', JSON.stringify(storedPaymentDetails))
    
    setOrderID(orderId)

    return orderId;

  }

  
           

  return(<>
   <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id = 'content'>
        {display ===1 && (
        
          <div style={{padding:"5px"}}>

            <h2 class='title meta' style={{color:'red', alignSelf:'center', fontSize:'24px'}}><center>
           
           Cart
           </center>
           </h2>

          <div >
           {items.map((item)=> (
            <div>
               <p> {item.name} - {item.price} </p>
               <button onClick={()=>{removeItem(item)}}>Remove Item</button>
               
            </div>
           ))} 
          </div>

          <div>

          </div>
          <h4> Total is {total}</h4>

          
          <p> Click to Add warranty </p>
          <button>Apply warranty </button>
          <br/>
          <p> </p>
          <p><button onClick={()=>{ setDisplay(2) }}> CheckOut</button></p>
          
    
        </div>)}
        </div>

        {/* order page n store in payment details*/}
        <div style={{padding:"5px"}}>
          { display === 2 && (<>

           <h2 class='title meta' style={{color:'red', alignSelf:'center'}}><center>
           
           Order
           </center>
           </h2>
          
            <table class='gridtable'>
              <tr><td>Customer Name</td><td>UserName</td></tr>
              {items.map((item)=> (
            <tr>
               <td> {item.name}</td> <td> {item.price} </td>
            </tr>
           ))} 

            </table>


            <table>
              <tr>
                <td>
                  First Name 
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Last Name 
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Address 1
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Address 2(Optional)
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  City
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  State
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  ZipCode
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                  Phone Number 
                </td>
                <td>
                 <input type="text"/>
                </td>
              </tr>

              <tr><td>Pick Up or Delivery</td></tr>
              <tr>
                <td>
                  <input type='radio' id='delivery' name='order' value='Delivery'/>
                  <label for='delivery'>Delivery</label>
                </td>
                <td>
                  <input type='radio' id='pickup' name='order' value='Pickup'/>
                  <label for='pickup'>Pickup</label>
                </td>
              </tr>
              <tr>
                <td>
                  Credit Card Number
                </td>
                <td>
                  <input type="text"/>
                </td>
              </tr>
              <tr>
                <td>
                <p>For instore pickup, please select any one of the following store locations:</p>
                </td>
                <td>
                  <select name='storelocation' id='storelocation'>
                    <option value='60005'>Arlington Heights 60005</option>
                    <option value='60007'>Elk Groov Village 60007</option>
                    <option value='60016'>Des Plaines 60016</option>
                    <option value='60026'>Glenview 60026</option>
                    <option value='60047'>Lake Zurich 60047</option>
                    <option value='60134'>Geneva 60134</option>
                    <option value='60423'>Frankfort 60423</option>
                    <option value='60536'>Millbrook 60536</option>
                    <option value='60564'>Naperville 60564</option>
                    <option value='60606'>Chicago 60606</option>
                    <option value='60616'>Chicago 60616</option>

                  </select>
                </td>
              </tr>

            </table>
            <button onClick={()=> {storedPaymentDetails(); setDisplay(3);}}>Make Payment</button>

          
          </>)}

        </div>

        <div>

          { display === 3 && (<>
            <h2 class='title meta' style={{color:'red', alignSelf:'center'}}><center>
           
           Order
           </center>
           </h2>

            <h2 class='title meta' style={{color:'black', alignSelf:'center'}}>Your Order is placed 
           </h2>
           <h2 class='title meta' style={{color:'black', alignSelf:'center'}}>Your Order ID is {orderId}
           </h2>
           <h2 class='title meta' style={{color:'black', alignSelf:'center'}}>Delivery/Pick-Up Date is 11/18/2023 
           </h2>
           </>)}

        </div>



    </div>
  </>);
}