

$(document).on('scroll', function () {



const wchichFile = (sectionsArray,str) => {

  const windowHeight = $(window).height();
  // console.log(`windowHeight: ${windowHeight}`);
  const scrollValue = $(this).scrollTop();
  // console.log(`scrollValue: ${scrollValue}`);
  const windowWidth =  $(window).width();
  // console.log(`windowWidth: ${windowWidth}`);
  //Pierwsza sekcja
  // const $section = $('.psychotherapy');
  // const $section = $('.psychotherapy');
  // $section.toArray();
  // const $section = $('.psychotherapy');

  // const isSectionsEmpty = (item) => {
  //   if(sectionsArray.length == 0){
  //     // console.log("jestem");
  //     const sections = document.querySelectorAll('.assistance__item');
  //     const sectionsArray = [...sections];
  //   }
  // }

  // const sections = document.querySelectorAll('.psychotherapy');
  // const sectionsArray = [...sections];
  // isSectionsEmpty(sectionsArray);


  
  // console.log(sectionsArray);
  // sectionsArray.removeClass

  
  // console.log(sectionsArray);

   const sectionsFromTop = [];
   const sectionsHeight = [];
   sectionsArray.forEach(item => {
    //  console.log(item)
    let sectionFromTop = item.offsetTop;
    sectionsFromTop.push(sectionFromTop);
    let sectionHeight = item.offsetHeight;
    sectionsHeight.push(sectionHeight);
  });
  // console.log(sectionsFromTop);
  // console.log(sectionsHeight);

  // console.log(sectionsArray);
  for(let i = 0;i<sectionsArray.length;i++){

  if(windowWidth < 800){

    

  if (scrollValue > sectionsFromTop[i] + sectionsHeight[i] / 4 - windowHeight) {
    sectionsArray[i].classList.add(`${str}__active`);
  }

  if (scrollValue < sectionsFromTop[i] - windowHeight) {
    sectionsArray[i].classList.remove(`${str}__active`);
  }

}
 

  else if(windowWidth > 800 && windowWidth < 1600){
    if (scrollValue > sectionsFromTop[i] + sectionsHeight[i] / 3 - windowHeight) {
      sectionsArray[i].classList.add(`${str}__active`);
    }
    if (scrollValue < sectionsFromTop[i] - windowHeight) {
      sectionsArray[i].classList.remove(`${str}__active`);
    }
  }

  // else if(windowWidth > 1600){
  //   if (scrollValue > sectionsFromTop[i] + sectionsHeight[i] / 2 - windowHeight) {
  //     sectionsArray[i].classList.add(`${str}__active`);
  //   }
  //   if (scrollValue < sectionsFromTop[i] - windowHeight) {
  //     sectionsArray[i].classList.remove(`${str}__active`);
  //   }
  // }
  
  else {
  if (scrollValue > sectionsFromTop[i] + sectionsHeight[i] / 2 - windowHeight) {
    sectionsArray[i].classList.add(`${str}__active`);
  }

  if (scrollValue < sectionsFromTop[i] - windowHeight) {
    sectionsArray[i].classList.remove(`${str}__active`);
  }
}

  }


}

const sections =  document.querySelectorAll('.psychotherapy')

if(sections.length > 0)
{
  const str = 'psychotherapy';
  const sectionsArray = [...sections];
  wchichFile(sectionsArray,str);
}
else{
  const str = 'assistance__item';
  const sections =  document.querySelectorAll('.assistance__item');
  const sectionsArray = [...sections];
  wchichFile(sectionsArray,str);
}

})