const soundboardElement = document.getElementById('soundboard');
const toggleDarkModeCheckbox = document.getElementById('toggleDarkMode');
const page = document.body;

// Load sounds and backgrounds from a JSON file
fetch('./js/sounds.json')
    .then(response => response.json())
    .then(data => {
        data.sounds.forEach(sound => {
            const button = document.createElement('button');
            button.className = 'soundboard__button';
           console.log(sound);
            if(sound.image !== undefined)
            {
                button.style.backgroundImage = `url(${sound.image})`;
            }
            else
            {
                button.style.backgroundImage = `url('./assets/images/buttons/fallback_background.jpg')`;

            }
            button.innerHTML = sound.label;

            button.addEventListener('click', () => {
              const audio = new Audio(sound.url || 'fallback_sound.mp3');
              audio.play();
            });

            soundboardElement.appendChild(button);
        });
    })
    .catch(error => console.error('Error loading sounds:', error));

// Toggle dark mode
toggleDarkModeCheckbox.addEventListener('change', () => {
    page.classList.toggle('page--dark', toggleDarkModeCheckbox.checked);
});
