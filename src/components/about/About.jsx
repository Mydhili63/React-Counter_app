import React from 'react'
import './About.css'
function About() {
  return (
    <div>
       <h1>Welcome to the React Counter App</h1>
       <p>Are you looking for a straightforward way to keep track of numbers, counts, or anything you like? Look no further! Our React Counter App is here to simplify your counting needs.</p>
       <h1>What is the React Counter App?</h1>
       <p>
       The React Counter App is a user-friendly, web-based tool that allows you to easily increment or decrement a numerical value with just a click. It's designed for simplicity and convenience, making it perfect for various use cases:
       </p>
       <ul type='square'>
            <li>Keep score during games and sports events.</li>
            <li>Tally up items during inventory management.</li>
            <li>Track the number of tasks on your to-do list.</li>
            <li>Count your daily achievements or anything else you'd like!</li>
       </ul>
       <div className='features'>
       <h3>Key Features:</h3>
       <li><span className='sideheading'>User-Friendly:  </span>Our app is intuitive and easy to use. No complex instructions needed.</li>
       <li><span className='sideheading'>Real-Time Updates:  </span>Watch the numbers change in real-time as you click the buttons.</li>
       <li><span className='sideheading'>Customizable:  </span> Start counting from any number you desire.</li>
       <li><span className='sideheading'>Zero Limit:  </span> Count down to zero and beyond.</li>
       <li><span className='sideheading'>Reset:  </span> If you want to reset the count to the initial value, just tap the reset icon.</li>
 
       </div>
      
        


<h1>Why Choose the React Counter App?</h1>
<p>Our app stands out for its simplicity and efficiency. Whether you need a basic counting tool for personal use or a quick way to keep score in a game, the React Counter App has got you covered. It's the ultimate solution for all your counting needs.</p>
    <h3 className='features'>Getting Started:</h3>
    <ol type='1'>
        <li>Click the "Increment" button to increase the count.</li>
        <li>Click the "Decrement" button to decrease the count.</li>
        <li>Start counting and let the app do the rest.</li>
        <li>If you want to reset the count, just tap the reset button.</li>
    </ol>
    
    </div>
  )
}

export default About