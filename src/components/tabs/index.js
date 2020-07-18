import TabHeader from '../tab-header';
import { contentContainer, headersContainer, tabsContainer } from './index.module.css';

class Tabs {
  /**
   * Holds the materials and their percentages in a column layout
   * @param {String} tabsData looks like this {
      login: ['Login', <Login />],
      signUp: ['signup', <p>signup</p>],
    };
   */
  constructor(tabsData) {
    if (!Array.isArray(tabsData)) {
      console.warn('Invalid args passed to Tabs constructor!', tabsData);
    }
    const tabIds = Object.keys(tabsData);
    this.tabId = tabIds;
    this.tabsData = tabsData;

    const activeTabId = tabIds[0];
    this.state = {
      activeTabId
    };

    const tabHeaders = tabIds.map((tabId, i) => {
      const [tabTitle] = tabsData[tabId];
      const showRightBorder = i === tabIds.length - 1;
      const isActive = this.state.activeTabId === tabId;

      const tab = new TabHeader(
        tabTitle,
        tabId,
        this.activateTab.bind(this),
        isActive,
        showRightBorder
      );
      return tab;
    });

    const tabHeadersContainer = document.createElement('div');
    tabHeadersContainer.classList.add(headersContainer);
    tabHeaders.forEach(({ node }) => tabHeadersContainer.appendChild(node));
    this.tabHeaders = tabHeaders;

    const tabContentContainer = document.createElement('div');
    this.tabContentContainer = tabContentContainer;
    tabContentContainer.classList.add(tabsContainer);
    const activeTabContent = tabsData[this.state.activeTabId][1];
    tabContentContainer.appendChild(activeTabContent);

    const container = document.createElement('div');
    container.classList.add(contentContainer);
    container.appendChild(tabHeadersContainer);
    container.appendChild(tabContentContainer);

    this.node = container;
  }

  activateTab(activeTabId, clickedTabObj) {
    const previousActiveTabId = this.state.activeTabId;
    const previousActiveTabHeaderObjIndex = this.tabHeaders.findIndex(({ tabId }) => tabId === previousActiveTabId);
    const previousActiveTabHeaderObj = this.tabHeaders[previousActiveTabHeaderObjIndex];
    previousActiveTabHeaderObj.deactivate();

    clickedTabObj.activate();
    this.setState({ activeTabId });

    this.tabContentContainer.innerHTML = '';
    const activeTabContent = this.tabsData[this.state.activeTabId][1];
    this.tabContentContainer.appendChild(activeTabContent);
  }

  setState(newState) {
    this.state = Object.assign(this.state, newState);
  }
}

export default Tabs;
