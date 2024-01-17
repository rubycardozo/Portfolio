
$(document).ready(function(){
    $('#ruby').animate({
        marginTop: '5vh'
    }, 900)
    const subtitle = document.getElementById('subtitle')
    setTimeout(function(){
        subtitle.style.opacity = '1';
    }, 1000)
    const line = document.getElementById('line')
    setTimeout(function(){
        line.style.width = '50vw';
    }, 1100)

    setTimeout(function(){
        $('#image').animate({
            marginRight: 0
        }, 900)
    }, 1300)
    

    projects = ['#one','#two','#three','#four','#five']
    var loadTime = 900;
    var incProj = 400;

    for(let i =0;i<projects.length;i++){
        
        setTimeout(function(){
            $(projects[i]).animate({
                marginLeft: 0
            }, 900 )
        }, (loadTime + incProj*(i+1)))
    }
    const workhead = document.getElementById('workhead')
    const line2 =document.getElementById('line2')
    setTimeout(function(){
        workhead.style.opacity = '1';
        line2.style.width = '30vw';

    }, loadTime + incProj*5)

});




$(document).ready(function () {
    let imgy = document.getElementById('imgy')
    let p = document.getElementById('p')
    $('#one').hover(
        function () {
            $('#imgy').attr('src','images/noble.jpeg')
            p.innerHTML = 'Web Development • Web Design'
            });
  $('#two').hover(
        function () {
            $('#imgy').attr('src','images/Xtrafit.jpeg')
            p.innerHTML = 'UX/UI Design • UX Research'
            });
   $('#three').hover(
        function () {
            $('#imgy').attr('src','images/portfolio.png')
            p.innerHTML = 'Web Development • Web Design'
            });  
    $('#four').hover(
        function () {
            $('#imgy').attr('src','images/weathernow.png')
            p.innerHTML = 'Illustration • Digital Art'
            });   
    $('#five').hover(
        function () {
            $('#imgy').attr('src','images/instagram.png')
            p.innerHTML = 'Illustration • Digital Art'
            });                           
});

// JavaScript code to toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
  const mobileMenu = document.getElementById('mobile-menu');

  mobileMenuButton.addEventListener('click', function () {
    const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
    mobileMenuButton.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('hidden');
  });
});

    

