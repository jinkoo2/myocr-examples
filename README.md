# MyOCR client app examples
This is a set of code examples to consume MyOCR web api. After cloning this to your local drive, run the following commands to run the sample code.

## node js / base64 encoding / axio
The sub-folder nodejs-base64-axios has a sample code to submit an OCR request using Node js with axis. The input image is loaded, encoded in the base64 format, and submitted to MyOCR end point. To run the sample code, run the following commands.

```bash
>> cd nodejs-base64-axios
# Open app.js and replace {{your app token}} with your own app token.
>> npm install
>> node app.js
```

## node js / formdata
The sub-folder nodejs-formdata has a sample code to submit an OCR request using Node js and FormData. The input image is loaded, encoded in the base64 format, and submitted to MyOCR end point. To run the sample code, run the following commands.

```bash
>> cd nodejs-formdata
# Open app.js and replace {{your app token}} with your own app token.
>> npm install
>> node app.js 
```

## html / javascript
The three files (index.html, index.js, index.css) are the sample code files. Please upload these files to any of your http server and access the page to run OCRs. For convineeice, an express http server is also also availalbe in the same folder to serve the files. 

To run the express server, run the following commands
```bash
>> cd html-javascript
# Open index.js and replace {{your app token}} with your own app token.
>> npm install 
>> node server.js 
```

Then open your web brower and go to http://localhost:3000. On the page, select a image file, select the language, and click the OCR button. 






