let images = ['fon1.jpg', 'fon2.jpg', 'fon3.jpg', 'fon4.jpg', 'fon5.jpg'];

let reviewsArr = [
  {
    'name': 'Екатерина',
    'tel': '+7 (908) 345 67 89',
    'mark': '5',
    'date': new Date (2022, 4, 23, 1, 39, 45),
    'review': 'Не следует, однако, забывать, что высокотехнологичная концепция общественной системы в значительной степени обуславливает создание направлений прогрессивного развития. Повседневная практика показывает, что новая модель организационной деятельности проверки влечёт за собой интересный процесс внедрения модернизации направлений прогрессивного развития.'
  },

  {
    'name': 'Лариса',
    'tel': '+7 (908) 345 88 89',
    'mark': '4',
    'date': new Date (2022, 4, 20, 12, 34, 45),
    'review': 'Не вызывает сомнений, что новая модель организационной деятельности проверки влечёт за собой интересный процесс внедрения модернизации соответствующих условий активизации. Следует отметить, что повышение уровня гражданского сознания позволяет оценить значение представляет собой интересный эксперимент поэтапного и последовательного развития общества.'
  },

  {
    'name': 'Евгений',
    'tel': '+7 (999) 345 88 89',
    'mark': '5',
    'date': new Date (2022, 4, 15, 12, 34, 45),
    'review': 'Разнообразный и богатый опыт сложившаяся структура организации создаёт предпосылки качественно новых шагов для форм воздействия. Равным образом новая модель организационной деятельности позволяет оценить значение представляет собой интересный эксперимент форм воздействия. Таким образом новая модель организационной деятельности в значительной степени обуславливает создание укрепления демократической системы.'
  },

  {
    'name': 'Аделина',
    'tel': '+7 (999) 354 88 89',
    'mark': '1',
    'date': new Date (2022, 4, 8, 12, 34, 45),
    'review': ''
  },

  {
    'name': 'Сергей',
    'tel': '+7 (945) 345 88 89',
    'mark': '1',
    'date': new Date (2022, 4, 1, 12, 34, 45),
    'review': ''
  },

  {
    'name': 'Катя',
    'tel': '+7 (905) 345 88 00',
    'mark': '2',
    'date': new Date (2022, 3, 18, 12, 34, 45),
    'review': 'Не вызывает сомнений, что новая модель организационной деятельности в значительной степени обуславливает создание соответствующих условий активизации. Таким образом высокотехнологичная концепция общественной системы играет важную роль в формировании существующий финансовых и административных условий. Повседневная практика показывает, что новая модель организационной деятельности требует определения и уточнения позиции, занимаемых участниками в отношении поставленных задач.'
  },

  {
    'name': 'Иван',
    'tel': '+7 (900) 345 88 89',
    'mark': '3',
    'date': new Date (2022, 3, 10, 12, 34, 45),
    'review': 'Не следует, однако, забывать, что управление и развитие структуры обеспечивает актуальность экономической целесообразности принимаемых изменений. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу специалистов новых предложений.'
  },

  {
    'name': 'Елена',
    'tel': '+7 (903) 345 88 89',
    'mark': '4',
    'date': new Date (2022, 3, 6, 12, 34, 45),
    'review': 'Разнообразный и богатый опыт понимание сущности ресурсосберегающих технологий позволяет оценить значение представляет собой интересный эксперимент новых принципов формирования материально-технической и кадровой базы. Прежде всего курс на социально-ориентированный национальный проект способствует подготовке и реализации форм воздействия. Таким образом постоянный количественный рост и сфера нашей активности позволяет выполнять важные задания по разработке направлений прогрессивного развития.'
  },

  {
    'name': 'Лена',
    'tel': '+7 (903) 666 88 89',
    'mark': '5',
    'date': new Date (2022, 3, 1, 12, 34, 45),
    'review': ''
  }
]

let telephones = ['+7 (111) 111 11 11', '+7 (222) 222 22 22'];
let password = '1111';

let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');

burger.addEventListener('click', function() {
  nav.classList.toggle('active');

  let navItems = nav.querySelectorAll('a');

  for (let navItem of navItems) {
    navItem.addEventListener('click', function() {
      nav.classList.remove('active');
    });
  }
});

document.addEventListener('click', function(event) {
  if (event.target.closest('div') !== nav && event.target.closest('button') !== burger) {
    nav.classList.remove('active');
  }
});

let sliderNumber = 0;

let slider = document.querySelector('.slider>img');

let timerID = setInterval(slideToRight, 5000);

let body = document.querySelector('body');
let header = document.querySelector('.header-wrapper');
let marks = document.querySelectorAll('.voting>.mark');
let adding = document.querySelector('.adding');
let rating = document.querySelectorAll('.rating input');

getPercents();

for (let mark of marks) {
  let choice = mark.querySelector('input');
  choice.addEventListener('click', function() {
    let prevMark = this.value;
    rating[getMark(prevMark)].checked = true;
    adding.style.display = 'flex';
    body.style.overflow = 'hidden';
    body.style.paddingRight = '17px';
    header.style.paddingRight = '17px';
    clearInterval(timerID);
  }); 
}

let popups = document.querySelectorAll('.popup');

for (let popup of popups) {
  popup.addEventListener('click', function(event) {
    if (event.target == this) {
      closePopup(popup);
    }
  });
}

let phones = document.querySelectorAll('input[type="tel"]');

for (let phone of phones) {
  phone.addEventListener('input', setMask, false);
  phone.addEventListener('focus', setMask, false);
  phone.addEventListener('blur', setMask, false);
  phone.addEventListener('keydown', setMask, false);
}

let reviews = document.querySelector('.reviews');
let reviewCount = 3;

getReview(reviewCount);

let confirmation = document.querySelector('.confirmation');

let figures = document.querySelectorAll('.promo figure');

for (let figure of figures) {
  let text = figure.querySelector('div');
  let svg = figure.querySelector('svg');

  figure.addEventListener('click', function() {
    text.classList.add('active');
  });

  text.addEventListener('click', function() {
    text.classList.add('active');
    svg.classList.remove('active');
  });

  document.addEventListener('click', function(event) {
    if (event.target.closest('figure') !== figure) {
      text.classList.remove('active');
      svg.classList.add('active');
    }
  });
}

function slideToRight() {
  sliderNumber++;
  sliderNumber = (sliderNumber > images.length - 1) ? 0 : sliderNumber;
  slider.src = 'img/' + images[sliderNumber];

  clearInterval(timerID);
  timerID = setInterval(slideToRight, 5000);
}

function slideToLeft() {
  sliderNumber--;
  sliderNumber = (sliderNumber < 0) ? images.length - 1 : sliderNumber;
  slider.src = 'img/' + images[sliderNumber];

  clearInterval(timerID);
  timerID = setInterval(slideToRight, 5000);
}

function getPercent(mark) {
  let count1 = 0;
  let count2 = 0;

  for (let obj of reviewsArr) {
    if (obj['mark'] == mark) {
      count1++;
    }

    count2++;
  }
  return Math.round(count1 / count2 * 100);
}

function getMark(num) {
  switch (num) {
    case '5':
      return 0;
    case '4':
      return 1;
    case '3':
      return 2;
    case '2':
      return 3;
    case '1':
      return 4;
    default:
      return;
  }
}

function setMask(event) {
    let pos = this.selectionStart;

    if (pos < 3) {
      event.preventDefault;
    }

    let matrix = "+7 (___) ___ __ __", 
      i = 0, def = matrix.replace(/\D/g, ""), 
      val = this.value.replace(/\D/g, ""), 
      new_value = matrix.replace(/[_\d]/g, function(a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a
      });
    i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function(a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || event.keyCode > 47 && event.keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
}

function getLastChar(str) {
  str = String(str);

  if (str[str.length - 1] == '1' || str[str.length - 1] == '2' || str[str.length - 1] == '3' || str[str.length - 1] == '4') {
    if (str[str.length - 2] == '1') {
    return str[str.length - 2] + str[str.length - 1];
    } else {
    return str[str.length - 1];
    }
  }
}

function getMinutes(min) {
  char = getLastChar(min);

  if (char == '2' || char == '3' || char == '4') {
    return 'минуты';
  } else if (char == '1') {
    return 'минуту';
  } else {
    return 'минут';
  }
}

function getHours(h) {  
  char = getLastChar(h);

  if (char == '2' || char == '3' || char == '4') {
    return 'часа';
  } else if (char == '1') {
    return 'час';
  } else {
    return 'часов';
  }
}

function normalizeNumber(num) {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  }
  return num;
}

function getTime(date) {
  let now = new Date();
  let difMins = Math.floor((now - date) / 1000 / 60);
  let difHours = Math.floor(difMins / 60);

  if (difMins < 60) {
    return difMins + ' ' + getMinutes(difMins) + ' назад';
  } else if (difHours < 24) {
    return difHours + ' ' + getHours(difHours) + ' назад';
  } else {
    return normalizeNumber(date.getDate()) + '.' + normalizeNumber(date.getMonth() + 1) + '.' + date.getFullYear();
  }
}

function getReview() {
  let messages = reviews.querySelectorAll('.review');
  for (let message of messages) {
    reviews.removeChild(message);
  }
  let adds = reviews.querySelectorAll('.add');
  for (let add of adds) {
    reviews.removeChild(add);
  }

  for (let i = 0; i < reviewCount; i++) {
    let review = document.createElement('div');
    review.className = 'review';
    if (i % 2 == 0) {
      review.classList.add('odd');
    }

    let name = document.createElement('div');
    name.className = 'name';
    name.innerHTML = reviewsArr[i]['name'];
    review.appendChild(name);

    let rating = document.querySelector('.rating').cloneNode(true);
    let inputs = rating.querySelectorAll('input');
    for (let input of inputs) {
      input.name = 'rating' + i;
    }
    inputs[getMark(reviewsArr[i]['mark'])].checked = true;
    rating.classList.add('final');
    review.appendChild(rating);

    let time = document.createElement('div');
    time.className = 'time';
    setInterval(function() {
      time.innerHTML = getTime(reviewsArr[i]['date']);
    }, 1000);
    review.appendChild(time);

    if (reviewsArr[i]['review'] != '') {
      let text = document.createElement('div');
      text.className = 'text';
      text.innerHTML = reviewsArr[i]['review'];
      review.appendChild(text);
    }

    reviews.appendChild(review);
  }

  addButton();
}

function addButton() {
  if (reviewCount < reviewsArr.length) {
    let add = document.createElement('button');
    add.className = 'add';
    add.innerHTML = '<img src="icons/add.svg" alt="add">';

    add.addEventListener('click', function() {
      reviews.removeChild(add);
      reviewCount += 3;
      reviewCount = (reviewCount < reviewsArr.length) ? reviewCount : reviewsArr.length;
      getReview();
    });

    reviews.appendChild(add);
  } else {
    let hide = document.createElement('a');
    hide.className = 'hide';
    hide.href = '#';
    hide.innerHTML = 'Свернуть отзывы';
    
    hide.addEventListener('click', function(event) {
      event.preventDefault();
      let messages = reviews.querySelectorAll('.review');
      for (let message of messages) {
        reviews.removeChild(message);
      }

      let show = document.createElement('a');
      show.className = 'hide';
      show.href = '#';
      show.innerHTML = 'Показать отзывы';

      show.addEventListener('click', function(event) {
        event.preventDefault();
        getReview();
        reviews.removeChild(show);
      });

      reviews.appendChild(show);
      reviews.removeChild(hide);
    });

    reviews.appendChild(hide);
  }
}

function isInArr(str, arr) {
  for (let elem of arr) {
    if (elem == str) {
      return true;
    }
  }
  return false;
}

function setReview(event) {
  event.preventDefault();

  let telephone = adding.querySelector('input[type="tel"]');   

  if (isInArr(telephone.value, telephones)) { 
    adding.style.display = 'none';
      confirmation.querySelector('h3').innerHTML = 'Введите код из СМС';
    confirmation.style.display = 'flex';
  } else {   
    telephone.value = '';
  }

  let code = confirmation.querySelectorAll('input');
  code[0].focus();

  for (let i = 0; i < 3; i++) {
    code[i].addEventListener('input', function() {
      code[i + 1].focus();
    });
    
    code[i + 1].addEventListener('keydown', function(event) {
      if (event.keyCode == 8) {
        code[i].value = '';
        code[i].focus();
      }
    });
  }

  code[3].addEventListener('input', function() {
    let pas = '';
    for (let input of code) {
      pas += input.value;
      input.value = '';
    }
    if (pas == password) {
      let review = {
        'name': adding.querySelector('input[type="text"]').value,
        'tel': telephone.value,
        'mark': getRating(),
        'date': new Date(),
        'review': adding.querySelector('textarea').value 
      };
      let links = document.querySelectorAll('.reviews>a');

      for (let link of links) {
        reviews.removeChild(link);
      }

      reviewsArr.unshift(review);
      reviewCount = 3;
      getPercents();
      getReview();
      closePopup(confirmation);
    } else {
      confirmation.querySelector('h3').innerHTML = 'Неверно, введите новый код';
      code[0].focus();
    }
  });
}

function getRating() {
  let inputs = adding.querySelectorAll('.rating input[type="radio"]');

  for (let input of inputs) {
    if (input.checked == true) {
      return input.value;
    }
  }
}

function closePopup(popup) {
  let choices = document.querySelectorAll('.voting input');

  for (let choice of choices) {
    choice.checked = false;
  }

  let inputs = adding.querySelectorAll('input[type="text"], input[type="tel"], textarea');

  for (let input of inputs) {
    input.value = '';
  }

  popup.style.display = 'none';
  body.style.overflow = 'scroll';
  body.style.paddingRight = '0';
  header.style.paddingRight = '0';
  timerID = setInterval(slideToRight, 5000);
}

function getPercents() {
  let percents = document.querySelectorAll('.percent');

  percents[0].innerHTML = getPercent('5') + '%';
  percents[1].innerHTML = getPercent('4') + '%';
  percents[2].innerHTML = getPercent('3') + '%';
  percents[3].innerHTML = getPercent('2') + '%';
  percents[4].innerHTML = getPercent('1') + '%';

  for (let mark of marks) {
    let percent = mark.querySelector('.percent').innerHTML;
    let diagram = mark.querySelector('.diagram>div');
    diagram.style.width = percent; 
  }
}

