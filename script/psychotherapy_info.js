$(document).on('scroll', function () {

  const windowHeight = $(window).height();
  // console.log(`windowHeight: ${windowHeight}`);
  const scrollValue = $(this).scrollTop();
  // console.log(`scrollValue: ${scrollValue}`);
  const windowWidth =  $(window).width();
  // console.log(`windowWidth: ${windowWidth}`);
  //Pierwsza sekcja
  // const $section = $('.psychotherapy-info');
  const $section = $('.psychotherapy-info');
  // console.log(scrollValue);
  const $sectionFromTop = $section.offset().top
  // console.log(`sectionFromTop: ${$sectionFromTop}`);
  const $sectionHeight = $section.outerHeight()
  // console.log(`sectionHeight: ${$sectionHeight}`);

  if(windowWidth < 800){

  if (scrollValue > $sectionFromTop + $sectionHeight / 4 - windowHeight) {
    $section.addClass('psychotherapy-info__active');
  }

  if (scrollValue < $sectionFromTop - windowHeight) {
    $('.psychotherapy-info').removeClass('psychotherapy-info__active');
  }


  }

  else if(windowWidth > 800 && windowWidth < 1200){
    if (scrollValue > $sectionFromTop + $sectionHeight / 3 - windowHeight) {
      $section.addClass('psychotherapy-info__active');
    }
    if (scrollValue < $sectionFromTop - windowHeight) {
      $('.psychotherapy-info').removeClass('psychotherapy-info__active');
    }
  }

  else {
  if (scrollValue > $sectionFromTop + $sectionHeight / 2 - windowHeight) {
    $section.addClass('psychotherapy-info__active');
  }

  if (scrollValue < $sectionFromTop - $sectionHeight) {
    $('.psychotherapy-info').removeClass('psychotherapy-info__active');
  }


  }
})