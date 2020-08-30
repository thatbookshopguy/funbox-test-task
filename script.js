let cards = document.getElementsByClassName('card');
let description = document.getElementsByClassName('item__text');
let subtitle = document.getElementsByClassName('card__subtitle');
let descriptions = [
  'Печень утки разварная с артишоками.',
  'Головы щучьи с чесноком да свежайшая сёмгушка.',
  'Филе из цыплят с трюфелями в бульоне.',
];
let disabledDescriptions = ['фуа-гра', 'рыбой', 'курой'];

for (var i = 0; i < cards.length; i++) {
  if (cards[i].classList.contains('disabled')) {
    description[i].innerHTML = 'Печалька, с ' + disabledDescriptions[i] + ' закончился.';
  }
}

function selectCard(n) {
  for (var i = 0; i < cards.length; i++) {
    if (cards[n].classList.contains('disabled')) {
      cards[n].classList.remove('selected');
    } else if (cards[n].classList.contains('selected')) {
      cards[n].classList.remove('selected');
      subtitle[n].innerHTML = 'Сказочное заморское яство';
      subtitle[n].style.color = '#666';
      description[n].innerHTML = 'Чего сидишь? Порадуй котэ, <span class="item__link" onclick="selectCard(' + n + ')">купи.</span>';
    } else {
      cards[n].classList.add('selected');
      description[n].innerHTML = descriptions[n];
    }
  }
}



function hoverCard(n) {
  for (var i = 0; i < cards.length; i++) {
    cards[n].onmouseover = cards[n].onmouseout = handler;

    function handler(event) {
      if (event.type == 'mouseover') {
        for (var i = 0; i < cards.length; i++) {
          if (cards[n].classList.contains('selected')) {
            subtitle[n].innerHTML = 'Котэ не одобряет?';
            subtitle[n].style.color = '#E52E7A';
          }
        }
      }

      if (event.type == 'mouseout') {
        for (var i = 0; i < cards.length; i++) {
          if (cards[n].classList.contains('selected')) {
            subtitle[n].innerHTML = 'Сказочное заморское яство';
            subtitle[n].style.color = '#666';
          }
        }
      }
    }
  }
};
