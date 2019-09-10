import {BoardController} from './controllers/BoardController';
import {getTask} from './components/data';
import {menu} from './components/menu';
import {search} from './components/search';
import {mainFilter} from './components/mainFilter';
import {loadMore} from './components/loadMore';
import {Position, createElement, render} from './components/utils';

const TASK_COUNT = 3;
const taskMocks = new Array(TASK_COUNT)
  .fill(``)
  .map(getTask);

const menuContainer = document.querySelector(`.main__control`);
const siteMainContainer = document.querySelector(`.main`);

const renderMenu = () => {
  render(menuContainer, createElement(menu()), Position.BEFOREEND);
};
const renderSearch = () => {
  render(siteMainContainer, createElement(search()), Position.BEFOREEND);
};
const renderMainFilter = () => {
  render(siteMainContainer, createElement(mainFilter()), Position.BEFOREEND);
};

renderMenu();
renderSearch();
renderMainFilter();

const boardContainer = siteMainContainer.querySelector(`.board`);
const tasksContainer = siteMainContainer.querySelector(`.board__tasks`);
const boardController = new BoardController(tasksContainer, taskMocks);
boardController.init();
const renderLoadMore = () => {
  render(boardContainer, createElement(loadMore()), Position.BEFOREEND);
};
renderLoadMore();

