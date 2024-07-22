let new_window;
dl_btn = document.getElementById("download")
dl_btn.addEventListener("click", Download)
form = document.getElementById("Form")
form.addEventListener("submit", event => {
    if (!document.getElementById("email").value) {
        event.preventDefault();
        alert("Please enter email")
    }
    else {
        new_page()
    }
});
function new_page() {
    new_window = window.open("about:blank")
    new_window.document.write("<table id='table' width='95%' border='1' cellpadding='5' cellspacing='0' align='center'>")
    new_window.document.write("<tr><td>Day of the week</td><td>Breakfast</td><td>Snack1</td><td>Lunch</td><td>Snack2</td><td>Dinner</td></tr>")
    for (let x = 1; x < 36; x++) {
        if (x == 1) {
            new_window.document.write("<td>Monday</td>")
        }
        else if (x == 6) {
            new_window.document.write("<td>Tuesday</td>")
        }
        else if (x == 11) {
            new_window.document.write("<td>Wednesday</td>")
        }
        else if (x == 16) {
            new_window.document.write("<td>Thursday</td>")
        }
        else if (x == 21) {
            new_window.document.write("<td>Friday</td>")
        }
        else if (x == 26) {
            new_window.document.write("<td>Saturday</td>")
        }
        else if (x == 31) {
            new_window.document.write("<td>Sunday</td>")
        }
        new_window.document.write("<td class='value'>")
        data = document.getElementById(x.toString()).value
        if (!data) {
            data = "N/A"
        }
        new_window.document.write(data)
        new_window.document.write("</td>")
        if (x % 5 == 0) {
            new_window.document.write("</tr>")
            if (x != 35) {
                new_window.document.write("<tr>")
            }
        }
    }
}
// I can't get downloading to work at all I've tried for 30 inutes using several methods
function Download() {
    html2pdf(new_window.document.body)
}