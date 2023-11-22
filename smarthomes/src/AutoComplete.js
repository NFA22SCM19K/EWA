// var req;
// var isIE;
// var searchId;
// var completeTable;
// var autoRow;
// searchId = document.getElementById("searchId");
// completeTable = document.getElementById("complete-table");
// autoRow = document.getElementById("auto-row");

// function init() {
//     console.log("entered init");
//     searchId = document.getElementById("searchId");
//     completeTable = document.getElementById("complete-table");
//     autoRow = document.getElementById("auto-row");
// }

// function doCompletion() {
//     console.log("entered")
//     searchId = document.getElementById("searchId");
//     var url = "http://localhost:3001/autocomplete?action=complete&searchId=" + (searchId.value);
//     req = initRequest();
//     req.open("GET", url, true);
//     req.onreadystatechange = callback;
//     req.send(null);
// }

// function initRequest() {
//     if (window.XMLHttpRequest) {
//         if (navigator.userAgent.indexOf('MSIE') != -1) {
//             isIE = true;
//         }
//         return new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//         isIE = true;
//         return new ActiveXObject("Microsoft.XMLHTTP");
//     }
// }

// function callback() {
//     clearTable();

//     if (req.readyState == 4) {
//         if (req.status == 200) {
//             parseMessages(req.responseXML);
//         }
//     }
// }

// function appendProduct(productName,productId) {

//     var row;
//     var cell;
//     var linkElement;
    
//     if (isIE) {
//         completeTable.style.display = 'block';
//         row = completeTable.insertRow(completeTable.rows.length);
//         cell = row.insertCell(0);
//     } else {
//         completeTable.style.display = 'table';
//         row = document.createElement("tr");
//         cell = document.createElement("td");
//         row.appendChild(cell);
//         completeTable.appendChild(row);
//     }

//     cell.className = "popupCell";

//     linkElement = document.createElement("a");
//     linkElement.className = "popupItem";
//     linkElement.setAttribute("href", "AutoCompleteServlet?action=lookup&searchId=" + productId);
//     linkElement.appendChild(document.createTextNode(productName));
//     cell.appendChild(linkElement);
// }

// function clearTable() {
//     if (completeTable.getElementsByTagName("tr").length > 0) {
//         completeTable.style.display = 'none';
//         for (loop = completeTable.childNodes.length -1; loop >= 0 ; loop--) {
//             completeTable.removeChild(completeTable.childNodes[loop]);
//         }
//     }
// }


// function parseMessages(responseXML) {
    
//     // no matches returned
//     if (responseXML == null) {
//         return false;
//     } else {

//         var products = responseXML.getElementsByTagName("products")[0];

//         if (products.childNodes.length > 0) {
//             completeTable.setAttribute("bordercolor", "black");
//             completeTable.setAttribute("border", "1");
    
//             for (loop = 0; loop < products.childNodes.length; loop++) {
//                 var product = products.childNodes[loop];
//                 var productName = product.getElementsByTagName("productName")[0];
//                 var productId = product.getElementsByTagName("id")[0];
//                 appendProduct(productName.childNodes[0].nodeValue,
//                     productId.childNodes[0].nodeValue);
//             }
//         }
//     }
// }

import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useHistory } from 'react-router-dom';

const AutoComplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  const handleInputChange = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    try {
      const response = await axios.get(
        `http://localhost:3001/autocomplete?action=complete&searchId=${term}`
      );
      console.log(response.data)
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSelectItem = (item) => {
    // Redirect to Details.js with the selected item's data
    console.log(item)
    //e.preventDefault();
    history.push({
      pathname: 'Details',
      state: { item_p: item },
    });
  };

  return (
    <div className="autocomplete-container">
      <input
        type="text"
        name="searchId"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for products..."
      />
      <ul className="suggestions-list">
        {suggestions.map((item) => (
          <li key={item.Id} onClick={(e) => {e.preventDefault();handleSelectItem(item)}}>{item.Name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;

