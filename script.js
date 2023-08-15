const trigger=document.querySelector('.trigger a')
const classadd =document.querySelector('.site')
trigger.addEventListener('click',function(){
    classadd.classList.toggle('mininav')
})





const submenu=document.querySelectorAll('.has-child > a');
submenu.forEach((menu)=>menu.addEventListener('click',toggle));

function toggle(){
    submenu.forEach((item) => item!=this?item.classList.remove('collapse'):null);
    if(this.parentNode.classList !='collapse'){
        this.parentNode.classList.toggle('collapse')

    }

}
/* add class on active link*/
const linkactive=document.querySelectorAll('.nav a');
function linkbg(){
    linkactive.forEach(link=> link.classList.remove('active'))
    this.classList.add('active')
}
linkactive.forEach(link=> link.addEventListener('click', linkbg))
   

