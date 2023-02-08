import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

function wrapElements() {
  setTimeout(() => {
    let ele  = document.querySelector('.custom-footer > div').children;

    // element that will be wrapped
    var el = ele[0];

    // create wrapper container
    var wrapper = document.createElement('div')
    wrapper.classList.add('footer-logo');

    // insert wrapper before el in the DOM tree
    el.parentNode.insertBefore(wrapper, el);

    // move el into wrapper
    wrapper.appendChild(el);


    // wrap all the rest p tags inside a div using jquery
    let ele1  = $( ".custom-footer > div > p" ).wrapAll( "<div class='footer-desc' />");

  }, 1000);

}

/**
 * loads and decorates the footer
 * @param {Element} block The header block element
 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = '';

  const footerPath = cfg.footer || '/footer';
  const resp = await fetch(`${footerPath}.plain.html`);
  const html = await resp.text();
  const footer = document.createElement('div');
  footer.classList.add('custom-footer');
  footer.innerHTML = html;
  await decorateIcons(footer);
  wrapElements();
  block.append(footer);
}
