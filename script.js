function calculate() {

let adab = Number(document.getElementById("adab").value);
let ta3beer = Number(document.getElementById("ta3beer").value);

if (adab < 0 || adab > 44) {
alert("درجة الدراسات الأدبية يجب أن تكون بين 0 و44");
return;
}

if (ta3beer < 0 || ta3beer > 23) {
alert("درجة التعبير يجب أن تكون بين 0 و23");
return;
}

let current = adab + ta3beer;

let required = 56 - current;

let message = "";

if (required <= 0) {

message = `
<div class="card">
<h2 style="color:green;">🎉 مبروك</h2>

<p>
مجموعك الحالي: <b>${current}</b> من 67
</p>

<p>
لقد ضمنت النجاح في المادة حتى قبل امتحان الدراسات اللغوية.
</p>
</div>
`;

}

else if(required > 44){

message = `
<div class="card">

<h2 style="color:red;">للأسف</h2>

<p>
مجموعك الحالي: <b>${current}</b> من 67
</p>

<p>

تحتاج إلى <b>${required}</b> درجة.

</p>

<p style="color:red">

وهذا غير ممكن لأن امتحان الدراسات اللغوية من 44 درجة فقط.

</p>

</div>
`;

}

else{

message = `
<div class="card">

<h2 style="color:#1565c0">

النتيجة

</h2>

<p>

مجموعك الحالي:

<b>${current}</b>

من 67

</p>

<p>

للنجاح تحتاج إلى

</p>

<h1 style="color:green">

${required}

درجة

</h1>

<p>

في امتحان الدراسات اللغوية.

</p>

</div>

`;

}

document.getElementById("result").innerHTML = message;

}