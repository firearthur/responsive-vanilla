import Accordion from './components/accordion';
import ContentText from './components/content-text';
import PercentMaterials from './components/percent-materials';
import MaterialsContent from './components/materials-content';
import Tabs from './components/tabs';

import './global.css';

const getCommonContent = (materials, isMobile) => {
  const fitGuideContentText = 'fit fit fit fit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const fitGuideContent = new ContentText(fitGuideContentText, isMobile);

  const careContentText = 'care care care Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const careContent = new ContentText(careContentText, isMobile);

  const materialsContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const percentMaterials = new PercentMaterials(materials, isMobile);

  const materialsTextContentObj = new ContentText(materialsContentText, isMobile);
  const materialsContent = new MaterialsContent(percentMaterials.node, materialsTextContentObj.node, isMobile);

  return { fitGuideContent, careContent, materialsContent };
};

const setUpMobile = (materials) => {
  const isMobile = true;
  const { fitGuideContent, careContent, materialsContent } = getCommonContent(materials, isMobile);
  const fitGuideTitle = 'fit guide';
  const fitGuideAccordion = new Accordion(fitGuideTitle, fitGuideContent.node, true);

  const careTitle = 'care';
  const careAccordion = new Accordion(careTitle, careContent.node, true);

  const materialsTitle = 'materials';
  const materialsAccordion = new Accordion(materialsTitle, materialsContent.node, true);

  document.querySelector('.mobile').appendChild(fitGuideAccordion.node);
  document.querySelector('.mobile').appendChild(careAccordion.node);
  document.querySelector('.mobile').appendChild(materialsAccordion.node);
};

const setUpDesktop = (materials) => {
  const { fitGuideContent, careContent, materialsContent } = getCommonContent(materials);
  const tabsData = {
    fitGuide: ['fit guide', fitGuideContent.node],
    care: ['care', careContent.node],
    materials: ['materials', materialsContent.node]
  };

  const tabs = new Tabs(tabsData);
  document.querySelector('.desktop-tablet').appendChild(tabs.node);
};

const main = () => {
  // const materials = [
  //   { material: 'cashmere', percent: 50 },
  //   { material: 'wool', percent: 46 },
  //   { material: 'modal', percent: 4 }
  // ];

  // // const fitGuideContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  // const fitGuideContentText = 'fit stuff';
  // const fitGuideTitle = 'fit guide';
  // const fitGuideContent = new ContentText(fitGuideContentText);
  // const fitGuideAccordion = new Accordion(fitGuideTitle, fitGuideContent.node, true);

  // // const careContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  // const careContentText = 'care stuff';
  // const careTitle = 'care';
  // const careContent = new ContentText(careContentText);
  // const careAccordion = new Accordion(careTitle, careContent.node, true);

  // const materialsContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  // const materialsTitle = 'materials';
  // const percentMaterials = new PercentMaterials(materials);

  // const materialsTextContent = new ContentText(materialsContentText);
  // const materialsContent = new MaterialsContent(percentMaterials.node, materialsTextContent.node);
  // const materialsAccordion = new Accordion(materialsTitle, materialsContent.node, true);

  // document.querySelector('.mobile').appendChild(fitGuideAccordion.node);
  // document.querySelector('.mobile').appendChild(careAccordion.node);
  // document.querySelector('.mobile').appendChild(materialsAccordion.node);

  // const tabsData = {
  //   fitGuide: ['fit guide', fitGuideContent.node],
  //   care: ['care', careContent.node],
  //   materials: ['materials', materialsContent.node]
  // };

  // const tabs = new Tabs(tabsData);
  // document.querySelector('.desktop-tablet').appendChild(tabs.node);

  const materials = [
    { material: 'cashmere', percent: 50 },
    { material: 'wool', percent: 46 },
    { material: 'modal', percent: 4 }
  ];

  setUpDesktop(materials);
  setUpMobile(materials);
};

window.onload = main;
