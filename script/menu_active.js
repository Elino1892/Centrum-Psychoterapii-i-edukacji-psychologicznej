$(document).ready(function ($) {
  let url = window.location.href;
  // console.log(url);
  let activePage = url;
  $('.menu-desktop a').each(function () {
      var linkPage = this.href;
      if (activePage == linkPage) {
          $(this).closest("a").addClass("current_page");
          // $(this).find("i").attr('id', 'current_page_border');
      }
  });
});