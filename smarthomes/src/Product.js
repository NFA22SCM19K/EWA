import './style.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function Product(product){

		const history = useHistory()

    return (
        <>
			<h3>{product.Name}</h3>
			<strong>${product.Price}</strong>
			<ul>
                <li id='item'><img src={'images/' + product.Type + '/' + product.Image} alt='' /></li>
                <li>
                    <form onSubmit={(e)=>{
											
											
											const item = {'name':product.Name,'price':product.Price};
											product.addItem(item);
											console.log("submit called");
											e.preventDefault();
											history.push('Cart');


										}}>
                        <input type='hidden' name='name' value={product.Name}/>
					    <input type='hidden' name='type' value={product.Type}/>
					    <input type='hidden' name='maker' value='"+CategoryName+"'/>
					    <input type='hidden' name='access' value=''/>
					    <div className='btn-group'>
					        <input type='submit' className='btn btn-success' value='Buy Now'/>
					    </div>
                    </form>
                </li>
                <li>
                    <form method='post' action='ProductDetailsPage'>
					    <input type='hidden' name='name' value={product.Name}/>
					    <input type='hidden' name='id' value=''/>
					    <input type='hidden' name='type' value={product.Type} />
					    <input type='hidden' name='maker' value={product.Maker}/>
					    <input type='hidden' name='price' value={product.Price}/>
					    <input type='hidden' name='imgAdd' value={product.Image}/>
					    <input type='hidden' name='des' value={product.Desc}/>
					    <input type='hidden' name='access' value=''/>
					    <div className ='btn-group'>
						    <input type='submit' className='btn btn-default' value='View Product'/>
					    </div>
					</form>
                </li>
            </ul>
        </>
    );
}