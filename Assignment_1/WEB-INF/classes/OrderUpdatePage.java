import javax.servlet.*;
import javax.servlet.http.*;
import java.util.*;
import java.io.*;
import java.net.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/OrderUpdatePage")

public class OrderUpdatePage extends HttpServlet
{	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
		response.setContentType("text/html");
		PrintWriter out =response.getWriter();
		Utilities util=new Utilities(request,out);

		// check if the user is logged in
		if (!util.isLoggedin()) {
			HttpSession session = request.getSession(true);
			session.setAttribute("login_msg", "Please Login to View your Orders");
			response.sendRedirect("Login");
			return;
		}

		String username = util.username();
		String usertype = util.usertype();
		// util.printHtml("Header2.html");
		// out.print("<form name ='ViewOrder' action='OrderUpdatePage' method='get'>");
		// out.print("<div id='content'><div class='post'><h2 class='title meta'>");
		// out.print("<a style='font-size: 24px;'>Order</a>");
		// out.print("</h2><div class='entry'>");
		util.printHtml("Header2.html");
		//util.printHtml("LeftNavigationBar.html");
		out.print("<form name ='ViewOrder' action='OrderUpdatePage' method='get'>");
		out.print("<div id='content'><div class='post'><h2 class='title meta'>");
		out.print("<a style='font-size: 24px;'>Order</a>");
		out.print("</h2><div class='entry'>");

		/*
		 * check if the order button is clicked
		 * if order button is not clicked that means the view order page is visited
		 * freshly
		 * then user will get textbox to give order number by which he can view order
		 * if order button is clicked user will be directed to this same servlet and
		 * user has given order number
		 * then this page shows all the order details
		 */

		if (request.getParameter("Order") == null) {
			out.print("<table align='center'><tr><td>Enter OrderNo &nbsp&nbsp<input name='orderId' type='text'></td>");
			out.print("<td><input type='submit' name='Order' value='ViewOrder' class='btnbuy'></td></tr></table>");
		}

		// hashmap gets all the order details from file

		HashMap<Integer, ArrayList<OrderPayment>> orderPayments = new HashMap<Integer, ArrayList<OrderPayment>>();
		String TOMCAT_HOME = System.getProperty("catalina.home");

		try {
			FileInputStream fileInputStream = new FileInputStream(
					new File(TOMCAT_HOME + "\\webapps\\Assignment_1\\PaymentDetails.txt"));
			ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
			orderPayments = (HashMap) objectInputStream.readObject();
		} catch (Exception e) {
		}

		/*
		 * if order button is clicked that is user provided a order number to view order
		 * order details will be fetched and displayed in a table
		 * Also user will get an button to cancel the order
		 */

		if (request.getParameter("Order") != null && request.getParameter("Order").equals("ViewOrder")) 
		{
			if (request.getParameter("orderId") != null && request.getParameter("orderId") != "") {
				int orderId = Integer.parseInt(request.getParameter("orderId"));
				out.print("<input type='hidden' name='orderId' value='" + orderId + "'>");
				// get the order details from file
				try {
					FileInputStream fileInputStream = new FileInputStream(
							new File(TOMCAT_HOME + "\\webapps\\Assignment_1\\PaymentDetails.txt"));
					ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
					orderPayments = (HashMap) objectInputStream.readObject();
				} catch (Exception e) {

				}
				int size = 0;

				/*
				 * get the order size and check if there exist an order with given order number
				 * if there is no order present give a message no order stored with this id
				 */

				if (orderPayments.get(orderId) != null) {
					for (OrderPayment od : orderPayments.get(orderId))
						// if (od.getUserName().equals(username))
						size = orderPayments.get(orderId).size();
				}
				// display the orders if there exist order with order id
				if (size > 0) {
					out.print("<table  class='gridtable'>");
					out.print("<tr><td></td>");
					out.print("<td>OrderId:</td>");
					out.print("<td>UserName:</td>");
					out.print("<td>productOrdered:</td>");
					out.print("<td>productPrice:</td></tr>");
					for (OrderPayment oi : orderPayments.get(orderId)) {
						out.print("<tr>");
						out.print("<td><input type='radio' name='orderName' value='" + oi.getOrderName() + "'></td>");
						out.print("<td>" + oi.getOrderId() + ".</td><td>" + oi.getUserName() + "</td><td>"
								+ oi.getOrderName() + "</td><td>Price: " + oi.getOrderPrice() + "</td>");
						out.print("<td><input type='submit' name='Order' value='CancelOrder' class='btnbuy'></td>");
						out.print("<td><input type='submit' name='Order' value='UpdateOrder' class='btnbuy'></td>");
						out.print("</tr>");

					}
					out.print("</table>");
				} else {
					out.print("<h4 style='color:red'>You have not placed any order with this order id</h4>");
				}
			} else

			{
				out.print("<h4 style='color:red'>Please enter the valid order number</h4>");
			}
		}
		// if the user presses cancel order from order details shown then process to
		// cancel the order
		
		if (request.getParameter("Order") != null && request.getParameter("Order").equals("CancelOrder")) 
		{
			if (request.getParameter("orderName") != null) 
			{
				String orderName = request.getParameter("orderName");
				int orderId = 0;
				orderId = Integer.parseInt(request.getParameter("orderId"));
				ArrayList<OrderPayment> ListOrderPayment = new ArrayList<OrderPayment>();
				// get the order from file
				try {

					FileInputStream fileInputStream = new FileInputStream(
							new File(TOMCAT_HOME + "\\webapps\\Assignment_1\\PaymentDetails.txt"));
					ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
					orderPayments = (HashMap) objectInputStream.readObject();
				} catch (Exception e) {

				}
				// get the exact order with same ordername and add it into cancel list to remove
				// it later
				for (OrderPayment oi : orderPayments.get(orderId)) {
					//if (oi.getOrderName().equals(orderName) && oi.getUserName().equals(username)) 
					if (oi.getOrderName().equals(orderName) && usertype.equals("salesManager"))
					{
						ListOrderPayment.add(oi);
						
					}
				}
				out.print("<h4 style='color:red'>Your Order is Cancelled</h4>");
				// remove all the orders from hashmap that exist in cancel list
				orderPayments.get(orderId).removeAll(ListOrderPayment);
				if (orderPayments.get(orderId).size() == 0) {
					orderPayments.remove(orderId);
				}
				// save the updated hashmap with removed order to the file
				try {
					FileOutputStream fileOutputStream = new FileOutputStream(
							new File(TOMCAT_HOME + "\\webapps\\Assignment_1\\PaymentDetails.txt"));
					ObjectOutputStream objectOutputStream = new ObjectOutputStream(fileOutputStream);
					objectOutputStream.writeObject(orderPayments);
					objectOutputStream.flush();
					objectOutputStream.close();
					fileOutputStream.close();
				} catch (Exception e) {

				}
			} else {
				out.print("<h4 style='color:red'>Please select any product</h4>");
			}
		}
		out.print("</form></div></div></div>");
		util.printHtml("Footer.html");

		/*if(request.getAttribute("checkMsg") != null)
		{
			out.println("<h3 style='color:black;background-color:blue;'>"+(String)(request.getAttribute("checkMsg"))+"</h3>");
			request.setAttribute("checkMsg","");
		}	
		util.printHtml("header.html");
		String body="<div id='body'>"
		+"<section id='content'>"
		+"<article> <h2 style='color:green' >Update Order</h2></br> "
		+"<form action='CheckUpdateOrder' style='border: 2px solid #fff;'>"
		+"<div style='padding:15px;'>"
		+"<label><b>OrderID</b></label>"
		+"<input type='text' placeholder='Enter Order ID' name='orderid' required>"
		
		+"<button style='color: white;background-color: red;margin: 7px;padding: 15px 21px;width:100%;}' type='submit'>Update</button></div> </form>"
		+"</article></section>";		
		out.println(body);
		util.printHtml("footer.html");*/
	}
}