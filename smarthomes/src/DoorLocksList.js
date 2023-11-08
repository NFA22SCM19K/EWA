import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import './style.css';
import Product from "./Product";
import { useLocation } from "react-router-dom";
export default function DoorLocksList(){
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const CategoryName = queryParams.get("maker");
    function renderContent(){
        if(CategoryName === null )
        {
            return(
                <>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "yaleassure1" Name="Yale Assure Lock 2 Keypad with Bluetooth" Price="159.99" Type='doorlocks' Image="yale_assure_lock2.jpg" Desc='It has Touchscreen Keypad and no locksmith is needed. It provided Key-free access.' Maker='Yale' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "nestxyale" Name="Nest x Yale Lock with Nest Connect" Price="279.00" Type='doorlocks' Image="nestx_yale_lock.jpg" Desc='It is Tamper-proof key free and connected deadbolt lock with a Remote control from the Nest app.' Maker='Yale' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "simplisafesmartlock" Name="SimpliSafe-Smart Lock Wi-Fi" Price="119.99" Type='doorlocks' Image="simplisafe_smartlock.jpg" Desc='It works with SimpliSafe security system and is compatible with smart home devices.' Maker='SimpliSafe' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "philipslock" Name="Philips Smart Lock" Price="179.99" Type='doorlocks' Image="philips_smart_lock.jpg" Desc='The Safety provided is standard and has ultra-long battery life and it is Simple sharing.' Maker='Philips' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "yaleassure" Name="YALE ASSURE YRL226-ZW2" Price="271.94" Type='doorlocks' Image="yale2.jpg" Desc='It has touchscreen keypad with backlit numbers that wont wear off and Pushbutton model is available with Weather Protection Gasket.' Maker='Yale' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "yale")
        {
            return(
                <>
                     <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "yaleassure1" Name="Yale Assure Lock 2 Keypad with Bluetooth" Price="159.99" Type='doorlocks' Image="yale_assure_lock2.jpg" Desc='It has Touchscreen Keypad and no locksmith is needed. It provided Key-free access.' Maker='Yale' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "nestxyale" Name="Nest x Yale Lock with Nest Connect" Price="279.00" Type='doorlocks' Image="nestx_yale_lock.jpg" Desc='It is Tamper-proof key free and connected deadbolt lock with a Remote control from the Nest app.' Maker='Yale' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "yaleassure" Name="YALE ASSURE YRL226-ZW2" Price="271.94" Type='doorlocks' Image="yale2.jpg" Desc='It has touchscreen keypad with backlit numbers that wont wear off and Pushbutton model is available with Weather Protection Gasket.' Maker='Yale' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "simplisafe")
        {
            return(
                <>
                    <tr>
                    <td>
                            <div id='shop_item'>
                                <Product Id = "simplisafesmartlock" Name="SimpliSafe-Smart Lock Wi-Fi" Price="119.99" Type='doorlocks' Image="simplisafe_smartlock.jpg" Desc='It works with SimpliSafe security system and is compatible with smart home devices.' Maker='SimpliSafe' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "philips")
        {
            return(
                <>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "philipslock" Name="Philips Smart Lock" Price="179.99" Type='doorlocks' Image="philips_smart_lock.jpg" Desc='The Safety provided is standard and has ultra-long battery life and it is Simple sharing.' Maker='Philips' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
    }
    
    return(
        <>
        <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id='content'>
            <div className='post'>
                <h2 className='title meta'>
		            <a style={{fontSize: "24px"}}>Door Locks</a>
                </h2>
                <div className='entry'>
                <table id='bestseller'>
                    {renderContent()}
                </table>
               </div>
            </div>
        </div>
        </div>
        </>
    );
}