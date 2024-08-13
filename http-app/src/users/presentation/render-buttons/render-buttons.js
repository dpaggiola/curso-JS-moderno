import userStore from '../../user-store.js';
import { renderTable } from '../render-table/render-table.js';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
  const nextButton = document.createElement('button');
  nextButton.innerText = 'Next >';

  const prevButton = document.createElement('button');
  prevButton.innerText = '< Prev';

  const currentPageLabel = document.createElement('span');
  currentPageLabel.di = 'current-page';
  currentPageLabel.innerText = userStore.getCurrentPage();

  element.appendChild(prevButton, currentPageLabel, nextButton);


  nextButton.addEventListener('click', async() => {
    await userStore.loadNextPage();
    currentPageLabel.innerText = userStore.getCurrentPage();
    renderTable(element);
  });

  prevButton.addEventListener('click', async() => {
    await userStore.loadPreviousPage();
    currentPageLabel.innerText = userStore.getCurrentPage();
    renderTable(element);
  });
};