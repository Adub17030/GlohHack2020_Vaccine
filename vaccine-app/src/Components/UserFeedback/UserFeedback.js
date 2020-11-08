import React from 'react';
import './UserFeedback.css'; 

export default function UserFeedback() {
    return (
        <main>
            <div class="container">  
  <form id="contact" action="" method="post">
    <h3>Vaccine Feedback Form</h3>
    <h4>Share your COVID-19 vaccination experience with us!</h4>
    <fieldset>
      <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Email Address" type="email" tabindex="2" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Your Phone Number" type="tel" tabindex="3" required/>
    </fieldset>
    <fieldset>
      <input placeholder="Location Vaccine was Administered:" type="text" tabindex="4" required/>
    </fieldset>
    <fieldset>
      <textarea placeholder="Describe your symptoms:" tabindex="5" required></textarea>
    </fieldset>
    <fieldset>
      <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
    </fieldset>
  </form>
 
  
</div>
        </main>
    )

}