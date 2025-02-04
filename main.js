let menuMobileButton = document.getElementById('menu-mobile-btn')
let closeButton = document.getElementById('close-btn')
let menuMobile = document.getElementById('menu-mobile')

menuMobileButton.addEventListener('click', () => {
  menuMobile.classList.add('visible')
})

closeButton.addEventListener('click', () => {
  menuMobile.classList.remove('visible')
})