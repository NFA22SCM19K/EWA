import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import './style.css';
import Product from "./Product";
import { useLocation } from "react-router-dom";
export default function SpeakersList(){
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
                                <Product Id = "echodot" Name="Echo Dot (5th Gen, 2022 release) with clock" Price="59.99" Type='speakers' Image="echodot.jpg" Desc='It has a LED Display and Smart Home Device Compatibility with WiFi, Bluetooth Low Energy Mesh, and Matter.' Maker='Amazon' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "bosespeaker" Name="Bose Home Speaker 500: Smart Bluetooth Speaker" Price="379.99" Type='speakers' Image="bose.jpg" Desc='It has Built-in Alexa and bose music app and also bose simplesync technology.' Maker='Bose' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "sonosone" Name="Sonos One" Price="219" Type='speakers' Image="sonos_one.jpg" Desc='It has features of voice enabled, touch controls and humidity resistant.' Maker='Sonos' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "applemini" Name="Apple HomePod mini" Price="99.99" Type='speakers' Image="homepod_mini.jpg" Desc='It has Surprising sound for its size and five colors to brighten up any space. Siri is the familys intelligent assistant.' Maker='Apple' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "echodot2" Name="Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa2" Price="38.98" Type='speakers' Image="echodot_2.jpg" Desc='It is a Smart speaker with microphone of 4 microphones array.' Maker='Amazon' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "applehomepod" Name="Apple Homepod" Price="299.99" Type='speakers' Image="apple_2.png" Desc='It has 4-inch high-excursion woofer with an Array of five horn-loaded tweeters, each tweeter with its own neodymium magnet.' Maker='Apple' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "amazon")
        {
            return(
                <>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "echodot" Name="Echo Dot (5th Gen, 2022 release) with clock" Price="59.99" Type='speakers' Image="echodot.jpg" Desc='It has a LED Display and Smart Home Device Compatibility with WiFi, Bluetooth Low Energy Mesh, and Matter.' Maker='Amazon' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "echodot2" Name="Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa2" Price="38.98" Type='speakers' Image="echodot_2.jpg" Desc='It is a Smart speaker with microphone of 4 microphones array.' Maker='Amazon' />
                            </div>
                        </td>
                     </tr>
                </>
            );
        }
        else if(CategoryName === "bose")
        {
            return(
                <>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "bosespeaker" Name="Bose Home Speaker 500: Smart Bluetooth Speaker" Price="379.99" Type='speakers' Image="bose.jpg" Desc='It has Built-in Alexa and bose music app and also bose simplesync technology.' Maker='Bose' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "apple")
        {
            return(
                <>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "applemini" Name="Apple HomePod mini" Price="99.99" Type='speakers' Image="homepod_mini.jpg" Desc='It has Surprising sound for its size and five colors to brighten up any space. Siri is the familys intelligent assistant.' Maker='Apple' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "applehomepod" Name="Apple Homepod" Price="299.99" Type='speakers' Image="apple_2.png" Desc='It has 4-inch high-excursion woofer with an Array of five horn-loaded tweeters, each tweeter with its own neodymium magnet.' Maker='Apple' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "sonos")
        {
            return(
                <>
                    <tr>
                    <td>
                            <div id='shop_item'>
                                <Product Id = "sonosone" Name="Sonos One" Price="219" Type='speakers' Image="sonos_one.jpg" Desc='It has features of voice enabled, touch controls and humidity resistant.' Maker='Sonos' />
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
                <h2 class='title meta'>
		            <a style={{fontSize: "24px"}}>Speakers</a>
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