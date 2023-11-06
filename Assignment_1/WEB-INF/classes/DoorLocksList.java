import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DoorLocksList")

public class DoorLocksList extends HttpServlet {

	/* Trending Page Displays all the Door Locks and their Information in Game Speed */

	protected void doGet(HttpServletRequest request,
		HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter pw = response.getWriter();

	/* Checks the Door Locks type whether it is yale or philips or simplisafe */

		String name = null;
		String CategoryName = request.getParameter("maker");
		HashMap<String, DoorLocks> hm = new HashMap<String, DoorLocks>();

		if (CategoryName == null)	
		{
			hm.putAll(SaxParserDataStore.doorlocks);
			name = "";
		} 
		else 
		{
			if(CategoryName.equals("yale")) 
			{	
				for(Map.Entry<String,DoorLocks> entry : SaxParserDataStore.doorlocks.entrySet())
				{
				  if(entry.getValue().getRetailer().equals("Yale"))
				  {
					 hm.put(entry.getValue().getId(),entry.getValue());
				  }
				}
				name ="Yale";
			} 
			else if (CategoryName.equals("philips")) 
			{
				for(Map.Entry<String,DoorLocks> entry : SaxParserDataStore.doorlocks.entrySet())
				{
				  if(entry.getValue().getRetailer().equals("Philips"))
				 {
					 hm.put(entry.getValue().getId(),entry.getValue());
				 }
				}	
				name = "Philips";
			}
			else if (CategoryName.equals("simplisafe")) 
			{
				for(Map.Entry<String,DoorLocks> entry : SaxParserDataStore.doorlocks.entrySet())
				{
				  if(entry.getValue().getRetailer().equals("SimpliSafe"))
				 {
					 hm.put(entry.getValue().getId(),entry.getValue());
				 }
				}	
				name = "Simplisafe";
			}						
	    }

		/* Header, Left Navigation Bar are Printed.

		All the Door Locks and Door Locks information are dispalyed in the Content Section

		and then Footer is Printed*/

		Utilities utility = new Utilities(request, pw);
		utility.printHtml("Header.html");
		utility.printHtml("LeftNavigationBar.html");
		pw.print("<div id='content'><div class='post'><h2 class='title meta'>");
		pw.print("<a style='font-size: 24px;'>" + name + " Door Locks</a>");
		pw.print("</h2><div class='entry'><table id='bestseller'>");
		int i = 1;
		int size = hm.size();
		for (Map.Entry<String, DoorLocks> entry : hm.entrySet()) {
			DoorLocks doorLock = entry.getValue();
			if (i % 3 == 1)
				pw.print("<tr>");
			pw.print("<td><div id='shop_item'>");
			pw.print("<h3>" + doorLock.getName() + "</h3>");
			pw.print("<strong>" + doorLock.getPrice() + "$</strong></li>");
			pw.print("<ul><li id='item'><img src='images/doorlocks/"
					+ doorLock.getImage() + "' alt='' /></li>");
			
			
			pw.print("<li><form method='post' action='Cart'>" +
					"<input type='hidden' name='name' value='"+entry.getKey()+"'>"+
					"<input type='hidden' name='type' value='doorlocks'>"+
					"<input type='hidden' name='maker' value='"+CategoryName+"'>"+
					"<input type='hidden' name='access' value=''>"+
					"<div class='btn-group'>"+
					"<input type='submit' class='btn btn-success' value='Buy Now'>"+
					"</div></form>");
			pw.print("<li><form method='post' action='ProductDetailsPage'>" +
					"<input type='hidden' name='name' value='"+doorLock.getName()+"'>"+
					"<input type='hidden' name='id' value='"+doorLock.getId()+"'>"+
					"<input type='hidden' name='type' value='doorlocks'>"+
					"<input type='hidden' name='maker' value='"+CategoryName+"'>"+
					"<input type='hidden' name='price' value='"+Double.toString(doorLock.getPrice())+"'>"+
					"<input type='hidden' name='imgAdd' value='"+doorLock.getImage()+"'>"+
					"<input type='hidden' name='des' value='"+doorLock.getDescription()+"'>"+
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
