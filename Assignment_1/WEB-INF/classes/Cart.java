import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
import java.util.ArrayList;

@WebServlet("/Cart")

public class Cart extends HttpServlet {

	int coupon = 0;
	int warranty = 0;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();

		/* From the HttpServletRequest variable name,type,maker and acessories information are obtained.*/

		Utilities utility = new Utilities(request, pw);
		String name = request.getParameter("name");
		String type = request.getParameter("type");
		String maker = request.getParameter("maker");
		String access = request.getParameter("access");
;

		if(access.equals("0")){
			System.out.println("Entered access 0");
			coupon = 1;
		}

		if(access.equals("1")){
			System.out.println("Entered access 1");
			warranty = 200;
		}
		
		System.out.print("name" + name + "type" + type + "maker" + maker + "accesee" + access);
		
		/* From the HttpServletRequest variable name,type,maker and acessories information are obtained.*/

		utility.storeProduct(name, type, maker, access);
		displayCart(request, response);
	}
	

/* displayCart Function shows the products that users has bought, these products will be displayed with Total Amount.*/

	protected void displayCart(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		Utilities utility = new Utilities(request,pw);
		Carousel carousel = new Carousel();
		if(!utility.isLoggedin()){
			HttpSession session = request.getSession(true);				
			session.setAttribute("login_msg", "Please Login to add items to cart");
			response.sendRedirect("Login");
			return;
		}
		
		utility.printHtml("Header.html");
		utility.printHtml("LeftNavigationBar.html");
		pw.print("<div id='content'><div class='post'><h2 class='title meta'>");
		pw.print("<a style='font-size: 24px;'>Cart("+utility.CartCount()+")</a>");
		pw.print("</h2><div class='entry'>");
		// pw.print("<form id='Cart' name ='Cart' action='CheckOut' method='post'>");
		if(utility.CartCount()>0)
		{
			int i = 1;
			double total = 0;
			pw.print("<table class='gridable'>");
			for (OrderItem oi : utility.getCustomerOrders()) 
			{
				pw.print("<form name ='CartItem' action='RemovefromCart' method='post'>"+
							"<tr><td>"+i+".</td><td>"+oi.getName()+"</td><td>: "+oi.getPrice()+"</td>"+
							"<input type='hidden' name='orderItemName' value='"+oi.getName()+"'>"+
							"<td><input type='submit' name='removefromcart' value='RemoveItem'></td></tr></form>");
				total = total +oi.getPrice();
				i++;
			}

			if(coupon==1)
				total = total - 100;
			
			total = total + warranty;

			pw.print("</table>");
			pw.print("<tr><th></th><th>Total:	</th><th>"+total+"</th>");
			pw.print("<br>");
			pw.print("<tr>Enter a coupon below:</tr>");
			pw.print("<tr><input class='form-control' type='text' /></tr>");
			pw.print("<tr><form action='Cart' method='post'><input type='submit' class='btn btn-primary' value='Apply '><input type='hidden' name='name' value='0'><input type='hidden' name='type' value='0'><input type='hidden' name='maker' value='0'><input type='hidden' name='access' value='0'></form></tr>");
			
			pw.print("<tr>Click to Add Warranty</tr>");
			pw.print("<tr><form action='Cart' method='post'><input type='submit' class='btn btn-primary' value='Apply Warranty'><input type='hidden' name='name' value='0'><input type='hidden' name='type' value='0'><input type='hidden' name='maker' value='0'><input type='hidden' name='access' value='1'></form></tr>");
			
			pw.print("<form name ='ChkoutBtn' action='CheckOut' method='post'><tr><td></td><td></td><td></td>"+
					"<td><input type='hidden' name='orderTotal' value='"+total+"'>"+
					"<input type='submit' name='CheckOut' value='CheckOut'></td></tr></table></form>");
	
		}
		else
		{
			pw.print("<h4 style='color:red'>Your Cart is empty</h4>");
		}
		pw.print("</div></div></div>");		
		utility.printHtml("Footer.html");
	}
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		Utilities utility = new Utilities(request, pw);
		
		displayCart(request, response);
	}
}
