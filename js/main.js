document.addEventListener("DOMContentLoaded", function(event) {
  
  // get my mobile button with querySelector
  var mobileMenuButton = document.querySelector('.mobile-menu-button')
  
  // get my nav with querySelector
  var navigation = document.querySelector('#menu')
  
  
  // add click listener
  mobileMenuButton.addEventListener('click', function () {
    
  // play with css classes
    
  mobileMenuButton.classList.toggle('active')
  navigation.classList.toggle('visible')
    
  })
  
  
})