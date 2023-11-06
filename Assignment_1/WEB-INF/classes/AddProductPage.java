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

@WebServlet("/AddProductPage")

public class AddProductPage extends HttpServlet{
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException,IOException{
		response.setContentType("text/html");
		PrintWriter out =response.getWriter();
		HttpSession session= request.getSession();
		Utilities util=new Utilities(request,out);
		
		util.printHtml("Header1.html");
		out.println("<div class='row'><a style='font-size: 24px;''>Add Product</a> ");
		out.println("<form action=\"ProductAddPage\" >");
		out.println("<div class='form-group'><label>Product Name:</label><input type='text' class='form-control' name='pname' placeholder='Enter Product Name'  /></div>");
		out.println("<div class='form-group'><label>Product Description:</label></br><textarea class='form-control' placeholder='Enter Product Description' name='pdescription' ></textarea></div>");
		out.println("<div class='form-group'><label>Product Color:</label></br><input class='form-control' type='text' placeholder='Enter Product Color' name='pcolor'  \"></div>");
		out.println("<div class='form-group'><label>Product Price:</label><input class='form-control' type='text' placeholder='Enter Product Price' name='pprice' \"></div>");
		out.println("<div class='form-group'><label>Enter Product Image Name:</label></br><input class='form-control' type='text'  placeholder='Enter Product Image Name(with Extension)' name='pimage'  ></div>");
		out.println("<div class='form-group'><label>Product Condition:</label></br><input class='form-control' type='text' placeholder='Enter Product Condition' name='pcondition'  \"></div>");
		out.println("<div class='form-group'><label>Product Company:</label></br><input class='form-control' type='text' placeholder='Enter Product Company' name='pcompany'  \"></div>");
		out.println("<div class='form-group'><label>Select Category:</label></br><select class='form-control' name='pcategory'><option value='doorbells' selected>Smart Door Bells</option><option value='doorlocks'>Smart Door Locks</option><option value='speakers'>Smart Speakers</option><option value='lightings'>Smart Lightings</option><option value='thermostats'>Smart Thermostats</option></select></div>");
		//out.println("<input type='hidden' name='updateMsg' value='Product Updated'>");
		out.println("</form></div>");
		out.println("<button  data-toggle='modal' data-target='#myModal1' class='btn btn-primary'>Add Product</button></div>");
		out.println("<div id='myModal1' class='modal fade' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-header'> <button type='button' class='close' data-dismiss='modal'>&times;</button> <h4 class='modal-title'>Product Status</h4> </div>");  
		out.println("<div class='modal-body'><p>Product Added Successfully!.</p></div><div class='modal-footer'><button type='button' class='btn btn-default' data-dismiss='modal'>Close</button></div></div></div></div>");
		// util.printHtml("Footer.html");
		
	}
}