import { contentContainer, hr, mobile } from './index.module.css';

class MaterialsContent {
  /**
   * Holds the materials and their percentages in a column layout
   * @param {String} materialsData looks like this [
      { material: 'cashmere', percent: 50 },
      { material: 'wool', percent: 46 },
      { material: 'modal', percent: 4 }
    ]
   */
  constructor(percentMaterialsNode, materialsTextContentNode, isMobile) {
    if (!percentMaterialsNode || !materialsTextContentNode) {
      console.warn('Invalid args passed to MaterialsContent constructor!', percentMaterialsNode, materialsTextContentNode);
    }

    const container = document.createElement('div');
    container.classList.add(contentContainer);
    const ruler = document.createElement('hr');
    ruler.classList.add(hr);
    if (isMobile) {
      ruler.classList.add(mobile);
    }
    container.appendChild(percentMaterialsNode);
    container.appendChild(ruler);
    container.appendChild(materialsTextContentNode);

    this.node = container;
  }
}

export default MaterialsContent;
