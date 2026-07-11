function calculate() {

let name = document.getElementById("name").value.trim();

let electric = Number(document.getElementById("electric").value);

let result = document.getElementById("result");

if (isNaN(electric)) {
    result.innerHTML = "<h3>⚠️ يرجى إدخال درجة الفيزياء الكهربائية.</h3>";
    return;
}

if (electric < 0 || electric > 84) {
    result.innerHTML = "<h3>⚠️ درجة الفيزياء الكهربائية يجب أن تكون بين 0 و84.</h3>";
    return;
}

let current = electric;

let total = 140;
let pass = 70;
let exam = 56;

let need = pass - current;

let html = "";

if (name !== "") {
    html += "<h2>الطالب: " + name + "</h2>";
}

html += "<hr>";

html += "<p><b>المجموع الحالي:</b> " + current + " من " + total + "</p>";

if (need <= 0) {

    html += "<h2 style='color:green;'>✅ مبروك</h2>";
    html += "<p>لقد ضمنت النجاح قبل أداء امتحان الفيزياء الميكانيكية.</p>";
    need = 0;

} else if (need <= exam) {

    html += "<h2 style='color:#c58b00;'>🟡 النجاح ممكن</h2>";
    html += "<p>تحتاج إلى <b>" + need + "</b> درجة من <b>56</b> في امتحان الفيزياء الميكانيكية.</p>";

} else {

    html += "<h2 style='color:red;'>❌ النجاح غير ممكن</h2>";
    html += "<p>تحتاج إلى <b>" + need + "</b> درجة، بينما الدرجة النهائية لامتحان الفيزياء الميكانيكية هي <b>56</b> درجة.</p>";

}

html += "<hr>";

html += "<table border='1' width='100%' style='border-collapse:collapse;text-align:center;'>";

html += "<tr><th>البيان</th><th>الدرجة</th></tr>";

html += "<tr><td>الفيزياء الكهربائية</td><td>" + electric + " / 84</td></tr>";

html += "<tr><td><b>المجموع الحالي</b></td><td><b>" + current + " / 140</b></td></tr>";

html += "<tr><td><b>المطلوب في امتحان الفيزياء الميكانيكية</b></td><td><b>" + need + " / 56</b></td></tr>";

html += "</table>";

result.innerHTML = html;

}