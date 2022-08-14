const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey! I'm red!";
paragraph.setAttribute('style', 'color: red;');

container.appendChild(paragraph);

const header = document.createElement('h3');
header.classList.add('header');
header.textContent = "Hey! I'm blue h3!";
header.setAttribute('style', 'color: blue;');

container.appendChild(header);


const div = document.createElement('div');
div.classList.add('div');
div.style.cssText = "background-color: pink; border: solid black;"


const mainHeader = document.createElement('h1');
mainHeader.classList.add('mainHeader');
mainHeader.textContent ="I'm in a div";

div.appendChild(mainHeader);

const para = document.createElement('p');
para.classList.add('para');
para.textContent ="ME TOO";

div.appendChild(para);


container.appendChild(div);

btn.addEventListener('click', function (e) {
    console.log(e.target);
  });

  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
    e.target.style.color = 'white';
  });