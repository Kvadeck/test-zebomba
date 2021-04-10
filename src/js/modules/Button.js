export default function Button(name) {
  const menu = document.querySelector('.menu');
  menu.insertAdjacentHTML('beforeend', `<span class="button ${name}"></span>`);
}
