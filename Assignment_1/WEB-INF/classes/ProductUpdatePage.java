import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ProductUpdatePage")

public class ProductUpdatePage extends HttpServlet{
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
		response.setContentType("text/html");
		PrintWriter out =response.getWriter();
		HttpSession session= request.getSession();
		Utilities util=new Utilities(request,out);
		
		util.printHtml("Header1.html");
		out.println("<div class='row'><a style='font-size: 24px;''>Update Product</a> ");
		out.println("<form action= >");
		out.println("<div class='form-group'><label>Select Product:</label><select class='form-control' name='pcategory'><option value='ringwired' selected>Ring - Wi-Fi Video Doorbell - Wired - Black</option><option value='ringwireless'>Ring 1080p Wireless Video Doorbell</option><option value='googlenest'>Google - Nest Doorbell Wired (2nd Generation)</option><option value='arlowired'>Arlo Essential 1080p Wired Video Doorbell</option><option value='arlowireless'>Arlo - Essential Wireless Video Doorbell</option><option value='blinkvideo'>Blink Video Doorbell</option><option value='Blink Video Doorbell'>Yale Assure Lock 2 Keypad with Bluetooth</option><option value='nestxyale'>Nest x Yale Lock with Nest Connect</option><option value='simplisafesmartlock'>SimpliSafe - Smart Lock Wi-Fi</option><option value='philipslock'>Philips Smart Lock</option><option value='yaleassure'>YALE ASSURE YRL226-ZW2</option><option value='Philipslight'>Philips Hue Fair Ceiling Light</option><option value='gowinglight'>Gowing Smart Ceiling Light Fixture Flush Mount LED</option><option value='et2hive'>ET2 Hive 8 inch Wide Mini Pendant</option><option value='et2icorona'>ET2 iCorona 18 inch Wide LED Flush Mount Drum Smart Ceiling Fixture - 277</option><option value='et2chimes'>ET2 Chimes 15 inch Tall LED Bathroom Sconce</option><option value='echodot'>Echo Dot (5th Gen, 2022 release) with clock</option><option value='bosespeaker'>Bose Home Speaker 500: Smart Bluetooth Speaker</option><option value='sonosone'>Sonos One</option><option value='applemini'>Apple HomePod mini</option><option value='echodot2'>Amazon - Echo Dot (3rd Gen) - Smart Speaker with Alexa</option><option value='applehomepod'>Apple Homepod</option><option value='googlenest'>Google - Nest Learning Smart Wifi Thermostat</option><option value='echobeelite'>echobee3 Lite Smart Thermostat</option><option value='mysasmart'>Mysa Smart Thermostat</option><option value='amazonsmart'>Amazon_Smart_Thermostat.jpeg</option></select></div>");
		out.println("<div class='form-group'><label>Product Name:</label><input type='text' class='form-control' name='pname' placeholder='Enter Product Name'  /></div>");
		out.println("<div class='form-group'><label>Product Description:</label></br><textarea class='form-control' placeholder='Enter Product Description' name='pdescription' ></textarea></div>");
		out.println("<div class='form-group'><label>Product Color:</label></br><input class='form-control' type='text' placeholder='Enter Product Color' name='pcolor'  \"></div>");
		out.println("<div class='form-group'><label>Product Price:</label><input class='form-control' type='text' placeholder='Enter Product Price' name='pprice' \"></div>");
		out.println("<div class='form-group'><label>Enter Product Image Name:</label></br><input class='form-control' type='text'  placeholder='Enter Product Image Name(with Extension)' name='pimage'  ></div>");
		out.println("<div class='form-group'><label>Product Condition:</label></br><input class='form-control' type='text' placeholder='Enter Product Condition' name='pcondition'  \"></div>");
		out.println("<div class='form-group'><label>Product Company:</label></br><input class='form-control' type='text' placeholder='Enter Product Company' name='pcompany'  \"></div>");
		out.println("<div class='form-group'><label>Select Category:</label></br><select class='form-control' name='pcategory'><option value='doorbells' selected>Smart DoorBells</option><option value='doorlocks'>Smart DoorLocks</option><option value='speakers'>Smart Speakers</option><option value='lightings'>Smart Lightings</option><option value='thermostats'>Smart Thermostats</option></select></div>");
		//out.println("<input type='hidden' name='updateMsg' value='Product Updated'>");
		out.println("</form></div>");
		out.println("<button  data-toggle='modal' data-target='#myModal' class='btn btn-primary'>Update Product</button></div>");
		out.println("<div id='myModal' class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'> <button type='button' class='close' data-dismiss='modal'>&times;</button> <h4 class='modal-title'>Product Status</h4> </div>");  
		out.println("<div class='modal-body'><p>Product Updated Successfully!.</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");
      
  

		// util.printHtml("Footer.html");
		
	}
}