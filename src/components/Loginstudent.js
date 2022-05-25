import React from 'react';
import '../components/homepage/Login.css';
import { Link } from 'react-router-dom';
import img1 from '../images/logo/logo.png';
const Loginstudent = () => {
    return ( 
        <div className='back_img_login'>
            <div className='row '>
                <div className='col-3'><Link to='/'><img src={img1} alt="" /></Link> </div>
                <div className='col-6 py-5'>
                    <h1 className='text-center text-warning py-36'>Login</h1>
                    <h3 className='text-center py-5'> Student online Managments System</h3>
                    <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" required className="form-control" id="exampleInputPassword1" />
          <Link to="/forgetpassword">Forget password? </Link>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
                </div>
                <div className='col-3'></div>
            </div>
            
        </div>
     );
}
 
export default Loginstudent;