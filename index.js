

// const openModel=document.getElementById("open-model");
// const overlay = document.getElementById("overlay");
// const closenModel=document.getElementById("close-model");
// openModel.addEventListener("click", function(){
//  overlay.style.display="block";
// })
// closeModel.addEventListener("click", function(){
//   overlay.style.display="none";
//  })

document.getElementById("open-modal").addEventListener("click",function(){
  document.getElementById("overlay").style.display = "block";
})


document.getElementById("close-modal").addEventListener("click",function(){
  document.getElementById("overlay").style.display = "none";
})
