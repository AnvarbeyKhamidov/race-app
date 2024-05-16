import createBtn from '../utilities/create-btn';
import createLink from '../utilities/create-link';
import { createIconSVG } from '../utilities/create-SVG';

const createHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = document.createElement('header');
  header.classList.add('header');
  return header;
};

const createNav: () => HTMLElement = (): HTMLElement => {
  const nav: HTMLElement = document.createElement('nav');
  nav.classList.add('nav');
  return nav;
};

const createLogoContainer: () => HTMLDivElement = (): HTMLDivElement => {
  const logoContainer: HTMLDivElement = document.createElement('div');
  return logoContainer;
};

const generateHeader: () => HTMLElement = (): HTMLElement => {
  const header: HTMLElement = createHeader();
  const nav: HTMLElement = createNav();



  nav.append(createBtn('to-garage', 'TO GARAGE'), createBtn('to-winners', 'TO WINNERS'));

  header.append(nav);
  return header;
};

export default generateHeader;
