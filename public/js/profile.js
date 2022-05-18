window.addEventListener('DOMContentLoaded', () => {
  const formAvatar = document.querySelector('#form-avatar');
  const inputAvatar = document.querySelector('#input-avatar');

  inputAvatar.addEventListener('change', () => {
    formAvatar.submit();
  });
});
