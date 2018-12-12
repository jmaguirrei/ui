import { registerStyles } from '../../styles';import { getFullProps } from './getFullProps';let componentStylesString = '';export default Store => componentDef => {  const { didMount } = componentDef;  // 1 register per definition, not instance.  const registerNumber = Store.methods.registerComponent(componentDef);  const newClassNames = registerStyles(registerNumber, componentDef.styles, componentStylesString);  console.log("newClassNames", newClassNames);  const resolveProps = props => getFullProps(Store, {    componentDef, props, newClassNames, registerNumber,  });  return function renderComponent(props, children) {    if (didMount) {      Store.methods.once('MOUNTED', () => didMount(resolveProps(props)));    }    // Called on inital render and every update    const render = () => {      const fullProps = resolveProps(props);      const rendered = componentDef.render(fullProps, children);      return rendered;    };    // console.log('-------------------', component);    const rendered = render();    return rendered;  };};