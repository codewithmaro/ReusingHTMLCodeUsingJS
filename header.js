const header = document.getElementById('header');

// Place links or file names in place of "#" accordingly
header.innerHTML = `
     <header>
          <ul id="menu">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Recent</a></li>
               <li><a href="#">Leave a Feedback</a></li>
          </ul>
     </header>
`;

document.body.appendChild(header.content);
