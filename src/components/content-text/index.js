import { paragraph, mobile } from './index.module.css';

class ContentText {
  /**
   * Simple paragraph component
   * @param {String} text textual content
   */
  constructor(text, isMobile) {
    if (typeof text !== 'string') {
      console.warn('Invalid args passed to ContentText constructor!', text);
    }

    const contentParagraph = document.createElement('p');
    contentParagraph.innerText = text;
    contentParagraph.classList.add(paragraph);
    if (isMobile) {
      contentParagraph.classList.add(mobile);
    }
    this.node = contentParagraph;
  }
}

export default ContentText;
