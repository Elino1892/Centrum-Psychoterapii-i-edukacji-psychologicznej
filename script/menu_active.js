$(document).ready(function ($) {
  let url = window.location.href;
  if(url == 'https://centrum-psychoterapii.herokuapp.com/')
  {
    $('.menu-desktop .menu-desktop__item--main').addClass("current_page");
    $('.menu-mobile .menu-mobile__item--main').addClass("current_page");
  }
  // console.log(url);
  let activePage = url;
  $('.menu-desktop a, .menu-mobile a').each(function () {
      var linkPage = this.href;
    if (activePage == linkPage) {
      $(this).closest("a").addClass("current_page");
    }
  });

  

  // $('.menu-mobile a').each(function () {
  //     var linkPage = this.href;
  //     if (activePage == linkPage) {
  //         $(this).closest("a").addClass("current_page");
  //         // $(this).find("i").attr('id', 'current_page_border');
  //     }
  // });
  
});

