import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;

  const element = document.createElement('div');
  element.classList.add('drink');
  element.innerHTML = `
      <div class="drink__product">
        <div class="drink__cup">
          <img src="${image}">
        </div>
        <div class="drink__info">
          <h3>${name}</h3>
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">
        </button>
      </div>
`;

  const drinkInfoElm = element.querySelector('.drink__info');
  layers.map((layer) => {
    drinkInfoElm.append(Layer(layer));
  });

  const orderBtnElm = element.querySelector('.order-btn');
  if (ordered === true) {
    orderBtnElm.textContent = 'Zrušit';
    orderBtnElm.classList.toggle('order-btn--ordered');
  } else {
    orderBtnElm.textContent = 'Objednat';
  }

  orderBtnElm.addEventListener('click', () => {
    console.log('hi');
    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        ordered: !ordered,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result);
        element.replaceWith(Drink(data.result));
      });
  });

  return element;
};
