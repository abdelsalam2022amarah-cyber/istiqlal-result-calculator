function calculate() {

    let name = document.getElementById("name").value.trim();

    let nahw = Number(document.getElementById("nahw").value);
    let adab = Number(document.getElementById("adab").value);
    let ta3beer = Number(document.getElementById("ta3beer").value);

    let result = document.getElementById("result");

    if (isNaN(nahw) || isNaN(adab) || isNaN(ta3beer)) {

        result.innerHTML = "⚠️ يرجى إدخال جميع الدرجات.";
        result.style.background = "#f8d7da";
        result.style.color = "#721c24";
        return;

    }

    if (nahw > 76 || nahw < 0) {

        result.innerHTML = "درجة النحو والصرف والإملاء يجب أن تكون بين 0 و76.";
        return;

    }

    if (adab > 50 || adab < 0) {

        result.innerHTML = "درجة الأدب والنصوص يجب أن تكون بين 0 و50.";
        return;

    }

    if (ta3beer > 24 || ta3beer < 0) {

        result.innerHTML = "درجة التعبير يجب أن تكون بين 0 و24.";
        return;

    }

    let current = nahw + adab + ta3beer;

    let need = 98 - current;

    let html = "";

    if(name!=""){
        html += "<h3>الطالب : " + name + "</h3>";
    }

    html += "<h3>المجموع الحالي : " + current + " من 150</h3>";

    if (need <= 0) {

        result.style.background = "#d4edda";
        result.style.color = "#155724";

        html += "<h2>🎉 مبروك</h2>";
        html += "<p>لقد ضمنت النجاح قبل امتحان النقد والمطالعة.</p>";

    }

    else if (need <= 46) {

        result.style.background = "#fff3cd";
        result.style.color = "#856404";

        html += "<h2>📘 تحتاج إلى " + need + " درجة</h2>";
        html += "<p>في امتحان النقد والمطالعة (من 46) للوصول إلى 98 درجة وتحقيق النجاح.</p>";

} else {

    result.style.background = "#f8d7da";
    result.style.color = "#721c24";

    html += "<h2>❌ لا يمكن تحقيق النجاح</h2>";
    html += "<p>تحتاج إلى " + need + " درجة، وهذا أكبر من الدرجة القصوى.</p>";
}

result.innerHTML = html;

}