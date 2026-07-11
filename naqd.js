function calculate(){

let name=document.getElementById("name").value.trim();

let nahw=Number(document.getElementById("nahw").value);

let adab=Number(document.getElementById("adab").value);

let ta3beer=Number(document.getElementById("ta3beer").value);

let result=document.getElementById("result");

if(isNaN(nahw)||isNaN(adab)||isNaN(ta3beer)){
result.innerHTML="<h3>⚠ يرجى إدخال جميع الدرجات.</h3>";
return;
}

if(nahw<0||nahw>76){
result.innerHTML="<h3>⚠ درجة النحو والصرف والإملاء يجب أن تكون بين 0 و76.</h3>";
return;
}

if(adab<0||adab>50){
result.innerHTML="<h3>⚠ درجة الأدب والنصوص يجب أن تكون بين 0 و50.</h3>";
return;
}

if(ta3beer<0||ta3beer>24){
result.innerHTML="<h3>⚠ درجة التعبير يجب أن تكون بين 0 و24.</h3>";
return;
}

let current=nahw+adab+ta3beer;

let pass=98;

let total=196;

let exam=46;

let need=pass-current;

let html="";

if(name!=""){
html+="<h2>الطالب : "+name+"</h2>";
}

html+="<hr>";

html += "<p><b>المجموع الحالي:</b> " + current + " من " + total + "</p>";
if (need <= 0) {

html+="<h2 style='color:green;'>✅ مبروك</h2>";

html+="<p>لقد ضمنت النجاح قبل امتحان النقد والمطالعة.</p>";

need=0;

}else if(need<=exam){

html+="<h2 style='color:#c58b00;'>🟡 النجاح ممكن</h2>";

html+="<p>تحتاج إلى <b>"+need+"</b> درجة من <b>"+exam+"</b> في امتحان النقد والمطالعة.</p>";

}else{

html+="<h2 style='color:red;'>❌ النجاح غير ممكن</h2>";

html+="<p>تحتاج إلى <b>"+need+"</b> درجة، بينما الدرجة النهائية لامتحان النقد والمطالعة هي <b>"+exam+"</b>.</p>";

}

html+="<hr>";

html+="<table>";

html+="<tr><th>البيان</th><th>الدرجة</th></tr>";

html+="<tr><td>النحو والصرف والإملاء</td><td>"+nahw+" / 76</td></tr>";

html+="<tr><td>الأدب والنصوص</td><td>"+adab+" / 50</td></tr>";

html+="<tr><td>التعبير</td><td>"+ta3beer+" / 24</td></tr>";

html+="<tr><td><b>المجموع الحالي</b></td><td><b>"+current+" من "+total+"</b></td></tr>";

html+="<tr><td><b>المطلوب في النقد والمطالعة</b></td><td><b>"+need+" / "+exam+"</b></td></tr>";

html+="</table>";

result.innerHTML=html;
}