// console.log(123);
/*
for (var i = 0; i < 10; i++) {

}
console.log(i); //10*/
/*
!(function() {
    console.log(b); //undefined
    var b = 10;
    
    var b;
    console.log(b);
    b=10
})()*/
// for (let i = 0; i < 10; i++) {


// }
// console.log(i);
// btns lists
/*
for (var i = 0; i < btns.length; i++) {
    btn[i].setAttribute("idx", i);
    btn[i].onclick = function() {
        for (var j = 0; j < lists.length; j++) {
            lists[j].style.display = "none"
        }
        lists[this.getAttribute("idx")].style.display = "block";
    }
}*/
/*
for (let i = 0; i < btns.length; i++) {
    btn[i].onclick = function() {
        for (var j = 0; j < lists.length; j++) {
            lists[j].style.display = "none"
        }
        lists[i].style.display = "block";
    }
}*/
/*
!(function() {
    console.log(b);//暂时性死区
    let b = 10;
})()*/
/*
if (true) {
    let a = 4;
}
console.log(a); //4
{
    const a;
    a = 10
}
*/