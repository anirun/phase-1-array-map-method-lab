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

const titleCased = () => {
  return tutorials.map(tutorial => {
    // tweaks values, makes new array with those vals
  
    // make an array, break apart strings
    let str = tutorial.split(" ");
    // capitalize letters 
    const newArray = str.map(word => word[0].toUpperCase() + word.slice(1))
    // put them back together
    return newArray.join(" ")
  })
}
