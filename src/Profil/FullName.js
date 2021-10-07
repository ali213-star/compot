import React from 'react'
 
 const FullName = () => {
    return (
        <div>
            <div>
        <h1>The form name attribute</h1>
        <form name="myForm" action="/action_page.php" method="get">
          <label htmlFor="fname">First name:</label>
          <input type="text" id="fname" name="fname" /><br /><br />
          <label htmlFor="lname">Last name:</label>
          <input type="text" id="lname" name="lname" /><br /><br />
          <input type="button" onclick="formSubmit()" defaultValue="Send form data!" />
        </form>
        <p>Notice that the JavaScript in the head section uses the name of the form to specify which form to submit.</p>Check me out
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    );
        </div>
    )
}
export default FullName