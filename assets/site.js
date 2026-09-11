"use strict";

// Catálogo de venta: precios por caja de seis, en pesos uruguayos.
const PRODUCTS = Object.freeze({
  classic: { name: "Classic", price: 610 },
  ddl: { name: "Dulce de Leche", price: 650 },
});
const DELIVERY = Object.freeze({
  retiro: { name: "Retiro en Maldonado centro", fee: 0 },
  maldonado: { name: "Entrega en Maldonado centro", fee: 0 },
  punta: { name: "Envío a Punta del Este", fee: 80 },
});
const WHATSAPP_NUMBER = "59897316401";
const money = (value) => `${value.toLocaleString("es-UY")} UYU`;

const nav = document.getElementById("mobile-nav");
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  nav.showModal();
  hamburger.setAttribute("aria-expanded", "true");
});
document
  .getElementById("mobile-close")
  .addEventListener("click", () => nav.close());
nav.addEventListener("close", () =>
  hamburger.setAttribute("aria-expanded", "false"),
);
nav
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", () => nav.close()));
window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
  if (event.matches && nav.open) nav.close();
});

// Carrusel manual: un solo sixpack visible, sin avance automático.
const carousel = document.querySelector(".experience-carousel");
const slides = [...carousel.querySelectorAll(".carousel-slide")];
const carouselStatus = document.getElementById("sixpack-status");
let currentSlide = 0;
function showSixpack(index) {
  currentSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, position) => {
    slide.hidden = position !== currentSlide;
  });
  carouselStatus.querySelector('[aria-hidden="true"]').textContent =
    `${String(currentSlide + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  carouselStatus.querySelector(".sr-only").textContent =
    `${currentSlide + 1} de ${slides.length}: ${slides[currentSlide].dataset.name}`;
}
carousel.querySelector(".carousel-controls").hidden = false;
document
  .getElementById("sixpack-prev")
  .addEventListener("click", () => showSixpack(currentSlide - 1));
document
  .getElementById("sixpack-next")
  .addEventListener("click", () => showSixpack(currentSlide + 1));
carousel.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  showSixpack(currentSlide + (event.key === "ArrowRight" ? 1 : -1));
});
const carouselViewport = carousel.querySelector(".carousel-viewport");
let touchStart = null;
carouselViewport.addEventListener(
  "touchstart",
  (event) => {
    touchStart =
      event.touches.length === 1
        ? { x: event.touches[0].clientX, y: event.touches[0].clientY }
        : null;
  },
  { passive: true },
);
carouselViewport.addEventListener(
  "touchend",
  (event) => {
    if (!touchStart || event.touches.length) {
      touchStart = null;
      return;
    }
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy))
      showSixpack(currentSlide + (dx < 0 ? 1 : -1));
  },
  { passive: true },
);
carouselViewport.addEventListener(
  "touchcancel",
  () => {
    touchStart = null;
  },
  { passive: true },
);

const flyer = document.getElementById("flyer-dialog");
document.getElementById("flyer-open").addEventListener("click", (event) => {
  event.preventDefault();
  flyer.showModal();
});
document
  .getElementById("flyer-close")
  .addEventListener("click", () => flyer.close());
flyer.addEventListener("click", (event) => {
  if (event.target !== flyer) return;
  const bounds = flyer.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    flyer.close();
});

// Reproducción a elección del visitante: evita movimiento y descargas automáticas.
// Compatibilidad con enlaces compartidos de la sección anterior.
if (window.location.hash === "#menu") {
  window.location.replace("#sabores");
}

const form = document.getElementById("order-form");
const productInput = document.getElementById("f-producto");
const quantityInput = document.getElementById("f-cantidad");
const nameInput = document.getElementById("f-nombre");
const addressInput = document.getElementById("f-direccion");
const noteInput = document.getElementById("f-nota");
const errorBox = document.getElementById("form-error");
const fallback = document.getElementById("whatsapp-fallback");

function getOrder() {
  const product = Object.hasOwn(PRODUCTS, productInput.value)
    ? PRODUCTS[productInput.value]
    : null;
  const deliveryKey = form.querySelector(
    'input[name="entrega"]:checked',
  )?.value;
  const delivery = Object.hasOwn(DELIVERY, deliveryKey)
    ? DELIVERY[deliveryKey]
    : null;
  const quantity = Number(quantityInput.value);
  const validQuantity =
    Number.isInteger(quantity) && quantity >= 1 && quantity <= 99;
  return { product, delivery, deliveryKey, quantity, validQuantity };
}

function updateOrder() {
  const { product, delivery, deliveryKey, quantity, validQuantity } =
    getOrder();
  const needsAddress = Boolean(delivery) && deliveryKey !== "retiro";
  document.getElementById("address-group").hidden = !needsAddress;
  addressInput.disabled = !needsAddress;
  addressInput.required = needsAddress;
  errorBox.hidden = true;
  fallback.hidden = true;
  if (product && delivery && validQuantity) {
    document.getElementById("summary-detail").textContent =
      `${quantity} ${quantity === 1 ? "caja" : "cajas"} de ${product.name} · ${quantity * 6} rolls · ${money(product.price)} por caja. ${delivery.name}: ${delivery.fee ? money(delivery.fee) : "gratis"}.`;
    document.getElementById("summary-total").textContent = money(
      product.price * quantity + delivery.fee,
    );
  } else {
    document.getElementById("summary-detail").textContent = !validQuantity
      ? "Ingresá una cantidad entera de 1 a 99 cajas."
      : "Elegí tu sabor y la forma de entrega para ver el total.";
    document.getElementById("summary-total").textContent = "—";
  }
}

form.addEventListener("input", updateOrder);
form.addEventListener("change", updateOrder);
nameInput.addEventListener("input", () => nameInput.setCustomValidity(""));
addressInput.addEventListener("input", () =>
  addressInput.setCustomValidity(""),
);
document.querySelectorAll("[data-product]").forEach((link) => {
  link.addEventListener("click", () => {
    productInput.value = link.dataset.product;
    updateOrder();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const { product, delivery, deliveryKey, quantity, validQuantity } =
    getOrder();
  const name = nameInput.value.trim();
  const address = addressInput.value.trim();
  nameInput.setCustomValidity(name ? "" : "Ingresá tu nombre.");
  addressInput.setCustomValidity(
    addressInput.required && !address ? "Ingresá la dirección de entrega." : "",
  );
  if (!form.reportValidity()) return;
  if (!product || !delivery || !validQuantity) {
    errorBox.textContent =
      "Revisá el sabor, la entrega y la cantidad de cajas (un número entero entre 1 y 99).";
    errorBox.hidden = false;
    return;
  }
  const subtotal = product.price * quantity;
  const message = [
    "🍥 *PEDIDO CINNABYTE*",
    "",
    `👤 *Nombre:* ${name}`,
    `🛒 *Producto:* Sixpack ${product.name} (6 rolls por caja)`,
    `🔢 *Cantidad:* ${quantity} ${quantity === 1 ? "caja" : "cajas"} · ${quantity * 6} rolls`,
    `💵 *Precio por caja:* ${money(product.price)}`,
    `*Subtotal:* ${money(subtotal)}`,
    `📦 *Entrega:* ${delivery.name}`,
    ...(deliveryKey !== "retiro" ? [`📍 *Dirección:* ${address}`] : []),
    `*Costo de entrega:* ${delivery.fee ? money(delivery.fee) : "Gratis"}`,
    `*Total:* ${money(subtotal + delivery.fee)}`,
    ...(noteInput.value.trim() ? [`📝 *Nota:* ${noteInput.value.trim()}`] : []),
    "",
    "Quisiera coordinar disponibilidad, pago y horario.",
    "_Pedido realizado desde la web de Cinnabyte_",
  ].join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  document.getElementById("whatsapp-link").href = url;
  fallback.hidden = false;
  window.open(url, "_blank", "noopener,noreferrer");
});
updateOrder();
