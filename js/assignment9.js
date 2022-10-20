const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imageNames = ['RileyHusky.png', 'Aspens.jpg', 'MuirWoods.jpg', 'PointReyes.jpg', 'LilUziOSL.jpg'];

/* Declaring the alternative text for each image file */

    const alts = {
      'RileyHusky.png' : 'My chaotic, loud, and loveable Husky named Riley',
      'Aspens.JPG' : 'Aspens in the afternoon',
      'MuirWoods.JPG' : 'Muir Woods with my friends x Abbey Road by the Beatles',
      'PointReyes.JPG' : 'Point Reyes National Seashore rocky teal coast',
      'LilUziOSL.JPG' : 'Lil Uzi vibing at Outside Lands Music Festival Summer 2022'
    }

/* Looping through images */

  for (const img of imageNames) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `img/assignment9/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
  }

/* Wiring up the Darken/Lighten button */

  btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });