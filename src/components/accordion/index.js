import {
  titleContainer, titleHead, contentContainer, accordionBorder
} from './index.module.css';
/**
 * Simple accordion collapse component with transitions
 */
class Accordion {
  /**
   * @param {String} title title of the accordion component
   * @param {Any} content content to be hidden and showed
   * @param {Boolean} showBottomBorder wether or not to show border at the bottom
   */
  constructor(title, content, showBottomBorder) {
    if (typeof title !== 'string' || !content) {
      console.warn('Invalid args passed to accordion constructor!', title, content);
    }

    this.state = {
      isOpen: false
    };

    this.indicators = {
      opened: '-',
      closed: '+'
    };

    const titleHeader = document.createElement('h1');
    titleHeader.innerText = title;
    titleHeader.classList.add(titleHead);
    const indicatorSpan = document.createElement('span');
    indicatorSpan.innerText = this.indicators.closed;
    this.indicatorSpan = indicatorSpan;

    const titleDiv = document.createElement('div');
    titleDiv.classList.add(titleContainer);
    titleDiv.appendChild(titleHeader);
    titleDiv.appendChild(indicatorSpan);
    titleDiv.addEventListener('click', this.handleClick.bind(this));

    const contentDiv = document.createElement('div');
    contentDiv.classList.add(contentContainer);
    this.contentDiv = contentDiv;
    this.appendContent(content);

    const accordionDiv = document.createElement('div');
    accordionDiv.appendChild(titleDiv);
    accordionDiv.appendChild(contentDiv);

    if (showBottomBorder) {
      accordionDiv.classList.add(accordionBorder);
    }

    this.node = accordionDiv;
  }

  handleClick() {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.state.isOpen = true;
    this.indicatorSpan.innerText = this.indicators.opened;
    this.contentDiv.style.maxHeight = `${this.contentDiv.scrollHeight}px`;
  }

  close() {
    this.state.isOpen = false;
    this.indicatorSpan.innerText = this.indicators.closed;
    this.contentDiv.style.maxHeight = 0;
  }

  appendContent(content) {
    this.contentDiv.appendChild(content);
  }
}

export default Accordion;
