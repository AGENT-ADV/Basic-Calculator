function add(){
    let f = document.getElementById("fname").value;
    let s = document.getElementById("sname").value;
  
    let ans = parseFloat(f) + parseFloat(s);
    document.getElementById("ans").value = ans;
}
function sub(){
    let f = document.getElementById("fname").value;
    let s = document.getElementById("sname").value;
  
    let ans = parseFloat(f) - parseFloat(s);
    document.getElementById("ans").value = ans;
}
function mul(){
    let f = document.getElementById("fname").value;
    let s = document.getElementById("sname").value;
  
    let ans = parseFloat(f) * parseFloat(s);
    document.getElementById("ans").value = ans;
}
function div(){
    let f = document.getElementById("fname").value;
    let s = document.getElementById("sname").value;
  
    let ans = parseFloat(f) / parseFloat(s);
    document.getElementById("ans").value = ans;
}



