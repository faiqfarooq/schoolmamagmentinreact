import React from 'react';
import { Link } from 'react-router-dom'; 
const Forgetpage = () => {
    return ( 
        <div>
            <div className="container padding-bottom-3x mb-2 mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="forgot">
              <h2>Forgot your password?</h2>
              <p>Change your password in three easy steps. This will help you to secure your password!</p>
              <ol className="list-unstyled">
                <li><span className="text-primary text-medium">1. </span>Enter your email address below.</li>
                <li><span className="text-primary text-medium">2. </span>Our system will send you a temporary link</li>
                <li><span className="text-primary text-medium">3. </span>Use the link to reset your password</li>
              </ol>
            </div>	
            <form className="card mt-4">
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="email-for-pass">Enter your email address</label>
                  <input className="form-control" type="text" id="email-for-pass" required />
                  <small className="form-text text-muted">Enter the email address you already have used for registration.</small>
                </div>
              </div>
              <div className="card-footer">
                <button className="main-btn " type="submit">Get New Password</button>
            
              
              </div>
            </form>
      
          </div>
        </div>
      </div>
        
        </div>
     );
}
 
export default Forgetpage;