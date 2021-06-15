 const InitComponents = (jsSources) => {
  const components = getJsComponents('[js-component]');
  components.forEach((el)=> {
   const nameJsElement =  el.getAttribute('js-component');
   const Component = jsSources[nameJsElement];
   const component = new Component(el);
   component.init();
  });
}

const getJsComponents = (selector) => {
  const jsComponents = document.querySelectorAll(selector);
  return [...jsComponents];
}

export default InitComponents;