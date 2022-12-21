
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
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

















