const getName = () => {
  return prompt('Your name: ', '');
}

const greet = () => {
  const userName = getName();
  console.log('Hello '+ userName);
}

greet();