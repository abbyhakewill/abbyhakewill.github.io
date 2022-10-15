const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = 'It was 65 degrees fahrenheit on a crisp, sunny fall day, and :insertx: was out for a stroll with his good pal Jimmy when it began to rain torrentially out of nowhere. They hectically ran into the nearest building to get out of the rain, which turned out to be :inserty:. They breathlessly looked around at the people staring at them, then proceeded to casually :insertz:. Jimmy was impressed, but was not surprised — :insertx: has 1,000,000 pounds of pure hype coursing through his veins, and the chill rainy day vibes amplify his powers.'

var insertX = ['GRiZ', 'Rick Sanchez', 'Snoop Dogg']

var insertY = ['the Palace of Versailles','The Downer','the Phi Kappa Psi frat house'];

var insertZ = ['crack open a cold beer, which resulted in immediate world peace and restored order to the galaxy','plug in a dj board, hook it up to a speaker, and get the party bumping','be magically whisked away to an alternate universe in which CU Boulder wins the College Football Playoff National Championship'];

randomize.addEventListener('click', result);

function result() {

  var newStory = storyText;

  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if(customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace('Jimmy',name);

  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(21) + ' stone';
    var temperature =  Math.round(34) + ' centigrade';
    newStory = newStory.replace('1,000,000',weight);
    newStory = newStory.replace('65 degrees fahrenheit',temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}