var xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
    var xmlHttp;
    //for Internet Explorer
    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject('Miscrosoft.XMLHTTP');
        }
        catch(e){
            xmlHttp = false;
        }
    }
    //other browesers
    else{
        try{
            xmlHttp = new XMLHttpRequest();
        }
        catch(e){
            xmlHttp = false;
        }
    }
    //failing to create object XMLHttpRequest
    if(!xmlHttp)
      alert('Error creating the XMLHttpRequest objcet.');
    else  
      return xmlHttp;  
}
//creating HTTP query
function ajax(){
    if(xmlHttp.readyState == 4 || xmlHttp.readyState == 0){
        //get user's name
        //in form's field
        name = encodeURIComponent(document.getElementById('Name').value);
        xmlHttp.open('GET', 'ajax.php?name='+name, true);

        xmlHttp.onreadystatechange = processServerResponse();
        xmlHttp.send(null);
    }
    else
    //if port is busy try again after 1s.
    setTimeout('ajax()', 1000);
}
    //this fucntion is called after
    //getting response from the server
    function processServerResponse(){
        if(xmlHttp.readyState == 4){
            //status 200, the transaction is successful
            if(xmlHttp.status == 200){
                xmlResponse = xmlHttp.responseXML;
                XMLDocumentElement =xmlResponse.documentElement;
                helloMessage = XMLDocumentElement.firstChild.data;
                //refresh page: showing result from ajax.php
                //in div with name OurMessage
                document.getElementById('OurMessage').innerHTML = '<i>' + helloMessage + '</i>';
                //try again after 1s;
                setTimeout('ajax()', 1000);
            }
            //if the status <> 200, we have an error
            else{
                alert('Error accessing the server: '+ xmlHttp.statusText);
            }
        }
    }
