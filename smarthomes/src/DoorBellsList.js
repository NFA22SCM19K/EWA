import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import Product from "./Product";
import './style.css';
import { useLocation } from "react-router-dom";
export default function DoorBellsList(){
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
                                <Product Id = "ringwired" Name="Ring - Wi-Fi Video Doorbell - Wired - Black" Price="64.99" Type='doorbells' Image="Ring_WiFi_VideoDoorbell_Wired_Black.jpg" Desc='It has a Camera Resolution of 1920 x 1080 and Works With Amazon Alexa, Ring' Maker='Ring' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "ringwireless" Name="Ring 1080p Wireless Video Doorbell" Price="99.99" Type='doorbells' Image="ring2.jpg" Desc=' It has a Camera Resolution of 1080 x 1440 and a Image Sensor Type of PIR Sensor and is compatible With Amazon Alexa.' Maker='Ring' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "googlenest" Name="Google - Nest Doorbell Wired (2nd Generation)" Price="179.99" Type='doorbells' Image="Google_Nest_Doorbell_Wired.jpg" Desc='It has a Camera Resolution of 960 x 1280 and Works With Amazon Alexa, Google Assistant and Nest.' Maker='Google' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "arlowired" Name="Arlo Essential 1080p Wired Video Doorbell" Price="129.99" Type='doorbells' Image="Arlo_wired_video_doorbell.png" Desc='It has a Camera Resolution of 1536 x 1536 and Works With Amazon Alexa, Google Assistant, SmartThings.' Maker='Arlo' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "arlowireless" Name="Arlo - Essential Wireless Video Doorbell" Price="149.99" Type='doorbells' Image="Arlo_wireless_video_doorbell.png" Desc='It has a Camera Resolution of 1536 x 1536 and has a Single Motion Sensor, 110 degree horizontal.' Maker='Arlo' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                            <Product Id = "blinkvideo" Name="Blink Video Doorbell" Price="59.99" Type='doorbells' Image="blink.jpg" Desc='It has 135° horizontal, 80° vertical field of view and can record and view in 1080p HD video during the day and with infrared HD night vision after dark.' Maker='Blink' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "arlo")
        {
            return(
                <>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "arlowired" Name="Arlo Essential 1080p Wired Video Doorbell" Price="129.99" Type='doorbells' Image="Arlo_wired_video_doorbell.png" Desc='It has a Camera Resolution of 1536 x 1536 and Works With Amazon Alexa, Google Assistant, SmartThings.' Maker='Arlo' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "arlowireless" Name="Arlo - Essential Wireless Video Doorbell" Price="149.99" Type='doorbells' Image="Arlo_wireless_video_doorbell.png" Desc='It has a Camera Resolution of 1536 x 1536 and has a Single Motion Sensor, 110 degree horizontal.' Maker='Arlo' />
                            </div>
                        </td>
                    </tr>
                </>
            );
        }
        else if(CategoryName === "blink")
        {
            return(
                <>
                <tr>
                <td>
                            <div id='shop_item'>
                            <Product Id = "blinkvideo" Name="Blink Video Doorbell" Price="59.99" Type='doorbells' Image="blink.jpg" Desc='It has 135° horizontal, 80° vertical field of view and can record and view in 1080p HD video during the day and with infrared HD night vision after dark.' Maker='Blink' />
                            </div>
                        </td>
                </tr>
                </>
            );
        }
        else if(CategoryName === "google")
        {
            return(
                <>
                <tr>
                    <td>
                            <div id='shop_item'>
                                <Product Id = "googlenest" Name="Google - Nest Doorbell Wired (2nd Generation)" Price="179.99" Type='doorbells' Image="Google_Nest_Doorbell_Wired.jpg" Desc='It has a Camera Resolution of 960 x 1280 and Works With Amazon Alexa, Google Assistant and Nest.' Maker='Google' />
                            </div>
                        </td>
                </tr>
                </>
            );
        }
        else if(CategoryName === "ring")
        {
            return(
                <>
            <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "ringwired" Name="Ring - Wi-Fi Video Doorbell - Wired - Black" Price="64.99" Type='doorbells' Image="Ring_WiFi_VideoDoorbell_Wired_Black.jpg" Desc='It has a Camera Resolution of 1920 x 1080 and Works With Amazon Alexa, Ring' Maker='Ring' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "ringwireless" Name="Ring 1080p Wireless Video Doorbell" Price="99.99" Type='doorbells' Image="ring2.jpg" Desc=' It has a Camera Resolution of 1080 x 1440 and a Image Sensor Type of PIR Sensor and is compatible With Amazon Alexa.' Maker='Ring' />
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
		            <a style={{fontSize: "24px"}}>Door Bells</a>
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