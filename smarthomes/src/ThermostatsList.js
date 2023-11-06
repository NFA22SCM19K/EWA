import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import './style.css';
import Product from "./Product";
export default function ThermostatsList(){
    return(
        <>
        <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id='content'>
            <div className='post'>
                <h2 class='title meta'>
		            <a style={{fontSize: "24px"}}>Thermostats</a>
                </h2>
                <div className='entry'>
                <table id='bestseller'>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "googlenest" Name="Google - Nest Learning Smart Wifi Thermostat" Price="249.99" Type='thermostats' Image="google_nest_learning_smart_wifi.jpg" Desc='It has feature of Control from anywhere with the app, and also has Heating and cooling system care.' Maker='Google' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "echobeelite" Name="Echobee3 Lite Smart Thermostat" Price="146.88" Type='thermostats' Image="echobee3_Lite_Smart.jpg" Desc='It can Automatically pause your heating or cooling and can Add SmartSensor to manage hot or cold spots.' Maker='Echobee' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "mysasmart" Name ='Mysa Smart Thermostat' Price="139.99" Type='thermostats' Image="Mysa_Smart_Thermostat.png" Desc='It is mainly used for ductless mini-split heat pumps + portable and window AC and can be controlled from anywhere with FREE mobile app.' Maker='Mysa' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "amazonsmart" Name='Amazon Smart Thermostat' Price="79.99" Type='thermostats' Image="Amazon_Smart_Thermostat.jpg" Desc='It has smart upgrade and automatic control.' Maker='Amazon' />
                            </div>
                        </td>
                    </tr>
                </table>
               </div>
            </div>
        </div>
        </div>
        </>
    );
}