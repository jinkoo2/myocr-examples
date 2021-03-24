const axios = require("axios");
const path = require("path");
const fs = require("fs");

// your application token. 
//const app_token = {{ your app token goes here }};

// api end point
const api_url = "http://localhost:3333/api/v1/ocr";

// image file path
const img_file = path.join(__dirname, "../images/test.tif");

// read input file
let img_base64;
try {
    var bitmap = fs.readFileSync(img_file);
    img_base64 = new Buffer(bitmap).toString("base64");
}
catch (error) {
    console.error('loading input file failed.', error)
    return;
}

// input object to api
const inputs = {
    img_base64: img_base64, // base64-encoded 
    img_ext: img_file.split('.').pop().toLocaleLowerCase().trim(),
    lang: "eng", // language
    output_json: true, // true - return the json object with semantic locations (paragraphs, lines, and words with locations).
    output_pdf: true, // true - return a text-searchable PDF document
    app_token // application token
};

console.log('sending a request')

axios
    .post(api_url, inputs)
    .then((res) => {

        const data = res.data;
        const ocr_resutl = res.data.data;

        if (data && data.success) {

            console.log('OCR succeeded!')

            console.log('===== text ======')
            console.log(ocr_resutl.text)

            // make output directory
            const out_dir = path.join(__dirname, 'out')
            if (!fs.existsSync(out_dir)) {
                console.log('creating output directory')
                fs.mkdirSync(out_dir);
            }

            // save the json data
            try {
                fs.writeFileSync(path.join(out_dir, "out.json"), JSON.stringify(res.data))
            }
            catch (error) {
                console.error('Saving out.json failed', error)
            }

            if (inputs.output_pdf && ocr_resutl.pdf_base64) {
                console.log('saving pdf file')
                // create pdf object from base64 encoded string
                var pdf = new Buffer(ocr_resutl.pdf_base64, 'base64');

                // write buffer to file
                fs.writeFileSync(path.join(out_dir, "out.pdf"), pdf);
            }
        }
        else {
            console.error('OCR failed')
        }
    })
    .catch((error) => {
        console.error('OCR reqeust failed')
    });


