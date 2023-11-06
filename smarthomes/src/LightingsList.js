import Header from "./Header";
import LeftNavigationBar from "./LeftNavigationBar";
import './style.css';
import Product from "./Product";
export default function LightingsList(){
    return(
        <>
        <div className="Container">
        <Header />
        <LeftNavigationBar />
        <div id='content'>
            <div className='post'>
                <h2 class='title meta'>
		            <a style={{fontSize: "24px"}}>Lightings</a>
                </h2>
                <div className='entry'>
                <table id='bestseller'>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "Philipslight" Name="Philips Hue Fair Ceiling Light" Price="269.99" Type='lightings' Image="Philips_Hue_Fair_Ceiling_light.jpg" Desc='It has Zigbee Light Link wireless protocol	and Estimated Lifetime of25,000 hours / 50,000 switching cycles.' Maker='Philips' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "gowinglight" Name="Gowing Smart Ceiling Light Fixture Flush Mount LED" Price="48" Type='lightings' Image="gowing_ceiling_fixture_bedroom.jpg" Desc='It has a Ceiling Mount Switch Installation Type and has a Luminous Flux of 2400 Lumen.' Maker='Gowing' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "et2hive" Name ='ET2 Hive 8" Wide Mini Pendant' Price="118" Type='lightings' Image="ET2_Hive_LED.jpg" Desc='It is made of Concrete and has a Fixture Height of 7" and Lumens of 490.' Maker='ET2' />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "et2icorona" Name='ET2 iCorona 18" Wide LED Flush Mount Drum Smart Ceiling Fixture - 277' Price="898" Type='lightings' Image="ET2_2.jpg" Desc='It has Lumens of 2400 and a color Rendering Index of 90 CRI.' Maker='ET2' />
                            </div>
                        </td>
                        <td>
                            <div id='shop_item'>
                                <Product Id = "et2chimes" Name='ET2 Chimes 15" Tall LED Bathroom Sconce' Price="478" Type='lightings' Image="ET2_3.jpg" Desc='It is Constructed from steel and includes a metal shade. It also has a integrated LED lighting.' Maker='ET2' />
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