



    let profilepic = document.getElementById("profile-pic")
    let inputfile = document.getElementById("input-file")
   
     
     let a;
    inputfile.onchange = function(){
       a= profilepic.src = URL.createObjectURL(inputfile.files[0]);
       
    }
  

let nam = document.querySelector('#na')
let Gm = document.querySelector('#em')
let Pa = document.querySelector('#pas')
let buton = document.querySelector('#lobt')

let nami = document.querySelector('.spnm')
let gami = document.querySelector('.sem')
let pasi = document.querySelector('.sppa')

let dv1 = document.querySelector('.loginpage')




buton.addEventListener('click', function(){
let i = nam.value;
let G = Gm.value;
let P = Pa.value;


  localStorage.setItem('img', a)




if (i.length < 5){
   nami.style.visibility= 'visible';

}else{
    nami.style.visibility= 'hidden'
  localStorage.setItem('name', i);
}


if(G.length < 14){
     
     gami.style.visibility= 'visible';
   localStorage.clear()
}else{
     
     gami.style.visibility= 'hidden';
       localStorage.setItem('gmail', G);
   
} 

if (P.length < 6){
     pasi.style.visibility= 'visible';
        localStorage.clear()
}else{
     pasi.style.visibility= 'hidden';
}
});



let img =localStorage.getItem('img')
let user = localStorage.getItem('name')
let gamil = localStorage.getItem('gmail')





let dc =  document.querySelector('.div2')
    
     function see(){
if (localStorage.getItem("name") !== null) {
  // The item with "yourKeyName" exists in local storage
  dc.innerHTML=`
    <img class="img2" src="${img}" alt="">
    <h1 class ="name2"> ${user} </h1>
    <h2 class ="gmail2"> ${gamil} </h2>
   <button class ="dasbord" onclick="history.back()">Dasbord</button>
     <button class="logout" onclick ="localStorage.clear(), location.reload()">Log out</button>
    `

 dc.style.visibility= 'visible';
  console.log("Item exists!");
} else {
  // The item with "yourKeyName" does not exist in local storage
   dc.style.visibility= 'hidden';
  console.log("Item does not exist.");
}
     }

     see();


  