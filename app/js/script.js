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
 
   
   radius: 300,
   maxSpeed: 'medium',
   initSpeed: 'medium',
   direction: 135,
   
   keep: true,
   
 });