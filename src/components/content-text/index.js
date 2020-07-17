import { paragraph } from './index.module.css';

class ContentText {
  /**
   * Simple paragraph component
   * @param {String} text textual content
   */
  constructor(text) {
    if (typeof text !== 'string') {
      console.warn('Invalid args passed to ContentText constructor!', text);
    }

    const contentParagraph = document.createElement('p');
    contentParagraph.innerText = text;
    contentParagraph.classList.add(paragraph);
    this.node = contentParagraph;
  }
}

export default ContentText;
