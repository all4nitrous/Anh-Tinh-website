
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


//contact button (circular text)

const  textButtons = document.querySelectorAll('.contact_btn');

textButtons.forEach(textButton => {
    let text = textButton.querySelector('p');
    text.innerHTML = text.innerHTML.split('').map((character, index) => `<span style="transform: rotate(${index * 12}deg)">${character}</span>`).join('')
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true, bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`, breakpoints: { 599: {
        slidesPerView: 2,
        spaceBetween: 40
      }, 
      1023: {
        slidesPerView: 3,
        spaceBetween: 60,
      }

      }
    },
  });

const nav = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#nav_toggle-open');
const closeNavBtn = document.querySelector('#nav_toggle-close');

const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block';
}




openNavBtn.addEventListener('click', openNav);


const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none';
}




closeNavBtn.addEventListener('click', closeNav);

nav.querySelectorAll('li a').forEach(navLink => {
  navLink.addEventListener('click', () => closeNav);
})




	if(document.body.clientWidth < 1340) {
	  nav.querySelectorAll('li a').forEach(navLink => {
	    navLink.addEventListener('click', () => closeNav);
	  })
	}
	





