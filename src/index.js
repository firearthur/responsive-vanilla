import Accordion from './components/accordion';
import ContentText from './components/content-text';
import PercentMaterials from './components/percent-materials';
import MaterialsContent from './components/materials-content';

import './global.css';

const main = () => {
  const materials = [
    { material: 'cashmere', percent: 50 },
    { material: 'wool', percent: 46 },
    { material: 'modal', percent: 4 }
  ];

  const fitGuideContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const fitGuideTitle = 'fit guide';
  const fitGuideContent = new ContentText(fitGuideContentText);
  const fitGuideAccordion = new Accordion(fitGuideTitle, fitGuideContent.node, true);

  const careContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const careTitle = 'care';
  const careContent = new ContentText(careContentText);
  const careAccordion = new Accordion(careTitle, careContent.node, true);

  const materialsContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const materialsTitle = 'materials';
  const percentMaterials = new PercentMaterials(materials);

  const materialsTextContent = new ContentText(materialsContentText);
  const materialsContent = new MaterialsContent(percentMaterials.node, materialsTextContent.node);
  const materialsAccordion = new Accordion(materialsTitle, materialsContent.node, true);

  document.querySelector('.mobile').appendChild(fitGuideAccordion.node);
  document.querySelector('.mobile').appendChild(careAccordion.node);
  document.querySelector('.mobile').appendChild(materialsAccordion.node);
};

window.onload = main;
