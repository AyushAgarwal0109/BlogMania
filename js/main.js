const responsive = {
  0: {
    items: 1,
  },
  320: {
    items: 1,
  },
  560: {
    items: 2,
  },
  960: {
    items: 3,
  },
};

$(document).ready(function () {
  $nav = $('.nav');
  $toggleCollapse = $('.toggle-collapse');

  /** click event on toggle menu */
  $toggleCollapse.click(function () {
    $nav.toggleClass('collapse');
  });

  // owl-crousel for blog
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    dots: false,
    nav: true,
    navText: [
      $('.owl-navigation .owl-nav-prev'),
      $('.owl-navigation .owl-nav-next'),
    ],
    responsive: responsive,
  });

  // click to scroll top
  $('.move-up span').click(function () {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // AOS Instance
  AOS.init();
});

document.querySelector('.form-btn').addEventListener('click', async (e) => {
  e.preventDefault();

  const data = {
    email: document.querySelector('.input-element').value,
  };

  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  try {
    const res = await fetch('http://localhost:5000/subscribe', config);
    const resData = await res.json();

    console.log(resData);
  } catch (error) {
    console.log(error);
  }
});
