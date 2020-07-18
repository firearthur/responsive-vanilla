import { tab, borderRight, activeTab } from './index.module.css';

class Tab {
  /**
   * Holds the materials and their percentages in a column layout
   * @param {String} title
   */
  constructor(title, tabId, clickHandler, isActive, showBorderRight) {
    if (!title) {
      console.warn('Invalid args passed to Tab constructor!', title);
    }

    this.tabId = tabId;

    const header = document.createElement('h2');
    header.innerText = title;
    header.classList.add(tab);
    header.addEventListener('click', (e) => clickHandler(tabId, this, e));

    if (showBorderRight) {
      header.classList.add(borderRight);
    }

    this.node = header;
    if (isActive) {
      this.activate();
    }
  }

  activate() {
    this.node.classList.add(activeTab);
  }

  deactivate() {
    const className = activeTab;
    this.node.classList.remove(className);
  }
}

export default Tab;
