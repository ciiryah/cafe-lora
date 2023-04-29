import './style.css';
import { Drink } from './components/Drink/index.js';

export const Menu = () => {
  const element = document.createElement('section');
  element.classList.add('menu');
  element.innerHTML = `
<div class="container" id="menu">
  <h2>Naše nabídka</h2>
  <p class="menu-intro">
    Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
  </p>
`;

  element.append(Drink({}));

  return element;
};
