# MyOCR client code examples
This is a set of code examples to use MyOCR web api. After cloning this to your local drive, run the following commands to run the sample code.

## node js / base64 encoding / axio
The sub-folder nodejs-base64-axios has a sample code to submit an OCR request using Node js with axis. The input image is loaded, encoded in the base64 format, and submitted to MyOCR end point. To run the sample code, run the following commands.
1. cd nodejs-base64-axios
2. npm install
3. node app.js (before running this line, replace {{your app token}} with your app token.)

## node js / formdata
The sub-folder nodejs-formdata has a sample code to submit an OCR request using Node js and FormData. The input image is loaded, encoded in the base64 format, and submitted to MyOCR end point. To run the sample code, run the following commands.

1. cd nodejs-formdata
2. npm install
3. node app.js (before running this line, replace {{your app token}} with your app token.)

## html / javascript
The three files (index.html, index.js, index.css) are the sample code files. Please upload these files to any of your http server and access the page to run OCRs. For convineeice, an express http server is also also availalbe in the same folder to serve the files. 

To run the express server, run the following commands
1. cd html-javascript
2. npm install 
3. node server.js (before running this line, replace {{your app token}} with your app token.)

Then open your web brower and go to http://localhost:3000. Then, select a image file with texts, and select the language, and click the OCR button. 






