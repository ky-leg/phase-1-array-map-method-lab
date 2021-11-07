const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

/* 
const titleCased = () => {
  return tutorials
}
*/
const titleCased = () => {   
  const newArray = tutorials.map(element => separateCapitalizeAndString(element)) 
  return newArray 
}


// function that takes a string and separates it by spaces 
function separateCapitalizeAndString(element){
  const separatedLetters = element.split(" ");
  const capitalizedWordsArray = separatedLetters.map(element => (element.charAt(0).toUpperCase() + element.slice(1)));
  const capitalizedString = capitalizedWordsArray.join(' ');
  return capitalizedString;
}
  