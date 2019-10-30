export const filterATags = element => {
  let href: string = element.getAttribute("href");
  if ("accessibility" === element.getAttribute("href")) {
    href = "https://www2.gov.bc.ca/gov/content/home/accessibility";
    element.setAttribute("href", href);
  }
  if (element.hasAttribute("aria")) {
    element.setAttribute("aria-label", element.textContent);
    element.removeAttribute("aria");
  }
};

export const moveElement = (element, parent) => {
  const nName: string = element.nodeName.toLowerCase();
  if ("a" === nName) {
    filterATags(element);
  }
  parent.appendChild(element);
};

export const menuElement = element => {
  const nName: string = element.nodeName.toLowerCase();
  if ("a" === nName && "li" !== element.parentNode.nodeName.toLowerCase()) {
    filterATags(element);
    element.setAttribute("tabindex", "-1");
    element.setAttribute("aria-hidden", "true");
    const liTag: HTMLElement = document.createElement("li");
    liTag.setAttribute("role", "menuitem");
    liTag.setAttribute("tabindex", "-1");
    liTag.setAttribute("aria-label", element.textContent);
    liTag.appendChild(element.cloneNode(true));

    element.parentNode.replaceChild(liTag, element);
  } else {
  }
};

export const findAncestor = (el: any, sel: string) => {
  while ((el = el.parentElement) && !(el.matches || el.matchesSelector).call(el, sel));
  return el;
};

export const keys = {
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
