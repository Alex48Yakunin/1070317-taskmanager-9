/* eslint-disable indent */
const templateMainFilter = (getFilter) => {
  const filters = getFilter.map((filter) => (
    `<input
    type="radio"
    id="filter__${filter.title}"
    class="filter__input visually-hidden"
    name="filter"
    checked
    />
    <label for="filter__all" class="filter__label">
    ${filter.title}<span class="filter__${filter.title}-count">${filter.count()}</span></label
    >`
  ));
  return `<section class="main__filter filter container">
  
    ${filters.join(``)}

    </section>`;
};

export {templateMainFilter as mainFilter};
