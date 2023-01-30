function doFirst(){
    var button = document.getElementById('button');
    button.addEventListener("click",save,false);
    display();
}
function save(){
    var key = document.getElementById("key").value;
    var obj=[
        key,
    ];
      localStorage.setItem(key, JSON.stringify(obj));
    //   let items= JSON.parse(localStorage.getItem(obj));
    display();
    key.value="";
 }
 let c = 1
 function display(){
     var table = document.getElementById("table");
  
     for(var i = 0; i <localStorage.length; i++){
         var a = localStorage.key(i);
         var b = JSON.parse(localStorage.getItem(a)); 
          g = c++;
         table.innerHTML +=`<tr id=${g} class='mb-5'>
         <td>${g}</td><td>${b}</td>
            <td>
                 <button class='btn btn-success mx-5' onclick='done(this.id)'     type='button' id=${g}>Done</button>
                 <button class='btn btn-warning'      onclick='doing(this.id)'    type='button' id=${g}>Doing</button>
                 <button class='btn btn-danger mx-5'  onclick='todo(this.id)'     type='button' id=${g}>Todo</button>
            </td>
         </tr>`
         } 
     }

window.addEventListener("load",doFirst,false);

function done(x) {
        document.getElementById(x).style.background = 'green';
    
 }
//  console.log(done(x));

function doing(x) {
    document.getElementById(x).style.background = 'yellow';
 }
// console.log(doing(x));

function todo(x) {
    document.getElementById(x).style.background = 'red';
 }
//  console.log(todo(x));
