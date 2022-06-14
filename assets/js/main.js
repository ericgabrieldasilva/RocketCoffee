const buttonOpenMenuMobile = document.querySelector('.open-menu')
const buttonCloseMenuMobile = document.querySelector('.close-menu')

buttonOpenMenuMobile.addEventListener('click', function(){
  document.body.classList.add('menu-expanded')
})

buttonCloseMenuMobile.addEventListener('click', function(){
  document.body.classList.remove('menu-expanded')
})
