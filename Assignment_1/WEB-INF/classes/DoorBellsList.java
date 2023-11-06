import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DoorBellsList")

public class DoorBellsList extends HttpServlet {

	/* Doorbells Page Displays all the Doorbells and their Information in Game Speed */

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();
		String name = null;
		String CategoryName = request.getParameter("maker");
        

		/* Checks the Door Bell type whether it is arlo or blink or google or ring */

		HashMap<String, DoorBells> hm = new HashMap<String, DoorBells>();
		
		if(CategoryName==null)
		{
			hm.putAll(SaxParserDataStore.doorbells);
			name = "";
		}
		else
		{
		   if(CategoryName.equals("arlo"))
		   {
			
			 for(Map.Entry<String,DoorBells> entry : SaxParserDataStore.doorbells.entrySet())
			 {
				if(entry.getValue().getRetailer().equals("Arlo"))
				 {
					 hm.put(entry.getValue().getId(),entry.getValue());
				 }
			 }
				name = "Arlo";
		   }
		   else if(CategoryName.equals("blink"))
		    {
			for(Map.Entry<String,DoorBells> entry : SaxParserDataStore.doorbells.entrySet())
				{
				 if(entry.getValue().getRetailer().equals("Blink"))
				 {
					 hm.put(entry.getValue().getId(),entry.getValue());
				 }
				}
				 name = "Blink";
			}
			else if(CategoryName.equals("google"))
			{
				for(Map.Entry<String,DoorBells> entry : SaxParserDataStore.doorbells.entrySet())
				{
				 if(entry.getValue().getRetailer().equals("Google"))
				 {
					 hm.put(entry.getValue().getId(),entry.getValue());
				 }
				}
			   	 name = "Google";
			}
			else if(CategoryName.equals("ring"))
			{
				for(Map.Entry<String,DoorBells> entry : SaxParserDataStore.doorbells.entrySet())
				{
				 if(entry.getValue().getRetailer().equals("Ring"))
				 {
					 hm.put(entry.getValue().getId(),entry.getValue());
				 }
				}
			   	 name = "Ring";
			}
			
		}

		/* Header, Left Navigation Bar are Printed.

		All the Doorbell and Doorbell information are dispalyed in the Content Section

		and then Footer is Printed*/

		Utilities utility = new Utilities(request,pw);
		utility.printHtml("Header.html");
		utility.printHtml("LeftNavigationBar.html");
		pw.print("<div id='content'><div class='post'><h2 class='title meta'>");
		pw.print("<a style='font-size: 24px;'>"+name+" Door Bell's</a>");
		pw.print("</h2><div class='entry'><table id='bestseller'>");
		int i = 1; int size= hm.size();
		for(Map.Entry<String, DoorBells> entry : hm.entrySet())
		{
			DoorBells doorbell = entry.getValue();
			if(i%3==1) pw.print("<tr>");
			pw.print("<td><div id='shop_item'>");
			pw.print("<h3>"+doorbell.getName()+"</h3>");
			pw.print("<strong>$"+doorbell.getPrice()+"</strong><ul>");
			pw.print("<li id='item'><img src='images/doorbells/"+doorbell.getImage()+"' alt='' /></li>");
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='"+entry.getKey()+"'>"+
					"<input type='hidden' name='type' value='doorbells'>"+
					"<input type='hidden' name='maker' value='"+CategoryName+"'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form>");
			pw.print("<li><form method='post' action='ProductDetailsPage'>" +
					"<input type='hidden' name='name' value='"+doorbell.getName()+"'>"+
					"<input type='hidden' name='id' value='"+doorbell.getId()+"'>"+
					"<input type='hidden' name='type' value='doorbells'>"+
					"<input type='hidden' name='maker' value='"+CategoryName+"'>"+
					"<input type='hidden' name='price' value='"+Double.toString(doorbell.getPrice())+"'>"+
					"<input type='hidden' name='imgAdd' value='"+doorbell.getImage()+"'>"+
					"<input type='hidden' name='des' value='"+doorbell.getDescription()+"'>"+
					"<input type='hidden' name='access' value=''>" +
					"<div class ='btn-group'>" +
						"<input type='submit' class='btn btn-default' value='View Product'>"+
					"</div>" + 
					"</form></li>");
			pw.print("</ul></div></td>");
			if(i%3==0 || i == size) pw.print("</tr>");
			i++;
		}	
		pw.print("</table></div></div></div>");
   
		utility.printHtml("Footer.html");
		
	}
}
