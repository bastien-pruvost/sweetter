const searchMenuContainer = document.querySelector('#search-menu-container');

window.addEventListener('DOMContentLoaded', () => {
  searchMenuContainer.addEventListener('click', event => {
    event.stopPropagation();
  });

  window.addEventListener('click', () => {
    searchMenuContainer.textContent = '';
  });

  const searchbarInput = document.querySelector('#searchbar');
  let timeout;

  searchbarInput.addEventListener('click', event => {
    fetch(`/users?search=`)
      .then(res => res.text())
      .then(data => {
        searchMenuContainer.innerHTML = data;
      })
      .catch(err => console.log(err));
  });

  searchbarInput.addEventListener('input', event => {
    const value = event.target.value;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fetch(`/users?search=${value}`)
        .then(res => res.text())
        .then(data => {
          searchMenuContainer.innerHTML = data;
        })
        .catch(err => console.log(err));
    }, 1000);
  });
});
