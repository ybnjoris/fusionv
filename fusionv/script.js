document.querySelector('.btn').addEventListener('click', (evt) => {
    const button = evt.currentTarget;
    button.classList.add('loading');
  
    setTimeout(() => {
      button.classList.remove('loading');
    }, 3000); // Temps d'attente de 3 secondes
    window.location.href = 'https://discord.gg/yRrrxY7Y4b';
  });
  