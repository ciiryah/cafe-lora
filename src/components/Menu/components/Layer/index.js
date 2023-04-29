import './style.css';

export const Layer = (props) => {
  //const { color, label } = props;

  const element = document.createElement('div');
  element.classList.add('layer');
  element.innerHTML = `
        <div class="layer__color" style="background-color: #613916"></div>
        <div class="layer__label">espresso</div>
  `;
  return element;
};
