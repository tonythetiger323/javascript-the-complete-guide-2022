// 1. Select this task (in two different ways at least!) and change the background-color to black, text-color to white.

document.getElementById('task-1').style.backgroundColor = 'black';
document.querySelectorAll('li:first-of-type').style.color = 'white';

// 2. Change the document title (in <head></head>) to "Assignment - Solved!". Use two different ways for getting access to the <title> element: Via querySelector on document and via querySelector on the certain property you find in document.

document.querySelector('title').textContent = 'Assignment - Solved!';
document.title = 'Assignment - Solved!';

// 3. Select the <h1> element on this page and change its text to "Assignment - Solved!".

document.getElementsByTagName('h1').textContent = 'Assignment - Solved!';