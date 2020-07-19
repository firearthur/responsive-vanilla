import Accordion from './components/accordion';
import ContentText from './components/content-text';
import PercentMaterials from './components/percent-materials-list';
import MaterialsContent from './components/materials-content';
import Tabs from './components/tabs';

import './global.css';

/**
 * Higher order function to polyfill for IE 11
 * @param {Function} validationFunc if it returns true then target found
 * @returns {Number} index of the target or -1 for not found
 */
const findIndex = function findIndex(validationFunc) {
  let index = -1;

  if (typeof validationFunc !== 'function') {
    console.error('Invalid validation function passed to findIndex!', validationFunc);
    return index;
  }

  for (let i = 0; i < this.length; i++) {
    const currentElement = this[i];
    if (validationFunc(currentElement)) {
      index = i;
      break;
    }
  }

  return index;
};

/**
 * Creates the content elements for the shared part between mobile and desktop/tablet
 * @param {Array} materials looks like this [
    { material: 'cashmere', percent: 50 },
    { material: 'wool', percent: 46 },
    { material: 'modal', percent: 4 }
  ];
 * @param {Boolean} isMobile wether or not this content is for mobile (adds some extra css)
 * @returns {Object} with the content
 */
const getCommonContent = (materials, isMobile) => {
  const fitGuideContentText = 'fit fit fit fit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const fitGuideContent = new ContentText(fitGuideContentText, isMobile);

  const careContentText = 'care care care Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const careContent = new ContentText(careContentText, isMobile);

  const materialsContentText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam tenetur earum repellat distinctio nobis voluptate unde fuga, impedit harum fugiat officia esse! Perspiciatis rerum minima totam unde dolorum, adipisci incidunt?';
  const percentMaterials = new PercentMaterials(materials, isMobile);

  const materialsTextContentObj = new ContentText(materialsContentText, isMobile);
  const materialsContent = new MaterialsContent(
    percentMaterials.node,
    materialsTextContentObj.node,
    isMobile
  );

  return { fitGuideContent, careContent, materialsContent };
};

/**
 * Creates accordion collapse elements for mobile
 * @param {Array} materials looks like this [
    { material: 'cashmere', percent: 50 },
    { material: 'wool', percent: 46 },
    { material: 'modal', percent: 4 }
  ];
 */
const setUpMobile = materials => {
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
/**
 * Creates tabs elements for desktop/tablet
 * @param {Array} materials looks like this [
    { material: 'cashmere', percent: 50 },
    { material: 'wool', percent: 46 },
    { material: 'modal', percent: 4 }
  ];
 */
const setUpDesktop = materials => {
  const { fitGuideContent, careContent, materialsContent } = getCommonContent(materials);
  const tabsData = {
    fitGuide: ['fit guide', fitGuideContent.node],
    care: ['care', careContent.node],
    materials: ['materials', materialsContent.node]
  };

  const tabs = new Tabs(tabsData);
  document.querySelector('.desktop-tablet').appendChild(tabs.node);
};

/**
 * Runs the program plugs in the polyfill function and provides mock data
 */
const main = () => {
  if (typeof [].findIndex !== 'function') {
    // eslint-disable-next-line no-extend-native
    Array.prototype.findIndex = findIndex;
  }

  const materials = [
    { material: 'cashmere', percent: 50 },
    { material: 'wool', percent: 46 },
    { material: 'modal', percent: 4 }
  ];

  setUpDesktop(materials);
  setUpMobile(materials);
};

window.onload = main;
