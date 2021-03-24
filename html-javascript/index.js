var api_url = "http://localhost:3333/api/v1";
const app_token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImppbmtvbzJAZ21haWwuY29tIiwiYXBwX25hbWUiOiJNeSBBcHAgMiIsImlhdCI6MTYxNjE3NDE5N30.hrsu1QOLO5yLiYQ_F5LiLqvZVRKuR_y__S3AkGyos-I';

window.onload = () => {
    // get supported language list
    get_lang_list();

    // on submit
    document.getElementById('myform').addEventListener('submit', onSubmit, false);
}

function get_lang_list() {
    // get lang list & polulate the drop down
    var url = `${api_url}/ocr/lang_list?app_token=${app_token}`
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.addEventListener("load", e => {

        console.log('request complete');
        console.log('status', xhr.status);
        console.log('statusText', xhr.statusText);

        var res = JSON.parse(xhr.response);
        console.log('data', res.data)
        console.log('type', typeof (res.data))

        const list = res.data.list;

        var lang_select = document.getElementById("lang")
        lang_select.innerHTML = "";
        list.forEach(item => {
            lang_select.innerHTML += `<option value="${item.code}">${item.code} - ${item.label}</option>`
        })

        console.log('event', e)
    });
    xhr.addEventListener("error", e => {
        console.log('request failed', e)
    });
    xhr.addEventListener("abort", e => {
        console.log("request cancelled!")
    });

    xhr.send();

    console.log('get lang list sent!')
}

function _(id) {
    return document.getElementById(id)
}

function onSubmit(ev) {

    ev.preventDefault();
    console.log('onSubmit()')

    // ext
    var file_input = document.getElementById("img_data")
    const ext = file_input.value.split('.').pop()
    console.log('file_input.value.split(.).pop()', ext)


    var formData = new FormData(document.getElementById("myform"))
    formData.append("app_token", app_token);
    formData.append("img_ext", ext);
    formData.append("output_json", "true");
    formData.append("output_pdf", "true");

    var url = api_url + "/ocr";

    console.log('POST', url)

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);

    xhr.onreadystatechange = function () { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log('request complete');
            console.log('status', xhr.status);
            console.log('statusText', xhr.statusText);

            var res = JSON.parse(xhr.response);
            const data = res.data;

            console.log('data', data)
            _("output_text").innerHTML = data.text;
            _("output_json").innerHTML = JSON.stringify(data.json);
        }
    }

    xhr.send(formData);

    console.log('req sent!')



}

