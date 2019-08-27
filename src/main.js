import {Task} from './components/task';
import {menu} from './components/menu';
import {search} from './components/search';
import {mainFilter} from './components/mainFilter';
import {boardFilter} from './components/boardFilter';
import {board} from './components/board';
import {loadMore} from './components/loadMore';
import {TaskEdit} from './components/editTask';
import {getTask} from './components/data';
import {Position, render, createElement} from './components/utils';


const TASK_COUNT = 3;


const taskMocks = new Array(TASK_COUNT)
  .fill(``)
  .map(getTask);


const menuContainer = document.querySelector(`.main__control`);
const searchContainer = document.querySelector(`.main`);
const mainFilterContainer = document.querySelector(`.main`);
const boardContainer = document.querySelector(`.main`);
const boardFilterContainer = document.querySelector(`.board`);
const tasksContainer = document.querySelector(`.board__tasks`);
const loadMoreContainer = document.querySelector(`.board`);

const renderMenu = () => {
  render(menuContainer, createElement(menu()), Position.BEFOREEND);
};
const renderSearch = () => {
  render(searchContainer, createElement(search()), Position.BEFOREEND);
};
const renderMainFilter = () => {
  render(mainFilterContainer, createElement(mainFilter()), Position.BEFOREEND);
};
const renderBoard = () => {
  render(boardContainer, createElement(board()), Position.BEFOREEND);
};
const renderBoardFilter = () => {
  render(boardFilterContainer, createElement(boardFilter()), Position.BEFOREEND);
};

const renderTask = (taskMock) => {
  const task = new Task(taskMock);
  const taskEdit = new TaskEdit(taskMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  task.getElement()
    .querySelector(`.card__btn--edit`)
    .addEventListener(`click`, () => {
      tasksContainer.replaceChild(taskEdit.getElement(), task.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`focus`, () => {
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement().querySelector(`textarea`)
    .addEventListener(`blur`, () => {
      document.addEventListener(`keydown`, onEscKeyDown);
    });

  taskEdit.getElement()
    .querySelector(`.card__save`)
    .addEventListener(`click`, () => {
      tasksContainer.replaceChild(task.getElement(), taskEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    });

  render(tasksContainer, task.getElement(), Position.BEFOREEND);
};
const renderLoadMore = () => {
  render(loadMoreContainer, createElement(loadMore()), Position.BEFOREEND);
};

renderMenu();
renderSearch();
renderMainFilter();
renderBoard();
renderBoardFilter();
taskMocks.forEach((taskMock) => renderTask(taskMock));
renderLoadMore();
