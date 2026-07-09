function calculate() {

    const name = document.getElementById("name").value;

    const adabi = parseFloat(document.getElementById("adabi").value);

    const ta3beer = parseFloat(document.getElementById("ta3beer").value);

    const result = document.getElementById("result");

    result.innerHTML = "";

    if (isNaN(adabi) || isNaN(ta3beer)) {
        result.style.background = "#f8d7da";
        result.style.color = "#721c24";
        result.innerHTML = "يرجى إدخال جميع الدرجات.";
        return;
    }

    if (adabi < 0 || adabi > 44) {
        result.style.background = "#f8d7da";
        result.style.color = "#721c24";
        result.innerHTML = "درجة الدراسات الأدبية يجب أن تكون بين 0 و44.";
        return;
    }

    if (ta3beer < 0 || ta3beer > 23) {
        result.style.background = "#f8d7da";
        result.style.color = "#721c24";
        result.innerHTML = "درجة التعبير يجب أن تكون بين 0 و23.";
        return;
    }

    const current = adabi + ta3beer;
    const need = 56 - current;

    if (need <= 0) {

        result.style.background = "#d4edda";
        result.style.color = "#155724";

        result.innerHTML =
        "<h3>🎉 مبروك " + name + "</h3>" +
        "<p>لقد ضمنت النجاح قبل امتحان الدراسات اللغوية.</p>" +
        "<p>مجموعك الحالي: <strong>" + current + "</strong> درجة.</p>";

    } else if (need <= 44) {

        result.style.background = "#fff3cd";
        result.style.color = "#856404";

        result.innerHTML =
        "<h3>الدرجة المطلوبة</h3>" +
        "<p>مجموعك الحالي: <strong>" + current + "</strong> درجة.</p>" +
        "<p>تحتاج إلى <strong>" + need + "</strong> درجة من 44 في امتحان الدراسات اللغوية.</p>";

    } else {

        result.style.background = "#f8d7da";
        result.style.color = "#721c24";

        result.innerHTML =
        "<h3>للأسف</h3>" +
        "<p>مجموعك الحالي: <strong>" + current + "</strong> درجة.</p>" +
        "<p>تحتاج إلى <strong>" + need + "</strong> درجة، وهذا أكبر من الدرجة النهائية (44)، لذلك النجاح غير ممكن.</p>";

    }

}