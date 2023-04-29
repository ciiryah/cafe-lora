import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, ordered, image } = props;

  const element = document.createElement('div');
  element.classList.add('drinks-list');
  element.innerHTML = `
  <div class="drink">
      <div class="drink__product">
        <div class="drink__cup">
          <img src="https://cafelora.kodim.app/assets/cups/espresso.png">
        </div>
        <div class="drink__info">
          <h3>Espresso</h3>
        </div>
      </div>
      <div class="drink__controls">
        <button class="order-btn">
          Objednat
        </button>
      </div>
  </div>
`;

  const drinkInfoElm = element.querySelector('.drink__info');
  drinkInfoElm.append(Layer());
  return element;
};
