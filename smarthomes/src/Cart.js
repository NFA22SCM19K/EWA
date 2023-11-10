import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";

export default function Cart(cartItems){

  console.log(cartItems)


  const items = cartItems.cartItems;
  console.log(items);
  let total =0;

  items.map((item)=>{
    total = total + parseFloat(item.price)
    console.log(item.name,item.price)
  })


  return(<>
   <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id = 'content'>

          <h2>hello</h2>
          <div>
           {items.map((item)=> (
            <div>
              <h1> {item.name} - {item.price}</h1>
            </div>
           ))}
          </div>
          <h4> Total is {total}</h4>
        </div>
    </div>
  </>);
}