import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;



import java.io.*;

@WebServlet("/ProductDetailsPage")


public class ProductDetailsPage extends HttpServlet{
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
		response.setContentType("text/html");

		String name = request.getParameter("name");
		String type = request.getParameter("type");
		String maker = request.getParameter("maker");
		String access = request.getParameter("access");

		String price = request.getParameter("price");
		String imgAdd = request.getParameter("imgAdd");
		String desc = request.getParameter("des");


		String result; 

		System.out.print("name : " + name + " \n price: " + price + "\n img ADD: " + imgAdd + "\n desc" + desc );
		

		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();

		// Utilities utility = new Utilities(request,pw);
		// if(!utility.isLoggedin()){
		// 	HttpSession session = request.getSession(true);				
		// 	session.setAttribute("login_msg", "Please Login to buy or view products");
		// 	response.sendRedirect("Login");
		// 	return;
		// }

		// utility.printHtml("Header.html");
		// utility.printHtml("LeftNavigationBar.html");
	
		

		Utilities utility = new Utilities(request, pw);
		utility.printHtml("Header.html");
		utility.printHtml("LeftNavigationBar.html");
		pw.print("<div id='content'><div class='post'><h2 class='title meta'>" +
										"<a style='font-size: 24px;'>" + name +"</a></h2>" +
									"<div class='productContainer'> <img src = 'images/"+ type + "/" + imgAdd +"' style = 'max-width: 200px; max-height: 170px; width:200px; height:170px' alt='' ><h2>" + desc +
									"</h2> <h2> Price - $" + price + "</h2></div></div></div>" );


		
		if(type.equals("doorbells")){
			pw.print("<h2>Accessory for Door Bells");
			pw.print("<table><tr><td><div id='shop_item'>");
			pw.print("<h3> Wedge Mount </h3>");
			pw.print("<strong>$ 7.99 </strong><ul>");
			pw.print("<li id='item'><img src='images/accessories/wedge_mount.jpg' alt='' /></li>");
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='wedgemount'>"+
					"<input type='hidden' name='type' value='accessories'>"+
					"<input type='hidden' name='maker' value='blink'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form> </td>");

			pw.print("<td><div id='shop_item'>");
			pw.print("<h3> Rain Cover </h3>");
			pw.print("<strong>$ 23.86 </strong><ul>");
			pw.print("<li id='item'><img src='images/accessories/rain_cover.jpg' alt='' /></li>");
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='raincover'>"+
					"<input type='hidden' name='type' value='accessories'>"+
					"<input type='hidden' name='maker' value='HomeAll'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form> </td></tr></table>");



		}
		else if (type.equals("speakers"))
		{

			pw.print("<h2>Accessory for Speakers");
			pw.print("<table><tr><td><div id='shop_item'>");
			pw.print("<h3> Holder </h3>");
			pw.print("<strong>$ 12.59 </strong><ul>");
			pw.print("<li id='item'><img src='images/accessories/holder.jpg' alt='' /></li>");
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='holder'>"+
					"<input type='hidden' name='type' value='accessories'>"+
					"<input type='hidden' name='maker' value='holder'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form> </td>");

			pw.print("<td><div id='shop_item'>");
			pw.print("<h3> Mount It </h3>");
			pw.print("<strong>$ 16.99 </strong><ul>");
			pw.print("<li id='item'><img src='images/accessories/mountit.jpg' alt='' /></li>");
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='mountit'>"+
					"<input type='hidden' name='type' value='accessories'>"+
					"<input type='hidden' name='maker' value='mountit'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form> </td></tr></table>");

		}
		else if (type.equals("lightings"))
		{

			pw.print("<h2>Accessory for Lightings");
			pw.print("<table><tr><td><div id='shop_item'>");
			pw.print("<h3> Wall Switch Module </h3>");
			pw.print("<strong>$ 44.99 </strong><ul>");
			pw.print("<li id='item'><img src='images/accessories/philips_2.jpg' alt='' /></li>");
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='switchmodule'>"+
					"<input type='hidden' name='type' value='accessories'>"+
					"<input type='hidden' name='maker' value='philips'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form> </td>");

			pw.print("<td><div id='shop_item'>");
			pw.print("<h3> Tap Dial Switch </h3>");
			pw.print("<strong>$ 49.99 </strong><ul>");
			pw.print("<li id='item'><img src='images/accessories/philips_3.jpg' alt='' /></li>");
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='tapdialswitch'>"+
					"<input type='hidden' name='type' value='accessories'>"+
					"<input type='hidden' name='maker' value='philips'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form> </td></tr></table>");

		}

			utility.printHtml("Footer.html");
		
}

}