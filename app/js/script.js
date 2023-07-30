// Text Sphere
const myTags = [
    'HTML', 
    'CSS', 
    'JavaScript',
    'Bootstrap',
    'JQuery', 
    'Handlebars.js',
    'ReactJs', 
    'SCSS', 
    'Gulp',
    'NodeJs',
    'ExpressJs',
    'Apollo Graph QL',
    'React Router',
    'MySQL',
    'MongoDB', 
    'npm',
    'Jest',
    'Insomnia',
    'Lighthouse',
    'Webpack',
    'Heroku',
    'GetHub',
    'VSCode'         
     
    
    
 ];
 
 var tagCloud = TagCloud('.textSphere', myTags,{
 
   
   radius: 200,
   maxSpeed: 'medium',
   initSpeed: 'medium',
   direction: 135,
   
   keep: true,
   
 });


//  Contact Form
emailjs.init('fT1aVtrGvot2iUfJZ');
window.onload = function() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_cceoahl', 'template_dkju3ol', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}

// send button
document.querySelectorAll('.button').forEach(button => {

  let getVar = variable => getComputedStyle(button).getPropertyValue(variable);

  button.addEventListener('click', e => {

      if(!button.classList.contains('active')) {

          button.classList.add('active');

          gsap.to(button, {
              keyframes: [{
                  '--left-wing-first-x': 50,
                  '--left-wing-first-y': 100,
                  '--right-wing-second-x': 50,
                  '--right-wing-second-y': 100,
                  duration: .2,
                  onComplete() {
                      gsap.set(button, {
                          '--left-wing-first-y': 0,
                          '--left-wing-second-x': 40,
                          '--left-wing-second-y': 100,
                          '--left-wing-third-x': 0,
                          '--left-wing-third-y': 100,
                          '--left-body-third-x': 40,
                          '--right-wing-first-x': 50,
                          '--right-wing-first-y': 0,
                          '--right-wing-second-x': 60,
                          '--right-wing-second-y': 100,
                          '--right-wing-third-x': 100,
                          '--right-wing-third-y': 100,
                          '--right-body-third-x': 60
                      })
                  }
              }, {
                  '--left-wing-third-x': 20,
                  '--left-wing-third-y': 90,
                  '--left-wing-second-y': 90,
                  '--left-body-third-y': 90,
                  '--right-wing-third-x': 80,
                  '--right-wing-third-y': 90,
                  '--right-body-third-y': 90,
                  '--right-wing-second-y': 90,
                  duration: .2
              }, {
                  '--rotate': 50,
                  '--left-wing-third-y': 95,
                  '--left-wing-third-x': 27,
                  '--right-body-third-x': 45,
                  '--right-wing-second-x': 45,
                  '--right-wing-third-x': 60,
                  '--right-wing-third-y': 83,
                  duration: .25
              }, {
                  '--rotate': 55,
                  '--plane-x': -8,
                  '--plane-y': 24,
                  duration: .2
              }, {
                  '--rotate': 40,
                  '--plane-x': 45,
                  '--plane-y': -180,
                  '--plane-opacity': 0,
                  duration: .3,
                  onComplete() {
                      setTimeout(() => {
                          button.removeAttribute('style');
                          gsap.fromTo(button, {
                              opacity: 0,
                              y: -8
                          }, {
                              opacity: 1,
                              y: 0,
                              clearProps: true,
                              duration: .3,
                              onComplete() {
                                  button.classList.remove('active');
                              }
                          })
                      }, 2000)
                  }
              }]
          })

          gsap.to(button, {
              keyframes: [{
                  '--text-opacity': 0,
                  '--border-radius': 0,
                  '--left-wing-background': getVar('--primary-darkest'),
                  '--right-wing-background': getVar('--primary-darkest'),
                  duration: .1
              }, {
                  '--left-wing-background': getVar('--primary'),
                  '--right-wing-background': getVar('--primary'),
                  duration: .1
              }, {
                  '--left-body-background': getVar('--primary-dark'),
                  '--right-body-background': getVar('--primary-darkest'),
                  duration: .4
              }, {
                  '--success-opacity': 1,
                  '--success-scale': 1,
                  duration: .25,
                  delay: .25
              }]
          })

      }

  })

});


// Projects

const projects = [
    {
        name: 'The Andromeda Intro Quote Generator',
        description: 'Randomly pulls into quotes form the tv series Andromeda. I was unable to find and api for this so i build my own json file containing all the quote. ',
        url: 'https://wizzle13.github.io/andromeda-quote-generator',
        github:' https://github.com/wizzle13/andromeda-quote-generator',
        image:'andromeda.png'
    },
    {
        name: 'The Ultimate README Generator',
        description: 'This is a simple Node.js program designed to quickly create professional looking README.md documents.',
        url: 'https://wizzle13.github.io/ultimate-readme-generator',
        github:'https://github.com/Wizzle13/ultimate-readme-generator',
        image:'readme-generator.png'
    },
    {
        name: 'Password Generator',
        description: 'Generates Ramdon Passwords. A simple site for generating random passwords.',
        url: 'https://wizzle13.github.io/password-generator',
        github:'https://github.com/Wizzle13/password-generator',
        image:'password-generator.png'
    },
    {
        name: 'Gym Buddy',
        description: 'This page is designed as new site for a local Gym. It has features allowing members to select membership plans, and trainers directly on the site.',
        url: 'https://gym--buddy.herokuapp.com',
        github:'https://github.com/Wizzle13/gym-ecommerce',
        image:'gym-buddy.png'
    },
    {
        name: 'The Coders Blog',
        description: 'A simple blog site',
        url: 'https://the-coders-blog.herokuapp.com',
        github:' https://github.com/wizzle13/The-Coders-blog',
        image:'codersblog.jpg'
    },
    {
        name: 'PokeBook',
        description: 'A new social media site for Pokemon lovers, where you can connect with other Pokemon lovers and share messages.',
        url: 'https://the-poke-book.herokuapp.com',
        github:'https://github.com/Wizzle13/pokebook',
        image:'pokebook.jpg'
    },
    {
        name: 'Horiseon',
        description: 'Horiseon wished for their site to follow accessibility standards and to be optimized for searh engines.',
        url: 'https://wizzle13.github.io/horiseon',
        github:'https://github.com/wizzle13/horiseon',
        image:'horiseon.jpg'
    },
    {
        name: 'Run Buddy',
        description: 'Find your Run Buddy here. A mock website to offer running and training services. It was used as pratice for learning HTML and CSS.',
        url: 'https://wizzle13.github.io/run-buddy',
        github:'https://github.com/wizzle13/run-buddy',
        image:'run-buddy.jpg'
    }
    
];

var cardSection = document.querySelector("#p-card");
var loadProjects = function () {
  
    for (var i = 0; i < projects.length; i++) {
      const newsection = projects[i]
      $(cardSection).append(
        "<div class='card' style='--clr: #009688'>" +
          "<div class='img-box'>" +
          "<img src='./images/projects/"+`${newsection.image}`+"'>" +
          "</div>" +
          "<div class='content'>" +
          "<h2>" +
          `${newsection.name}` +
          "</h2>" +
          "<p>"+ `${newsection.description}`+"</p>" +
          "<a href="+`${newsection.github}`+">GitHub</a>" +
          "<a href="+`${newsection.url}`+">Live Site</a>" +
          "</div>" +
          "</div>"
      );
    }
  };
  
  loadProjects();