import {AbstractComponent} from './AbstractComponent';
class TaskList extends AbstractComponent {
  getTemplate() {
    return `<div class="board__tasks"></div>`;
  }
}
export {TaskList};
