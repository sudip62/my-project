
let contant =document.querySelector('.contantdiv');


let item = [
   {   id: '001',
    video:'videos/Om meditation _ relax _ stress free _ healing body and soul, inner peace_Symphony of Spiritual Sound.mp4',
        
    },
    {   id: '002',
       video:'videos/videoplayback chundra chura.mp4',
    },
     {   id: '003',
        video:'videos/videoplayback 2.mp4',
    },
     {   id: '004',
        video:'videos/videoplayback 3.mp4',
    },
      {   id: '005',
        video:'videos/videoplayback 4.mp4',
    },
      {   id: '006',
        video:'videos/videoplayback 5.mp4',
    },
      {   id: '007',
        video:'videos/videoplayback 6.mp4',
    },
      {   id: '008',
        video:'videos/videoplayback 7.mp4',
    },
      {   id: '009',
        video:'videos/videoplayback 8.mp4',
    },
      {   id: '10',
        video:'videos/videoplayback 9.mp4',
    },
      {   id: '11',
        video:'videos/videoplayback 10.mp4',
    },
      {   id: '12',
        video:'videos/videoplayback 11.mp4',
    },
      {   id: '13',
        video:'videos/videoplayback 12.mp4',
    },
      {   id: '14',
        video:'videos/videoplayback 13.mp4',
    },
      {   id: '15',
        video:'videos/videoplayback 14.mp4',
    },
      {   id: '16',
        video:'videos/videoplayback 15.mp4',
    },
      
    {   id: '17',
        video:'videos/videoplayback 1.mp4',
    },
    {   id: '18',
        video:'videos/videoplayback f.mp4',
    },
]

item.forEach(item=>{
    contant.innerHTML+=` <div class="video"><video controls src="${item.video}"></video></div>`
})


function closediv(){
  contant.classList.add("disnone")
  contant.classList.remove("disblock")
}
function opendiv(){
  contant.classList.add("disblock")
}