'use strict';

(function() {

  var GRAPH_STEP = 38;

  var rezultField = document.querySelector('.js-rezult');

  var firstNumber = document.querySelector('.js-first-number').innerText;
  var secondNumber = document.querySelector('.js-second-number').innerText;

  var rezult = +firstNumber + +secondNumber;

  var firstGraph = document.querySelector('.js-graph-1');
  var secondGraph = document.querySelector('.js-graph-2');

  firstGraph.style.width = GRAPH_STEP * firstNumber + 'px';
  secondGraph.style.width = GRAPH_STEP * secondNumber + 'px';

  firstGraph.classList.add('active');

  var firstForm = firstGraph.querySelector('input');
  firstForm.addEventListener('input', function(evt) {
    evt.preventDefault();
    if (firstForm.value == firstNumber) {
      firstForm.classList.remove('error');
      firstForm.disabled = 'disabled';
      secondGraph.classList.add('active');
      secondGraph.focus();
    } else {
      firstForm.classList.add('error');
    }
  });

  var secondForm = secondGraph.querySelector('input');
  secondForm.addEventListener('input', function(evt) {
    evt.preventDefault();
    if (secondForm.value == secondNumber) {
      secondForm.classList.remove('error');
      secondForm.disabled = 'disabled';
      rezultField.disabled = '';
      rezultField.value = '';
    } else {
      secondForm.classList.add('error');
    }
  });

  var rezultForm = document.querySelector('.js-rezult');
  rezultForm.addEventListener('input', function(evt) {
    evt.preventDefault();
    if (rezultForm.value == rezult) {
      rezultForm.classList.remove('error');
      rezultForm.disabled = 'disabled';
    } else {
      rezultForm.classList.add('error');
    }
  });
})();
