import {
  tab, borderRight, activeTab, listItem
} from './index.module.css';
/**
 * Holds the tab title and reacts to its active state
 */
class Tab {
  /**
   * @param {String} title
   * @param {String} tabId unique id for matching active tab with its content
   * @param {Boolean} isActive wether or not the tab is meant to be active from the beginning
   * @param {Boolean} showBorderRight wether or not to show border on the right
   */
  constructor(title, tabId, clickHandler, isActive, showBorderRight) {
    if (!title || !tabId || typeof clickHandler !== 'function') {
      console.warn('Invalid args passed to Tab constructor!', title, tabId, clickHandler);
    }

    this.tabId = tabId;

    const header = document.createElement('h2');
    header.innerText = title;
    header.classList.add(tab);

    const li = document.createElement('li');
    li.classList.add(listItem);
    li.addEventListener('click', (e) => clickHandler(tabId, this, e));

    if (showBorderRight) {
      li.classList.add(borderRight);
    }

    li.appendChild(header);

    this.node = li;
    // if it's meant to be active from the beginning
    if (isActive) {
      this.activate();
    }
  }

  activate() {
    this.node.classList.add(activeTab);
  }

  deactivate() {
    this.node.classList.remove(activeTab);
  }
}

export default Tab;
