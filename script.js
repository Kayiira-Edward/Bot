const openMenu = document.querySelector('.open-menu');
  const closeMenu = document.querySelector('.close-menu');
  const nav = document.querySelector('header nav');

  openMenu.addEventListener('click', () => {
    nav.classList.add('show');
  });

  closeMenu.addEventListener('click', () => {
    nav.classList.remove('show');
  });
  document.addEventListener('click', function (event) {
    const isClickInsideNav = nav.contains(event.target);
    const isClickOnOpenIcon = openMenu.contains(event.target);

    if (!isClickInsideNav && !isClickOnOpenIcon) {
      nav.classList.remove('show');
    }
  });