import { contentContainer } from './index.module.css';

class PercentMaterial {
  /**
   * Simple component shows material and its percentage
   * @param {String} material textual content
   * @param {Number} percent
   */
  constructor(material, percent) {
    if (typeof material !== 'string' || typeof percent !== 'number') {
      console.warn('Invalid args passed to PercentMaterial constructor!', material, percent);
    }

    const percentageNode = document.createElement('h1');
    percentageNode.innerText = `${percent}%`;

    const materialNode = document.createElement('h3');
    materialNode.innerText = material;

    const container = document.createElement('div');
    container.classList.add(contentContainer);
    container.appendChild(percentageNode);
    container.appendChild(materialNode);

    this.node = container;
  }
}

export default PercentMaterial;
