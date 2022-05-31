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
  let updatedtutorials = tutorials.map((element)=>{

    let words = element.split(" ");
    
    for (let i in words)
    {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let copyElement = words.join(" ");

    return copyElement;

  });

  return updatedtutorials;
}
