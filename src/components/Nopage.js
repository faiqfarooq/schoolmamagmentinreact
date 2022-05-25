import React from 'react';
import { Link } from 'react-router-dom';
const Nopage = () => {
    return ( 
        <div>
             <h1 className='text_style text-center  py-5 my-5'>404 : The page you requested was not found.</h1>
            <p className='text-center py-5' > <Link to='/'>Back to Home Page </Link></p>
        </div>
     );
}
 
export default Nopage;