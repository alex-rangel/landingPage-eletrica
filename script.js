/**
 * Página estática (HTML/CSS/JS) - interações:
 * - botões com data-whatsapp
 * - ano no rodapé
 */

const WHATSAPP_NUMBER_E164 = "5521964050946";
const DEFAULT_MESSAGE = "Olá! Gostaria de solicitar um orçamento.";

/**
 * @param {string} text
 * @returns {string}
 */
const encodeText = (text) => encodeURIComponent(text.trim());

/**
 * @param {string} message
 * @returns {string}
 */
const buildWhatsAppUrl = (message) => {
  const base = "https://wa.me/";
  return `${base}${WHATSAPP_NUMBER_E164}?text=${encodeText(message)}`;
};

/**
 * @param {Element} root
 * @returns {root is HTMLElement}
 */
const isHTMLElement = (root) => root instanceof HTMLElement;

/**
 * @param {string} selector
 * @returns {HTMLElement[]}
 */
const qsa = (selector) => Array.from(document.querySelectorAll(selector)).filter(isHTMLElement);

/**
 * @param {string} url
 * @returns {void}
 */
const openUrl = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

// Ano do rodapé
(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

// Botões WhatsApp
(() => {
  const buttons = qsa("[data-whatsapp='true']");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      openUrl(buildWhatsAppUrl(DEFAULT_MESSAGE));
    });
  });
})();
