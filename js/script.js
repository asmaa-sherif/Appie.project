

// Current year in footer
var footerYear = document.querySelector(".footer-year");
var currentYear = new Date().getFullYear();
// console.log(currentYear);
footerYear.textContent = currentYear;


// nav menu in mobile
// .nav-mobile-list
// .nav-mobile-container

// Mobile navigation
var mobileMenu = document.querySelector(".mobile-icons");
var header = document.querySelector(".nav-header");
header.addEventListener("click" , function(){
  header.classList.toggle("open-nav")
})


var allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function(link){
link.addEventListener("click" , function(e){
  console.log(e);
  e.preventDefault();


  // scroll to top
  const href = link.getAttribute("href")
  if(href === "#")
  window.scrollTo({
    top : 0,
    behavior : "smooth",
  });


  // scroll to other links
  if(href  !== '#' && href.startsWith('#')){
    const section = document.querySelector(href);
    console.log(section)
     section.scrollIntoView({behavior:'smooth'})
  }

  // close mobile navigation
  if(link.classList.contains('nav-item'))
  header.classList.toggle("open-nav")


})
})

const fixedNav = document.querySelector(".hero");

const observe = new IntersectionObserver( (entries) => {
const ent = entries[0];
console.log(ent);

if(!ent.isIntersecting)
{
  document.body.classList.add('sticky');
}

if(ent.isIntersecting)
{
  document.body.classList.remove('sticky');

}



} ,  {

  root:null,
  threshold: 0,
  rootMargin: '-90px',

  
})

observe.observe(fixedNav);