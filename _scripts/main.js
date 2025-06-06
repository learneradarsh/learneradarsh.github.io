$(function() {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 19 || hours <= 7; // between 7pm and 7am
  const body = document.querySelector('body');
  /* theme toggle removed */

  if (night) {
    body.classList.add('night');
  }

  const introHeight = document.querySelector('.intro').offsetHeight;
  const topButton = document.getElementById('top-button');
  const $topButton = $('#top-button');

  window.addEventListener(
    'scroll',
    function() {
      if (window.scrollY > introHeight) {
        $topButton.fadeIn();
      } else {
        $topButton.fadeOut();
      }
    },
    false
  );

  topButton.addEventListener('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  const hand = document.querySelector('.emoji.wave-hand');

  function waveOnLoad() {
    hand.classList.add('wave');
    setTimeout(function() {
      hand.classList.remove('wave');
    }, 2000);
  }

  setTimeout(function() {
    waveOnLoad();
  }, 1000);

  hand.addEventListener('mouseover', function() {
    hand.classList.add('wave');
  });

  hand.addEventListener('mouseout', function() {
    hand.classList.remove('wave');
  });

  window.sr = ScrollReveal({
    reset: false,
    duration: 600,
    easing: 'cubic-bezier(.694,0,.335,1)',
    scale: 1,
    viewFactor: 0.3,
  });

  sr.reveal('.background');
  sr.reveal('.skills');
  sr.reveal('.experience', { viewFactor: 0.2 });
  sr.reveal('.featured-projects', { viewFactor: 0.1 });
  sr.reveal('.other-projects', { viewFactor: 0.05 });

  const carousel = document.querySelector('.project-carousel');
  if (carousel) {
    const slides = carousel.querySelectorAll('.project');
    let index = 0;
    slides[index].classList.add('active');
    const showSlide = i => {
      slides[index].classList.remove('active');
      index = (i + slides.length) % slides.length;
      slides[index].classList.add('active');
    };
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    if (prevBtn) prevBtn.addEventListener('click', () => showSlide(index - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => showSlide(index + 1));
  }

  const starCanvas = document.getElementById('star-canvas');
  if (starCanvas) {
    let width = starCanvas.width = window.innerWidth;
    let height = starCanvas.height = window.innerHeight;
    const ctx = starCanvas.getContext('2d');
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, width, height);
      const offset = window.scrollY * 0.2;
      ctx.fillStyle = '#0ff';
      stars.forEach(s => {
        const y = (s.y + offset) % height;
        ctx.fillRect(s.x, y, s.size, s.size);
      });
    };

    drawStars();
    window.addEventListener('scroll', drawStars);
    window.addEventListener('resize', () => {
      width = starCanvas.width = window.innerWidth;
      height = starCanvas.height = window.innerHeight;
      drawStars();
    });
  }
});
