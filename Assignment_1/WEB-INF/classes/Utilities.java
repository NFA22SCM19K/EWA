import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;

@WebServlet("/Utilities")

/* 
	Utilities class contains class variables of type HttpServletRequest, PrintWriter,String and HttpSession.

	Utilities class has a constructor with  HttpServletRequest, PrintWriter variables.
	  
*/

public class Utilities extends HttpServlet{
	HttpServletRequest req;
	PrintWriter pw;
	String url;
	HttpSession session; 
	public Utilities(HttpServletRequest req, PrintWriter pw) {
		this.req = req;
		this.pw = pw;
		this.url = this.getFullURL();
		this.session = req.getSession(true);
	}



	/*  Printhtml Function gets the html file name as function Argument, 
		If the html file name is Header.html then It gets Username from session variables.
		Account ,Cart Information ang Logout Options are Displayed*/

	public void printHtml(String file) {
		String result = HtmlToString(file);
		//to print the right navigation in header of username cart and logout etc
		if (file == "Header.html") {
				result=result+"<div style='float: right;' ><ul class='nav navbar-nav'>";
			if (session.getAttribute("username")!=null){
				String username = session.getAttribute("username").toString();
				username = Character.toUpperCase(username.charAt(0)) + username.substring(1);
				result = result + "<li><a href='ViewOrder'><span class='glyphicon'>ViewOrder</span></a></li>"
						+ "<li><a><span class='glyphicon'>Hello,"+username+"</span></a></li>"
						+ "<li><a href='Account'><span class='glyphicon'>Account</span></a></li>"
						+ "<li><a href='Logout'><span class='glyphicon'>Logout</span></a></li>"; //added now
				
				
				
			}
			else
				result = result +"<li><a href='ViewOrder'><span class='glyphicon'>View Order</span></a></li>"+ "<li><a href='Login'><span class='glyphicon'>Login</span></a></li>";
				result = result +"<li><a href='Cart'><span class='glyphicon'>Cart("+CartCount()+")</span></a></li></ul></div></nav>";
				result = result +"<div class='search'><input type='text' class='form-control' placeholder='Search Your Products Here...'></div>";
				pw.print(result);
		} else
				pw.print(result);
	}
	

	/*  getFullURL Function - Reconstructs the URL user request  */

	public String getFullURL() {
		String scheme = req.getScheme();
		String serverName = req.getServerName();
		int serverPort = req.getServerPort();
		String contextPath = req.getContextPath();
		StringBuffer url = new StringBuffer();
		url.append(scheme).append("://").append(serverName);

		if ((serverPort != 80) && (serverPort != 443)) {
			url.append(":").append(serverPort);
		}
		url.append(contextPath);
		url.append("/");
		return url.toString();
	}

	/*  HtmlToString - Gets the Html file and Converts into String and returns the String.*/
	public String HtmlToString(String file) {
		String result = null;
		try {
			String webPage = url + file;
			URL url = new URL(webPage);
			URLConnection urlConnection = url.openConnection();
			InputStream is = urlConnection.getInputStream();
			InputStreamReader isr = new InputStreamReader(is);

			int numCharsRead;
			char[] charArray = new char[1024];
			StringBuffer sb = new StringBuffer();
			while ((numCharsRead = isr.read(charArray)) > 0) {
				sb.append(charArray, 0, numCharsRead);
			}
			result = sb.toString();
		} 
		catch (Exception e) {
		}
		return result;
	} 

	/*  logout Function removes the username , usertype attributes from the session variable*/

	public void logout(){
		session.removeAttribute("username");
		session.removeAttribute("usertype");
	}
	
	/*  logout Function checks whether the user is loggedIn or Not*/

	public boolean isLoggedin(){
		if (session.getAttribute("username")==null)
			return false;
		return true;
	}

	/*  username Function returns the username from the session variable.*/
	
	public String username(){
		if (session.getAttribute("username")!=null)
			return session.getAttribute("username").toString();
		return null;
	}
	
	/*  usertype Function returns the usertype from the session variable.*/
	public String usertype(){
		if (session.getAttribute("usertype")!=null)
			return session.getAttribute("usertype").toString();
		return null;
	}
	
	/*  getUser Function checks the user is a customer or retailer or manager and returns the user class variable.*/
	public User getUser(){
		String usertype = usertype();
		HashMap<String, User> hm=new HashMap<String, User>();
		String TOMCAT_HOME = System.getProperty("catalina.home");
			try
			{		
				FileInputStream fileInputStream=new FileInputStream(new File(TOMCAT_HOME+"\\webapps\\Assignment_1\\UserDetails.txt"));
				ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);	      
				hm= (HashMap)objectInputStream.readObject();
			}
			catch(Exception e)
			{
			}	
		User user = hm.get(username());
		return user;
	}
	
	/*  getCustomerOrders Function gets  the Orders for the user*/
	public ArrayList<OrderItem> getCustomerOrders(){
		ArrayList<OrderItem> order = new ArrayList<OrderItem>(); 
		if(OrdersHashMap.orders.containsKey(username()))
			order= OrdersHashMap.orders.get(username());
		return order;
	}

	/*  getOrdersPaymentSize Function gets  the size of OrderPayment */
	public int getOrderPaymentSize(){
		HashMap<Integer, ArrayList<OrderPayment>> orderPayments = new HashMap<Integer, ArrayList<OrderPayment>>();
		String TOMCAT_HOME = System.getProperty("catalina.home");
			try
			{
				FileInputStream fileInputStream = new FileInputStream(new File(TOMCAT_HOME+"\\webapps\\Assignment_1\\PaymentDetails.txt"));
				ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);	      
				orderPayments = (HashMap)objectInputStream.readObject();
			}
			catch(Exception e)
			{
			
			}
			int size=0;
			for(Map.Entry<Integer, ArrayList<OrderPayment>> entry : orderPayments.entrySet()){
					 size=size + 1;
					 
			}
			return size;		
	}

	/*  CartCount Function gets  the size of User Orders*/
	public int CartCount(){
		if(isLoggedin())
		return getCustomerOrders().size();
		return 0;
	}

	public OrderItem CartRemove(int i){
		return getCustomerOrders().remove(i);
		
	}
	
	/* StoreProduct Function stores the Purchased product in Orders HashMap according to the User Names.*/

	public void storeProduct(String name,String type,String maker, String acc){
		if(!OrdersHashMap.orders.containsKey(username())){	
			ArrayList<OrderItem> arr = new ArrayList<OrderItem>();
			OrdersHashMap.orders.put(username(), arr);
		}
		ArrayList<OrderItem> orderItems = OrdersHashMap.orders.get(username());
		if(type.equals("doorbells")){
			DoorBells doorbell;
			doorbell = SaxParserDataStore.doorbells.get(name);
			OrderItem orderitem = new OrderItem(doorbell.getName(), doorbell.getPrice(), doorbell.getImage(), doorbell.getRetailer(), doorbell.getDescription());
			orderItems.add(orderitem);
		}
		if(type.equals("doorlocks")){
			DoorLocks doorlock = null;
			doorlock = SaxParserDataStore.doorlocks.get(name);
			OrderItem orderitem = new OrderItem(doorlock.getName(), doorlock.getPrice(), doorlock.getImage(), doorlock.getRetailer(), doorlock.getDescription());
			orderItems.add(orderitem);
		}
		if(type.equals("lightings")){
			Lightings lighting = null;
			lighting = SaxParserDataStore.lightings.get(name);
			OrderItem orderitem = new OrderItem(lighting.getName(), lighting.getPrice(), lighting.getImage(), lighting.getRetailer(), lighting.getDescription());
			orderItems.add(orderitem);
		}
		if(type.equals("speaker")){
			Speakers speaker = null;
			speaker = SaxParserDataStore.speakers.get(name);
			OrderItem orderitem = new OrderItem(speaker.getName(), speaker.getPrice(), speaker.getImage(), speaker.getRetailer(),speaker.getDescription());
			orderItems.add(orderitem);
		}
		if(type.equals("thermostats")){
			Thermostats thermostat = null;
			thermostat = SaxParserDataStore.thermostats.get(name);
			OrderItem orderitem = new OrderItem(thermostat.getName(), thermostat.getPrice(), thermostat.getImage(), thermostat.getRetailer(), thermostat.getDescription());
			orderItems.add(orderitem);
		}
		if(type.equals("accessories")){	
			Accessory accessory = SaxParserDataStore.accessories.get(name); 
			OrderItem orderitem = new OrderItem(accessory.getName(), accessory.getPrice(), accessory.getImage(), accessory.getRetailer(), accessory.getDescription());
			orderItems.add(orderitem);
		}
		
	}
	// store the payment details for orders
	public void storePayment(int orderId,
		String orderName,double orderPrice,String firstname,String creditCardNo){
		HashMap<Integer, ArrayList<OrderPayment>> orderPayments= new HashMap<Integer, ArrayList<OrderPayment>>();
		String TOMCAT_HOME = System.getProperty("catalina.home");
			// get the payment details file 
			try
			{
				FileInputStream fileInputStream = new FileInputStream(new File(TOMCAT_HOME+"\\webapps\\Assignment_1\\PaymentDetails.txt"));
				ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);	      
				orderPayments = (HashMap)objectInputStream.readObject();
			}
			catch(Exception e)
			{
			
			}
			if(orderPayments==null)
			{
				orderPayments = new HashMap<Integer, ArrayList<OrderPayment>>();
			}
			// if there exist order id already add it into same list for order id or create a new record with order id
			
			if(!orderPayments.containsKey(orderId)){	
				ArrayList<OrderPayment> arr = new ArrayList<OrderPayment>();
				orderPayments.put(orderId, arr);
			}
		ArrayList<OrderPayment> listOrderPayment = orderPayments.get(orderId);		
		OrderPayment orderpayment = new OrderPayment(orderId,username(),firstname,orderName,orderPrice,creditCardNo);
		listOrderPayment.add(orderpayment);	
			
			// add order details into file

			try
			{	
				FileOutputStream fileOutputStream = new FileOutputStream(new File(TOMCAT_HOME+"\\webapps\\Assignment_1\\PaymentDetails.txt"));
				ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
            	objectOutputStream.writeObject(orderPayments);
				objectOutputStream.flush();
				objectOutputStream.close();       
				fileOutputStream.close();
			}
			catch(Exception e)
			{
				System.out.println("inside exception file not written properly");
			}	
	}

	
	/* getDoorBells Functions returns the Hashmap with all DoorBells in the store.*/

	public HashMap<String, DoorBells> getDoorbells(){
			HashMap<String, DoorBells> hm = new HashMap<String, DoorBells>();
			hm.putAll(SaxParserDataStore.doorbells);
			return hm;
	}
	
	/* getDoorLocks Functions returns the Hashmap with all DoorLocks in the store.*/

	public HashMap<String, DoorLocks> getDoorLocks(){
			HashMap<String, DoorLocks> hm = new HashMap<String, DoorLocks>();
			hm.putAll(SaxParserDataStore.doorlocks);
			return hm;
	}

		/* getLlightings Functions returns the Hashmap with all Lightings in the store.*/

		public HashMap<String, Lightings> getLightings(){
			HashMap<String, Lightings> hm = new HashMap<String, Lightings>();
			hm.putAll(SaxParserDataStore.lightings);
			return hm;
	}

	public HashMap<String, Speakers> getSpeakers(){
			HashMap<String, Speakers> hm = new HashMap<String, Speakers>();
			hm.putAll(SaxParserDataStore.speakers);
			return hm;
	}

	public HashMap<String, Thermostats> getThermostats(){
			HashMap<String, Thermostats> hm = new HashMap<String, Thermostats>();
			hm.putAll(SaxParserDataStore.thermostats);
			return hm;
	}
	
	/* getProducts Functions returns the Arraylist of doorbells in the store.*/

	public ArrayList<String> getProductsDoorBells(){
		ArrayList<String> ar = new ArrayList<String>();
		for(Map.Entry<String, DoorBells> entry : getDoorbells().entrySet()){			
			ar.add(entry.getValue().getName());
		}
		return ar;
	}
	
	/* getProducts Functions returns the Arraylist of doorlocks in the store.*/

	public ArrayList<String> getProductsDoorLocks(){		
		ArrayList<String> ar = new ArrayList<String>();
		for(Map.Entry<String, DoorLocks> entry : getDoorLocks().entrySet()){
			ar.add(entry.getValue().getName());
		}
		return ar;
	}
	
	/* getProducts Functions returns the Arraylist of lightings in the store.*/

	public ArrayList<String> getProductsLightings(){		
		ArrayList<String> ar = new ArrayList<String>();
		for(Map.Entry<String, Lightings> entry : getLightings().entrySet()){
			ar.add(entry.getValue().getName());
		}
		return ar;
	}
	/* getProducts Functions returns the Arraylist of speakers in the store.*/

	public ArrayList<String> getProductsSpeakers(){		
		ArrayList<String> ar = new ArrayList<String>();
		for(Map.Entry<String, Speakers> entry : getSpeakers().entrySet()){
			ar.add(entry.getValue().getName());
		}
		return ar;
	}
	/* getProducts Functions returns the Arraylist of thermostats in the store.*/

	public ArrayList<String> getProductsThermostats(){		
		ArrayList<String> ar = new ArrayList<String>();
		for(Map.Entry<String, Thermostats> entry : getThermostats().entrySet()){
			ar.add(entry.getValue().getName());
		}
		return ar;
	}
	
	

}
