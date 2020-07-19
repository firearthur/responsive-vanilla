import PercentMaterial from '../percent-material';
import { contentContainer, mobile } from './index.module.css';
/**
 * Percent materials list
 */
class PercentMaterials {
  /**
   * @param {String} materialsData looks like this [
      { material: 'cashmere', percent: 50 },
      { material: 'wool', percent: 46 },
      { material: 'modal', percent: 4 }
    ]
   */
  constructor(materialsData, isMobile) {
    if (!Array.isArray(materialsData)) {
      console.warn('Invalid args passed to PercentMaterials constructor!', materialsData);
    }

    const percentMaterials = materialsData.map(
      ({ material, percent }) => new PercentMaterial(material, percent, isMobile)
    );

    const container = document.createElement('ul');
    container.classList.add(contentContainer);

    if (isMobile) {
      container.classList.add(mobile);
    }

    percentMaterials.forEach(({ node }) => container.appendChild(node));

    this.node = container;
  }
}

export default PercentMaterials;
