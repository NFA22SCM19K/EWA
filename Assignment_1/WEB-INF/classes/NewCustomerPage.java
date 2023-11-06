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

@WebServlet("/NewCustomerPage")

public class NewCustomerPage extends HttpServlet
{	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
		response.setContentType("text/html");
		PrintWriter out =response.getWriter();
		Utilities util=new Utilities(request,out);
		if(request.getAttribute("checkMsg") != null)
		{
			out.println("<h3 style='color:black;background-color:blue;'>"+(String)(request.getAttribute("checkMsg"))+"</h3>");
			request.setAttribute("checkMsg","");
		}	
		util.printHtml("Header2.html");
		out.print("<div class='post' style='float: none; width: 100%'>");
		out.print("<h2 class='title meta'><a style='font-size: 24px;'>Add New Customer</a></h2>"
				+ "<div class='entry'>"
				+ "<div style='width:400px; margin:25px; margin-left: auto;margin-right: auto;'>");
		out.print("<form action=''>"
				+ "<table style='width:100%'><tr><td>"
				+ "<h3>Username</h3></td><td><input type='text' name='username' value='' class='input' required></input>"
				+ "</td></tr><tr><td>"
				+ "<h3>Password</h3></td><td><input type='password' name='password' value='' class='input' required></input>"
				+ "</td></tr><tr><td>"
				+ "<h3>First Name</h3></td><td><input type='text' name='firstname' value='' class='input' required></input>"
                + "</td></tr><tr><td>"
                + "<h3>Last Name</h3></td><td><input type='text' name='lastname' value='' class='input' required></input>"
				+ "</td></tr></table>" + "<br>");
				out.println("</form>" + "</div></div></div>");
				out.println("<button  data-toggle='modal' data-target='#myModal' class='btn btn-primary'>Create User </button></div>");
		out.println("<div id='myModal' class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'> <button type='button' class='close' data-dismiss='modal'>&times;</button> <h4 class='modal-title'>Product Status</h4> </div>");  
		out.println("<div class='modal-body'><p>User Updated Successfully!.</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");
			
		util.printHtml("Footer.html");
	}
}