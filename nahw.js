function calculate() {

let name = document.getElementById("name").value.trim();

let adab = Number(document.getElementById("adab").value);

let ta3beer = Number(document.getElementById("ta3beer").value);

let result = document.getElementById("result");

if (isNaN(adab) || isNaN(ta3beer)) {
    result.innerHTML = "<h3>⚠️ يرجى إدخال جميع الدرجات.</h3>";
    return;
}

if (adab < 0 || adab > 44) {
    result.innerHTML = "<h3>⚠️ درجة الدراسات الأدبية يجب أن تكون بين 0 و44.</h3>";
    return;
}

if (ta3beer < 0 || ta3beer > 24) {
    result.innerHTML = "<h3>⚠️ درجة التعبير يجب أن تكون بين 0 و24.</h3>";
    return;
}

let current = adab + ta3beer;

let total = 112;
let pass = 56;
let exam = 44;

let need = pass - current;

let html = "";

if (name !== "") {
    html += "<h2>الطالب: " + name + "</h2>";
}

html += "<hr>";
html += "<p><b>المجموع الحالي:</b> " + current + " من " + total + "</p>";

if (need <= 0) {

    html += "<h2 style='color:green;'>✅ مبروك</h2>";
    html += "<p>لقد ضمنت النجاح قبل امتحان النحو والصرف والإملاء.</p>";
    need = 0;

} else if (need <= exam) {

    html += "<h2 style='color:#c58b00;'>🟡 النجاح ممكن</h2>";
    html += "<p>تحتاج إلى <b>" + need + "</b> درجة في امتحان النحو والصرف والإملاء من أصل <b>44</b>.</p>";

} else {

    html += "<h2 style='color:red;'>❌ النجاح غير ممكن</h2>";
    html += "<p>تحتاج إلى <b>" + need + "</b> درجة بينما الدرجة النهائية للامتحان هي <b>44</b>.</p>";

}

html += "<hr>";

html += "<table border='1' width='100%' style='border-collapse:collapse;text-align:center;'>";

html += "<tr><th>البيان</th><th>الدرجة</th></tr>";

html += "<tr><td>الدراسات الأدبية</td><td>" + adab + " / 44</td></tr>";

html += "<tr><td>التعبير</td><td>" + ta3beer + " / 24</td></tr>";

html += "<tr><td><b>المجموع الحالي</b></td><td><b>" + current + " / 112</b></td></tr>";

html += "<tr><td><b>المطلوب في امتحان النحو والصرف والإملاء</b></td><td><b>" + need + " / 44</b></td></tr>";

html += "</table>";

result.innerHTML = html;

}