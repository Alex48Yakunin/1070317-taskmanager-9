import {AbstractComponent} from './AbstractComponent';

class Board extends AbstractComponent {
  getTemplate() {
    return `<section class="board container"></section>`;
  }
}
export {Board};
