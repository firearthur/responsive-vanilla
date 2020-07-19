import TabHeader from '../tab-header';
import { contentContainer, headersContainer, tabsContainer } from './index.module.css';
/**
 * Switches content depending on what tab is active
 */
class Tabs {
  /**
   * @param {String} tabsData looks like this {
      tabId: ['tabTitle', tabContentNode],
      signUp: ['signup', <p>signup</p>],
    };
    @param {Number} beginningActiveTabIndex what tab to have active from the beginning
   */
  constructor(tabsData, beginningActiveTabIndex = 0) {
    if (!tabsData) {
      console.warn('Invalid args passed to Tabs constructor!', tabsData);
    }
    const tabIds = Object.keys(tabsData);
    this.tabId = tabIds;
    this.tabsData = tabsData;

    const activeTabId = tabIds[beginningActiveTabIndex];

    this.state = {
      activeTabId
    };

    // create the tab elements
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

    this.tabHeaders = tabHeaders;

    const tabHeadersList = document.createElement('ul');
    tabHeadersList.classList.add(headersContainer);
    // add tab elements to the list
    tabHeaders.forEach(({ node }) => tabHeadersList.appendChild(node));

    const tabContentContainer = document.createElement('div');
    this.tabContentContainer = tabContentContainer;
    tabContentContainer.classList.add(tabsContainer);
    // append the active tab (from the beginning) content to the content container
    const activeTabContent = tabsData[this.state.activeTabId][1];
    tabContentContainer.appendChild(activeTabContent);

    const container = document.createElement('div');
    container.classList.add(contentContainer);
    container.appendChild(tabHeadersList);
    container.appendChild(tabContentContainer);

    this.node = container;
  }

  activateTab(activeTabId, clickedTabObj) {
    // get reference to the previously active tab
    const previousActiveTabId = this.state.activeTabId;
    const previousActiveTabHeaderObjIndex = this.tabHeaders.findIndex(
      ({ tabId }) => tabId === previousActiveTabId
    );
    const previousActiveTabHeaderObj = this.tabHeaders[previousActiveTabHeaderObjIndex];
    // deactivate it
    previousActiveTabHeaderObj.deactivate();

    // remove its content from the content container
    const previousTabContent = this.tabsData[previousActiveTabId][1];
    this.tabContentContainer.removeChild(previousTabContent);
    // active the new one
    clickedTabObj.activate();
    // update the state
    this.setState({ activeTabId });
    // append the active content to the content container
    const activeTabContent = this.tabsData[this.state.activeTabId][1];
    this.tabContentContainer.appendChild(activeTabContent);
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
  }
}

export default Tabs;
