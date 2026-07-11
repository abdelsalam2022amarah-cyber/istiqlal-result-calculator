function calculate() {

// أعمال السنة
let islam_work = Number(document.getElementById("islam_work").value) || 0;
let arabic_work = Number(document.getElementById("arabic_work").value) || 0;
let english_work = Number(document.getElementById("english_work").value) || 0;
let it_work = Number(document.getElementById("it_work").value) || 0;
let math_work = Number(document.getElementById("math_work").value) || 0;
let stat_work = Number(document.getElementById("stat_work").value) || 0;
let physics_work = Number(document.getElementById("physics_work").value) || 0;
let chem_work = Number(document.getElementById("chem_work").value) || 0;
let bio_work = Number(document.getElementById("bio_work").value) || 0;

// درجات الامتحان
let islam_exam = Number(document.getElementById("islam_exam").value) || 0;
let arabic_exam = Number(document.getElementById("arabic_exam").value) || 0;
let english_exam = Number(document.getElementById("english_exam").value) || 0;
let it_exam = Number(document.getElementById("it_exam").value) || 0;
let math_exam = Number(document.getElementById("math_exam").value) || 0;
let stat_exam = Number(document.getElementById("stat_exam").value) || 0;
let physics_exam = Number(document.getElementById("physics_exam").value) || 0;
let chem_exam = Number(document.getElementById("chem_exam").value) || 0;
let bio_exam = Number(document.getElementById("bio_exam").value) || 0;
// مجموع كل مادة
let islam_total = islam_work + islam_exam;
let arabic_total = arabic_work + arabic_exam;
let english_total = english_work + english_exam;
let it_total = it_work + it_exam;
let math_total = math_work + math_exam;
let stat_total = stat_work + stat_exam;
let physics_total = physics_work + physics_exam;
let chem_total = chem_work + chem_exam;
let bio_total = bio_work + bio_exam;

// عرض مجموع كل مادة داخل الجدول
document.getElementById("islam_total").textContent = islam_total;
document.getElementById("arabic_total").textContent = arabic_total;
document.getElementById("english_total").textContent = english_total;
document.getElementById("it_total").textContent = it_total;
document.getElementById("math_total").textContent = math_total;
document.getElementById("stat_total").textContent = stat_total;
document.getElementById("physics_total").textContent = physics_total;
document.getElementById("chem_total").textContent = chem_total;
document.getElementById("bio_total").textContent = bio_total;
// التحقق من الحدود القصوى للدرجات

if (islam_work > 24 || islam_exam > 56) {
    alert("خطأ في درجات التربية الإسلامية.");
    return;
}

if (arabic_work > 48 || arabic_exam > 112) {
    alert("خطأ في درجات اللغة العربية.");
    return;
}

if (english_work > 48 || english_exam > 112) {
    alert("خطأ في درجات اللغة الإنجليزية.");
    return;
}

if (it_work > 24 || it_exam > 56) {
    alert("خطأ في درجات تقنية المعلومات.");
    return;
}

if (math_work > 60 || math_exam > 140) {
    alert("خطأ في درجات الرياضيات.");
    return;
}

if (stat_work > 24 || stat_exam > 56) {
    alert("خطأ في درجات الإحصاء.");
    return;
}

if (physics_work > 60 || physics_exam > 140) {
    alert("خطأ في درجات الفيزياء.");
    return;
}

if (chem_work > 48 || chem_exam > 112) {
    alert("خطأ في درجات الكيمياء.");
    return;
}

if (bio_work > 48 || bio_exam > 112) {
    alert("خطأ في درجات الأحياء.");
    return;
}
// حساب المجاميع

let workTotal =
islam_work +
arabic_work +
english_work +
it_work +
math_work +
stat_work +
physics_work +
chem_work +
bio_work;

let examTotal =
islam_exam +
arabic_exam +
english_exam +
it_exam +
math_exam +
stat_exam +
physics_exam +
chem_exam +
bio_exam;

let grandTotal = workTotal + examTotal;

// حساب النسب

let workPercent = (workTotal / 384) * 100;

let examPercent = (examTotal / 896) * 100;

let average = (grandTotal / 1280) * 100;

// تحديد التقدير

let grade = "";

if (average >= 85) {
    grade = "🟢 ممتاز";
}
else if (average >= 75) {
    grade = "🔵 جيد جداً";
}
else if (average >= 65) {
    grade = "🟡 جيد";
}
else if (average >= 50) {
    grade = "🟠 مقبول";
}
else {
    grade = "🔴 راسب";
}

let result = document.getElementById("result");

let html = "";
html += "<h2>📊 النتائج النهائية</h2>";

html += "<table border='1' width='100%' style='border-collapse:collapse;text-align:center;'>";

html += "<tr>";
html += "<th>البيان</th>";
html += "<th>النتيجة</th>";
html += "</tr>";

html += "<tr>";
html += "<td>📚 مجموع أعمال السنة</td>";
html += "<td>" + workTotal + " / 384</td>";
html += "</tr>";

html += "<tr>";
html += "<td>📈 نسبة أعمال السنة</td>";
html += "<td>" + workPercent.toFixed(2) + " %</td>";
html += "</tr>";

html += "<tr>";
html += "<td>📝 مجموع الامتحانات</td>";
html += "<td>" + examTotal + " / 896</td>";
html += "</tr>";

html += "<tr>";
html += "<td>📈 نسبة الامتحانات</td>";
html += "<td>" + examPercent.toFixed(2) + " %</td>";
html += "</tr>";
html += "<tr>";
html += "<td><b>🎓 المجموع الكلي</b></td>";
html += "<td><b>" + grandTotal + " / 1280</b></td>";
html += "</tr>";

html += "<tr>";
html += "<td><b>📊 المعدل العام</b></td>";
html += "<td><b>" + average.toFixed(2) + " %</b></td>";
html += "</tr>";

html += "<tr>";
html += "<td><b>🏆 التقدير</b></td>";
html += "<td><b>" + grade + "</b></td>";
html += "</tr>";
html += "</table>";

html += "<br>";

html += "<div style='background:#e8f5e9;padding:15px;border-radius:10px;border:2px solid #4caf50;'>";

html += "<h3 style='color:#2e7d32;'>ملخص النتائج</h3>";

html += "<p><b>📚 مجموع أعمال السنة:</b> " + workTotal + " من 384</p>";

html += "<p><b>📝 مجموع الامتحانات:</b> " + examTotal + " من 896</p>";

html += "<p><b>🎓 المجموع الكلي:</b> " + grandTotal + " من 1280</p>";

html += "<p><b>📊 المعدل العام:</b> " + average.toFixed(2) + "%</p>";

html += "<p><b>🏆 التقدير:</b> " + grade + "</p>";

html += "</div>";
// عرض النتائج داخل الصفحة

result.innerHTML = html;}
function resetForm() 
function updateTotals() {

document.getElementById("islam_total").textContent =
(Number(document.getElementById("islam_work").value)||0)+
(Number(document.getElementById("islam_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("arabic_total").textContent =
(Number(document.getElementById("arabic_work").value)||0)+
(Number(document.getElementById("arabic_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("english_total").textContent =
(Number(document.getElementById("english_work").value)||0)+
(Number(document.getElementById("english_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("it_total").textContent =
(Number(document.getElementById("it_work").value)||0)+
(Number(document.getElementById("it_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("math_total").textContent =
(Number(document.getElementById("math_work").value)||0)+
(Number(document.getElementById("math_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("stat_total").textContent =
(Number(document.getElementById("stat_work").value)||0)+
(Number(document.getElementById("stat_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("physics_total").textContent =
(Number(document.getElementById("physics_work").value)||0)+
(Number(document.getElementById("physics_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("chem_total").textContent =
(Number(document.getElementById("chem_work").value)||0)+
(Number(document.getElementById("chem_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

document.getElementById("bio_total").textContent =
(Number(document.getElementById("bio_work").value)||0)+
(Number(document.getElementById("bio_exam").value)||0);
document.getElementById("islam_total").style.background =
islamValue<=80 ? "#dff0d8" : "#f8d7da";

}
{

let inputs = document.querySelectorAll("input[type='number']");

inputs.forEach(function(input) {
    input.value = "";
});

let totals = document.querySelectorAll(".totalCell");

totals.forEach(function(cell) {
    cell.textContent = "0";
});

document.getElementById("result").innerHTML = "";

}
document.querySelectorAll("input[type='number']").forEach(function(input){

input.addEventListener("input", updateTotals);

});


