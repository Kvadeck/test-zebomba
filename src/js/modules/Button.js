export default function Button(name) {
  const menu = document.querySelector('.menu');
  menu.insertAdjacentHTML('beforeend', `<button class="btn ${name}"></button>`);
}
