import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/LightingsList")

public class LightingsList extends HttpServlet {

	/* Trending Page Displays all the Lightings and their Information in Game Speed */

	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();

	/* Checks the Lightings type whether it is et2 or philips or gowing */

		String name = null;
		String CategoryName = request.getParameter("maker");
		HashMap<String, Lightings> hm = new HashMap<String, Lightings>();

		if (CategoryName == null)	
		{
			hm.putAll(SaxParserDataStore.lightings);
			name = "";
		} 
		else 
		{
			if(CategoryName.equals("et2")) 
			{	
				for(Map.Entry<String,Lightings> entry : SaxParserDataStore.lightings.entrySet())
				{
				  if(entry.getValue().getRetailer().equals("ET2"))
				  {
					 hm.put(entry.getValue().getId(),entry.getValue());
				  }
				}
				name ="ET2";
			} 
			else if (CategoryName.equals("philips"))
			{
				for(Map.Entry<String,Lightings> entry : SaxParserDataStore.lightings.entrySet())
				{
				  if(entry.getValue().getRetailer().equals("Philips"))
				  {
					 hm.put(entry.getValue().getId(),entry.getValue());
				  }
				}
				name = "Philips";
			} 
			else if (CategoryName.equals("gowing")) 
			{
				for(Map.Entry<String,Lightings> entry : SaxParserDataStore.lightings.entrySet())
				{
				  if(entry.getValue().getRetailer().equals("Gowing"))
				 {
					 hm.put(entry.getValue().getId(),entry.getValue());
				 }
				}	
				name = "Gowing";
			}
	    }

		/* Header, Left Navigation Bar are Printed.

		All the Lightings and Lighting information are dispalyed in the Content Section

		and then Footer is Printed*/

		Utilities utility = new Utilities(request, pw);
		utility.printHtml("Header.html");
		utility.printHtml("LeftNavigationBar.html");
		pw.print("<div id='content'><div class='post'><h2 class='title meta'>");
		pw.print("<a style='font-size: 24px;'>" + name + " Lightings</a>");
		pw.print("</h2><div class='entry'><table id='bestseller'>");
		int i = 1;
		int size = hm.size();
		for (Map.Entry<String, Lightings> entry : hm.entrySet()) {
			Lightings lighting = entry.getValue();
			if (i % 3 == 1)
				pw.print("<tr>");
			pw.print("<td><div id='shop_item'>");
			pw.print("<h3>" + lighting.getName() + "</h3>");
			pw.print("<strong>" + lighting.getPrice() + "$</strong><ul>");
			pw.print("<li id='item'><img src='images/lightings/"
					+ lighting.getImage() + "' alt='' /></li>");
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='"+entry.getKey()+"'>"+
					"<input type='hidden' name='type' value='lightings'>"+
					"<input type='hidden' name='maker' value='"+CategoryName+"'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form>");
			pw.print("<li><form method='post' action='ProductDetailsPage'>" +
					"<input type='hidden' name='name' value='"+lighting.getName()+"'>"+
					"<input type='hidden' name='id' value='"+lighting.getId()+"'>"+
					"<input type='hidden' name='type' value='lightings'>"+
					"<input type='hidden' name='maker' value='"+CategoryName+"'>"+
					"<input type='hidden' name='price' value='"+Double.toString(lighting.getPrice())+"'>"+
					"<input type='hidden' name='imgAdd' value='"+lighting.getImage()+"'>"+
					"<input type='hidden' name='des' value='"+lighting.getDescription()+"'>"+
					"<input type='hidden' name='access' value=''>" +
					"<div class ='btn-group'>" +
						"<input type='submit' class='btn btn-default' value='View Product'>"+
					"</div>" + 
					"</form></li>");
			pw.print("</ul></div></td>");
			if (i % 3 == 0 || i == size)
				pw.print("</tr>");
			i++;
		}
		pw.print("</table></div></div></div>");
		utility.printHtml("Footer.html");
	}
}
