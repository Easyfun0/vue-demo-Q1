// var request = require('request');
// let xml =
// `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:qtre="http://Main.Service">
//    <soapenv:Header/>
//    <soapenv:Body>
//       <qtre:GetUsers>
//          <qtre:sSearchText></qtre:sSearchText>
//       </qtre:GetUsers>
//    </soapenv:Body>
// </soapenv:Envelope>`

// var options = {
//   url: 'http://192.168.0.28:10005/MainService/WindowsService?wsdl',
//   method: 'POST',
//   body: xml,
//   headers: {
//     'Content-Type':'text/xml;charset=utf-8',
//     'Accept-Encoding': 'gzip,deflate',
//     'Content-Length':xml.length,
//     'SOAPAction':"http://Main.Service/AUserService/GetUsers"
//   }
// };

// let callback = (error, response, body) => {
//   if (!error && response.statusCode == 200) {
//     console.log('Raw result', body);
//     var xml2js = require('xml2js');
//     var parser = new xml2js.Parser({explicitArray: false, trim: true});
//     parser.parseString(body, (err, result) => {
//       console.log('JSON result', result);
//     });
//   };
//   console.log('E', response.statusCode, response.statusMessage);  
// };
// request(options, callback);



// var soap = require('soap');
//   var url = 'http://61.216.90.104:8080/APP/aqWebService.asmx?op=GetAPPLogItemIndex';
//   var args = {name: 'value'};
//   soap.createClient(url, function(err, client) {
//       client.MyFunction(args, function(err, result) {
//           console.log(result);
//       });
//   });

function soapRequest() {
    const str = 
    `<?xml version="1.0" encoding="utf-8"?>` +
    `<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" ` +
    `xmlns:xsd="http://www.w3.org/2001/XMLSchema" `+
    `xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">` +
    `<soap12:Body>` +
        `<GetAPPLogItemIndex xmlns="http://aquas.com.tw/">` +
            `<User>20170808140301</User>` +
            `<Pwd>42867074</Pwd>` +
        `</GetAPPLogItemIndex>` +
    `</soap12:Body>` +
    `</soap12:Envelope>` +
    `<?xml version="1.0" encoding="utf-8"?>` +
`<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">` +
  `<soap12:Body>` +
    `<GetAPPLogItemIndexResponse xmlns="http://aquas.com.tw/">` +
      `<GetAPPLogItemIndexResult>string</GetAPPLogItemIndexResult>` +
    `</GetAPPLogItemIndexResponse>` +
  `</soap12:Body>` +
`</soap12:Envelope>`

    function createCORSRequest (method, url) {
        let xhr = new XMLHttpRequest()
        if ("withCredentials" in xhr) {
            xhr.open(method, url, false)
        } else if (typeof XDomainRequest != "undefined") {
            alert
            xhr = new XDomainRequest ()
            xhr.open (method, url)
        } else {
            console.log("CORS not")
            alert("CORS not")
            xhr = null
        }
        return xhr
    }
    const xhr = createCORSRequest ("POST", "http://61.216.90.104:8080/APP/aqWebService.asmx")
    if (!xhr){
        console.log("XHR issue")
        return
    }
    xhr.onload = function (){
        let result = xhr.responseRext
        console.log(results)
    }
    xhr.setRequestHeader('Content-Type', 'text/xml')
    xhr.send(xhr)
}