import {
  contentContainer,
  contentContainerMobile,
  materialPercent,
  materialName,
  percentageMobile,
  materialMobile
} from './index.module.css';

/**
 * Simple component shows material and its percentage
 */
class PercentMaterial {
  /**
   * @param {String} material textual content
   * @param {Number} percent
   */
  constructor(material, percent, isMobile) {
    if (typeof material !== 'string' || typeof percent !== 'number') {
      console.warn('Invalid args passed to PercentMaterial constructor!', material, percent);
    }

    const percentageNode = document.createElement('h1');
    percentageNode.innerText = `${percent}%`;
    percentageNode.classList.add(materialPercent);

    if (isMobile) {
      percentageNode.classList.add(percentageMobile);
    }

    const materialNode = document.createElement('h3');
    materialNode.innerText = material;
    materialNode.classList.add(materialName);

    if (isMobile) {
      materialNode.classList.add(materialMobile);
    }
    const container = document.createElement('li');
    container.classList.add(contentContainer);

    if (isMobile) {
      container.classList.add(contentContainerMobile);
    }

    container.appendChild(percentageNode);
    container.appendChild(materialNode);

    this.node = container;
  }
}

export default PercentMaterial;
