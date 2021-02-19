  let activeElement = 0;
  const timeChange = 4000;

  const colorImgHtml = document.querySelector('.team__members-image--color');
  const grayImgHtml = document.querySelector('.team__members-image--gray');
  const nameMemeber = document.querySelector('.team__member-name');
  const profMember = document.querySelector('.team__member-profession');
  const contactMember = document.querySelector('.team__member-contact');

  const colorImages = ['../images/main_page/s1.png', '../images/main_page/s2.png', '../images/main_page/s3.png'];
  const grayImages = ['../images/main_page/s1a.png', '../images/main_page/s2a.png', '../images/main_page/s3a.png'];
  const names = ['Imie Nazwisko', 'Imie Nazwisko', 'Imie Nazwisko'];
  const professions = ['Psychoterapeuta', 'Psychoterapeuta', 'Psychoterapeuta'];
  const contacts = ['+48 123 456 789', '+48 123 456 789', '+48 123 456 789'];

  function changeElement() {
  //  console.log("automatyczne wwywołanie")
   activeElement++;
   if (activeElement == colorImages.length) {
    activeElement = 0;
   }
   colorImgHtml.src = colorImages[activeElement];
   grayImgHtml.src = grayImages[activeElement];
   nameMemeber.textContent = names[activeElement];
   profMember.textContent = professions[activeElement];

   contactMember.innerHTML = `<i class="fas fa-phone"></i> ${contacts[activeElement]}`;
  }

  setInterval(changeElement, timeChange)