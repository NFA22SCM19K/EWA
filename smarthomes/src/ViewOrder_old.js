import './style.css';
import Header from './Header';
import LeftNavigationBar from './LeftNavigationBar';
import { useLocation } from "react-router-dom";
import {React, useState} from 'react';

export default function ViewOrder(paymentDetails){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const Order = queryParams.get("Order");
    const orderId = queryParams.get("orderId");
    const orderName = queryParams.get("orderName");
    //let orderId = 1
    const userNameToSearch = "user1"
    const orderNameToCancel = "Echo Dot (5th Gen, 2022 release) with clock"
    const userNameToCancel = "test2"

    const [orderIdVal, setOrderIdVal] = useState(null);
    const [isFormVisible, setFormVisibility] = useState(true);

    function cancelItem(e){
        e.preventDefault();
        console.log(paymentDetails)
        {Order !== null && Order === "CancelOrder" && (
            <>
              {orderName !== null ? (
                (() => {
                    
                  const orders = paymentDetails.paymentDetails[orderId];
                  const updatedOrders = orders.filter(
                    (order) =>
                      order.orderName !== orderNameToCancel &&
                      order.userName !== userNameToCancel
                  );
                  if (updatedOrders.length < orders.length) {
                    // Order found and removed
                    paymentDetails.paymentDetails[orderId] = updatedOrders;
                    if (updatedOrders.length === 0) {
                      // No more orders for the orderId, remove the orderId
                      delete paymentDetails.paymentDetails[orderId];
                    }
                    <h4 style={{ color: "red" }}>
                      Your Order is Cancelled
                    </h4>
                    {console.log(paymentDetails)}
                  }
                })()
              ) : (
                <h4 style={{ color: "red" }}>
                  Please select any product
                </h4>
              )}
            </>
          )}
          setFormVisibility(false);
    }

    return(
        <>
        <div className="Container">
            <Header />
            <LeftNavigationBar />
            {isFormVisible && (
            <form name="ViewOrder" action="ViewOrder" method="get" >
            <div id='content'><div className='post'><h2 className='title meta'>
            <a style={{fontSize: "24px"}}>Order</a>
            </h2><div className='entry'>
            { Order === null && (
                <table align='center'><tr><td>Enter OrderNo &nbsp;&nbsp;<input name='orderId' type='text'/></td>
                <td><input type='submit' name='Order' value='ViewOrder' className='btnbuy'/></td></tr></table>
            )}
            
            {Order !== null && Order === "ViewOrder" && (
			    <>
                {orderId !== null && orderId !== "" && (
                  <>
				    <input type='hidden' name='orderId' value={orderId}/>
                    {paymentDetails.paymentDetails[orderId] && (
                    <>
                        {Object.values(paymentDetails.paymentDetails[orderId])
                            .filter(
                              (product) =>
                                product.userName === userNameToSearch
                            )
                            .length > 0 ? (
                            <table className="gridtable">
                              <tr>
                                <td></td><td>OrderId:</td>
                                <td>UserName:</td>
                                <td>productOrdered:</td>
                                <td>productPrice:</td>
                              </tr>
                              {paymentDetails.paymentDetails[orderId].map((order) => (
                                <tr key={order.userName}>
                                  <td>
                                    <input type="radio" name="orderName" value={order.orderName}/>
                                  </td>
                                  <td>{orderId}</td>
                                  <td>{order.userName}</td>
                                  <td>{order.orderName}</td>
                                  <td>Price:{order.orderPrice}</td>
                                  <td>
                                    <input type="submit" name="Order" value="CancelOrder" className="btnbuy" />
                                  </td>
                                </tr>
                              ))}
                            </table>
                          ) : (
                            <h4 style={{ color: "red" }}>
                              You have not placed any order with this order id
                            </h4>
                          )}
                        </>
                      )}
                    </>
                  )}
                  {!orderId || orderId === "" && (
                    <h4 style={{ color: "red" }}>
                      Please enter the valid order number
                    </h4>
                  )}
                </>
              )}
            {Order !== null && Order === "CancelOrder" && (
                <>
                  {orderName !== null ? (
                    (() => {
                        
                      const orders = paymentDetails.paymentDetails[orderId];
                      const updatedOrders = orders.filter(
                        (order) =>
                          order.orderName !== orderNameToCancel &&
                          order.userName !== userNameToCancel
                      );
                      if (updatedOrders.length < orders.length) {
                        // Order found and removed
                        paymentDetails.paymentDetails[orderId] = updatedOrders;
                        if (updatedOrders.length === 0) {
                          // No more orders for the orderId, remove the orderId
                          delete paymentDetails.paymentDetails[orderId];
                        }
                        {console.log(paymentDetails)}
                        <h4>
                          Your Order is Cancelled
                        </h4>
                      }
                    })()
                  ) : (
                    <h4 style={{ color: "red" }}>
                      Please select any product
                    </h4>
                  )}
                </>
              )}
            </div>
            </div>
            </div>
            </form>
            )}
        </div>
        </>
    );
}