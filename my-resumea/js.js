let hombtn = document.querySelector('#Home')
 let om = document.querySelector('.om')

 let a = 0;
hombtn.addEventListener('click', function(){
if(a==0){
    om.style.display = 'block';
     a=1;
}else if(a==1) {
    om.style.display = 'none';
    a=0;
}

});


let sinbtn = document.querySelector('.login-btn') ;
let oo = localStorage.getItem('name')


if (oo == null){
    sinbtn.innerHTML ='Sign-Up'
}else{
    sinbtn.innerHTML ='👦🏻 Profile '
}

