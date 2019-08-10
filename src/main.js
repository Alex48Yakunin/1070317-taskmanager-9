const templateMenu = () => {
  return `<section class="control__btn-wrap">
<input
  type="radio"
  name="control"
  id="control__new-task"
  class="control__input visually-hidden"
/>
<label for="control__new-task" class="control__label control__label--new-task"
  >+ ADD NEW TASK</label
>
<input
  type="radio"
  name="control"
  id="control__task"
  class="control__input visually-hidden"
  checked
/>
<label for="control__task" class="control__label">TASKS</label>
<input
  type="radio"
  name="control"
  id="control__statistic"
  class="control__input visually-hidden"
/>
<label for="control__statistic" class="control__label"
  >STATISTICS</label
>
</section>`
};

const templateSearch = () => {
  return `<section class="main__search search container">
  <input
    type="text"
    id="search__input"
    class="search__input"
    placeholder="START TYPING — SEARCH BY WORD, #HASHTAG OR DATE"
  />
  <label class="visually-hidden" for="search__input">Search</label>
  </section>`
};

const templateMainFilter = () => {
  return `<section class="main__filter filter container">
<input
  type="radio"
  id="filter__all"
  class="filter__input visually-hidden"
  name="filter"
  checked
/>
<label for="filter__all" class="filter__label">
  All <span class="filter__all-count">13</span></label
>
<input
  type="radio"
  id="filter__overdue"
  class="filter__input visually-hidden"
  name="filter"
  disabled
/>
<label for="filter__overdue" class="filter__label"
  >Overdue <span class="filter__overdue-count">0</span></label
>
<input
  type="radio"
  id="filter__today"
  class="filter__input visually-hidden"
  name="filter"
  disabled
/>
<label for="filter__today" class="filter__label"
  >Today <span class="filter__today-count">0</span></label
>
<input
  type="radio"
  id="filter__favorites"
  class="filter__input visually-hidden"
  name="filter"
/>
<label for="filter__favorites" class="filter__label"
  >Favorites <span class="filter__favorites-count">1</span></label
>
<input
  type="radio"
  id="filter__repeating"
  class="filter__input visually-hidden"
  name="filter"
/>
<label for="filter__repeating" class="filter__label"
  >Repeating <span class="filter__repeating-count">1</span></label
>
<input
  type="radio"
  id="filter__tags"
  class="filter__input visually-hidden"
  name="filter"
/>
<label for="filter__tags" class="filter__label"
  >Tags <span class="filter__tags-count">1</span></label
>
<input
  type="radio"
  id="filter__archive"
  class="filter__input visually-hidden"
  name="filter"
/>
<label for="filter__archive" class="filter__label"
  >Archive <span class="filter__archive-count">115</span></label
>
</section>`
};

const templateBoardFilter = () => {
  return `<div class="board__filter-list">
  <a href="#" class="board__filter">SORT BY DEFAULT</a>
  <a href="#" class="board__filter">SORT BY DATE up</a>
  <a href="#" class="board__filter">SORT BY DATE down</a>
  </div>`
}

const templateBoard = () => {
  `<section class="board container">
  <div class="board__tasks">
  </div>
  </section>`
}

const templateCard = () => {
  return `<article class="card card--black">
  <div class="card__form">
  <div class="card__inner">
    <div class="card__control">
      <button type="button" class="card__btn card__btn--edit">
        edit
      </button>
      <button type="button" class="card__btn card__btn--archive">
        archive
      </button>
      <button
        type="button"
        class="card__btn card__btn--favorites card__btn--disabled"
      >
        favorites
      </button>
    </div>
  
    <div class="card__color-bar">
      <svg class="card__color-bar-wave" width="100%" height="10">
        <use xlink:href="#wave"></use>
      </svg>
    </div>
  
    <div class="card__textarea-wrap">
      <p class="card__text">Example default task with default color.</p>
    </div>
  
    <div class="card__settings">
      <div class="card__details">
        <div class="card__dates">
          <div class="card__date-deadline">
            <p class="card__input-deadline-wrap">
              <span class="card__date">23 September</span>
              <span class="card__time">11:15 PM</span>
            </p>
          </div>
        </div>
  
        <div class="card__hashtag">
          <div class="card__hashtag-list">
            <span class="card__hashtag-inner">
              <span class="card__hashtag-name">
                #todo
              </span>
            </span>
  
            <span class="card__hashtag-inner">
              <span class="card__hashtag-name">
                #personal
              </span>
            </span>
  
            <span class="card__hashtag-inner">
              <span class="card__hashtag-name">
                #important
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </article>`
};

const templateEditTask = () => {
  return `                <div class="card__settings">
  <div class="card__details">
    <div class="card__dates">
      <button class="card__date-deadline-toggle" type="button">
        date: <span class="card__date-status">yes</span>
      </button>

      <fieldset class="card__date-deadline">
        <label class="card__input-deadline-wrap">
          <input
            class="card__date"
            type="text"
            placeholder=""
            name="date"
            value="23 September 11:15 PM"
          />
        </label>
      </fieldset>

      <button class="card__repeat-toggle" type="button">
        repeat:<span class="card__repeat-status">yes</span>
      </button>

      <fieldset class="card__repeat-days">
        <div class="card__repeat-days-inner">
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-mo-4"
            name="repeat"
            value="mo"
          />
          <label class="card__repeat-day" for="repeat-mo-4"
            >mo</label
          >
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-tu-4"
            name="repeat"
            value="tu"
            checked
          />
          <label class="card__repeat-day" for="repeat-tu-4"
            >tu</label
          >
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-we-4"
            name="repeat"
            value="we"
          />
          <label class="card__repeat-day" for="repeat-we-4"
            >we</label
          >
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-th-4"
            name="repeat"
            value="th"
          />
          <label class="card__repeat-day" for="repeat-th-4"
            >th</label
          >
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-fr-4"
            name="repeat"
            value="fr"
            checked
          />
          <label class="card__repeat-day" for="repeat-fr-4"
            >fr</label
          >
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            name="repeat"
            value="sa"
            id="repeat-sa-4"
          />
          <label class="card__repeat-day" for="repeat-sa-4"
            >sa</label
          >
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-su-4"
            name="repeat"
            value="su"
            checked
          />
          <label class="card__repeat-day" for="repeat-su-4"
            >su</label
          >
        </div>
      </fieldset>
    </div>

    <div class="card__hashtag">
      <div class="card__hashtag-list">
        <span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="repeat"
            class="card__hashtag-hidden-input"
          />
          <p class="card__hashtag-name">
            #repeat
          </p>
          <button type="button" class="card__hashtag-delete">
            delete
          </button>
        </span>

        <span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="repeat"
            class="card__hashtag-hidden-input"
          />
          <p class="card__hashtag-name">
            #cinema
          </p>
          <button type="button" class="card__hashtag-delete">
            delete
          </button>
        </span>

        <span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="repeat"
            class="card__hashtag-hidden-input"
          />
          <p class="card__hashtag-name">
            #entertaiment
          </p>
          <button type="button" class="card__hashtag-delete">
            delete
          </button>
        </span>
      </div>

      <label>
        <input
          type="text"
          class="card__hashtag-input"
          name="hashtag-input"
          placeholder="Type new hashtag here"
        />
      </label>
    </div>
  </div>

  <div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      <input
        type="radio"
        id="color-black-4"
        class="card__color-input card__color-input--black visually-hidden"
        name="color"
        value="black"
      />
      <label
        for="color-black-4"
        class="card__color card__color--black"
        >black</label
      >
      <input
        type="radio"
        id="color-yellow-4"
        class="card__color-input card__color-input--yellow visually-hidden"
        name="color"
        value="yellow"
        checked
      />
      <label
        for="color-yellow-4"
        class="card__color card__color--yellow"
        >yellow</label
      >
      <input
        type="radio"
        id="color-blue-4"
        class="card__color-input card__color-input--blue visually-hidden"
        name="color"
        value="blue"
      />
      <label
        for="color-blue-4"
        class="card__color card__color--blue"
        >blue</label
      >
      <input
        type="radio"
        id="color-green-4"
        class="card__color-input card__color-input--green visually-hidden"
        name="color"
        value="green"
      />
      <label
        for="color-green-4"
        class="card__color card__color--green"
        >green</label
      >
      <input
        type="radio"
        id="color-pink-4"
        class="card__color-input card__color-input--pink visually-hidden"
        name="color"
        value="pink"
      />
      <label
        for="color-pink-4"
        class="card__color card__color--pink"
        >pink</label
      >
    </div>
  </div>
</div>

<div class="card__status-btns">
  <button class="card__save" type="submit">save</button>
  <button class="card__delete" type="button">delete</button>
</div>`
};

const templateLoadMore = () => {
  return `<button class="load-more" type="button">load more</button>`
};

const menuContainer = document.querySelector(`.main__control`);
const searchContainer = document.querySelector(`.main`);
const mainFilterContainer = document.querySelector(`.main`);
const boardContainer = document.querySelector(`.main`);
const boardFilterContainer = document.querySelector(`.board`);
const cardContainer = document.querySelector(`.board__tasks`);
const EditTaskContainer = document.querySelector(`.card__inner`);
const LoadMoreContainer = document.querySelector(`.board`);

const createTemplate = (stringTemplate) => { // создадим узел
  const template = document.createElement(`template`);
  template.innerHtml = stringTemplate;
  return template.content;
};

const nodeMenu = createTemplate(templateMenu);
const nodeSearch = createTemplate(templateSearch);
const nodeMainFilter = createTemplate(templateMainFilter);
const nodeBoardFilter = createTemplate(templateBoardFilter);
const nodeCard = createTemplate(templateCard);
const nodeEditTask = createTemplate(templateEditTask);
const nodeLoadMore = createTemplate(templateLoadMore);

console.log(nodeMenu);
const renderTemplate = (container, node) => {
  container.appendChild(node);
};

renderTemplate(menuContainer,nodeMenu);
renderTemplate(searchContainer,nodeSearch);
renderTemplate(mainFilterContainer,nodeMainFilter);
renderTemplate(boardFilterContainer,nodeBoardFilter);
renderTemplate(cardContainer,nodeCard);
renderTemplate(EditTaskContainer,nodeEditTask);
renderTemplate(LoadMoreContainer,nodeLoadMore);






// const render = (container, layout) => {

//   const block = document.querySelector(container);
//   const div = document.createElement('section');
//   div.innerHTML = layout.trim();
//   block.appendChild(div.firstChild);

// };

// const renderPrepend = (container, layout) => {

//   const block = document.querySelector(container);
//   const div = document.createElement('section');
//   div.innerHTML = layout.trim();
//   block.prepend(div.firstChild);

// };




// render(`.main__control`, getTemplate.menu);
// render(`.main`, getTemplate.search);
// render(`.main`, getTemplate.mainFilter);
// render(`.main`, getTemplate.board);
// renderPrepend(`.board`, getTemplate.boardFilter);
// render(`.board__tasks`, getTemplate.card);
// render(`.card`, getTemplate.cardForm);
// render(`.board`, getTemplate.loadMore);


