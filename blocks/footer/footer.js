import { readBlockConfig, decorateIcons } from '../../scripts/lib-franklin.js';

function wrapElements() {
  setTimeout(() => {
    $('.custom-footer > div > p:first-child').wrapAll('<div class="footer-covid19"></div>'); 
    $('.custom-footer > div > p:nth-child(2)').wrapAll('<div class="footer-calpersHeading"></div>'); 
    $('.custom-footer > div > p:nth-child(3)').wrapAll('<div class="footer-logo"></div>'); 
    $('.custom-footer > div > p:nth-child(4), .custom-footer > div > p:nth-child(5), .custom-footer > div > p:nth-child(6), .custom-footer > div > p:nth-child(7)').wrapAll('<div class="footer-desc"></div>'); 
    $('.custom-footer > div > p:first-child, .custom-footer > div > .footer-logo, .custom-footer > div > p:first-child, .custom-footer > div > .footer-desc').wrapAll('<div class="footer-bottom"></div>'); 
    $('.custom-footer > div > .footer-bottom').wrapAll('<div class="footer-bottom-parent"></div>'); 
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
