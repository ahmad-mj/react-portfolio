import "./styles.scss";


const Contact = () => {
    return(
<div class="form-container" id="form-container">
            
    <form id="booking-form" action="https://your-form-service-url.com/submit" method="post" target="form-iframe">
    <h3>Kind Information:</h3>
    <label for="kind-lastname">Nachname:</label>
    <input type="text" id="kind-lastname" name="kind-lastname" required />
    
    <label for="kind-firstname">Vorname:</label>
    <input type="text" id="kind-firstname" name="kind-firstname" required />
    
    <label for="birth-date">Geburtsdatum:</label>
    <input type="text" id="birth-date" name="birth-date" required />
    
    <h3>Elternteil Information:</h3>
    <label for="parent-lastname">Nachname:</label>
    <input type="text" id="parent-lastname" name="parent-lastname" required />
    
    <label for="parent-firstname">Vorname:</label>
    <input type="text" id="parent-firstname" name="parent-firstname" required />
    
    <label for="email">eMail:</label>
    <input type="email" id="email" name="email" required />
    
    <input type="hidden" name="courseId" value="${courseId}" />
    
    <button type="submit">Submit</button>
  </form>
        
  </div>
        )
    }
    export default Contact;