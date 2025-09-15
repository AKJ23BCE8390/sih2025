import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';


function Home(){
    const [showPopup, setShowPopup]=useState(false);
    return(
        <div>
            <div className='login'>
              <button onClick={()=> setShowPopup(true)}>Login</button>
              {showPopup && (
                <Login onClose={()=> setShowPopup(false)}>
                </Login>
              )}
            </div>
            <div className='dashboard'>
                <Link to="/dashboard">
                    <button>Go to Dashboard</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;