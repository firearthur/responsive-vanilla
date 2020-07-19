import { contentContainer, hr, mobile } from './index.module.css';

/**
 * Holds the percentage materials, a ruler, and the textual content
 */
class MaterialsContent {
  /**
   * @param {Node} percentMaterialsNode
   * @param {Node} materialsTextContentNode
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
