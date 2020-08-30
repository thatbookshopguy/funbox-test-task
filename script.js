
let cards = document.getElementsByClassName('card');
let description = document.getElementsByClassName('item__text');

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
    if (cards[n].classList.contains('selected') || cards[n].classList.contains('disabled')) {
      cards[n].classList.remove('selected');
      description[n].innerHTML = 'Чего сидишь? Порадуй котэ, <span class="item__link" onclick="selectCard(' + n + ')">купи.</span>';
    } else {
      cards[n].classList.add('selected');
      description[n].innerHTML = descriptions[n];
    }
  }
}
