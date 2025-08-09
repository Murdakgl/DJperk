const ham = document.getElementById('hamburger');
const mobile = document.getElementById('mobileMenu');
ham && ham.addEventListener('click', () => {
  const open = mobile.style.display === 'block';
  mobile.style.display = open ? 'none' : 'block';
  mobile.setAttribute('aria-hidden', open ? 'true' : 'false');
});

(function(){
  const root = getComputedStyle(document.documentElement).getPropertyValue('--bg-image');
  if(root.includes('PATH_TO_YOUR_IMAGE.jpg')){
    document.querySelector('.note').textContent = "DOPLŇ CESTU K OBRÁZKU: v souboru style.css nahraď 'PATH_TO_YOUR_IMAGE.jpg' cestou k tvé fotce";
  }
})();