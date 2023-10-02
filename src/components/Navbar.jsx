import React from 'react';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='flex border w-full justify-between'>
        <img src={logo} alt='logo' width={50}/>
        <button>
          About us
        </button>
        <button>
          Contact-us
        </button>
        <button>
          Community
        </button>
        <button>
          Courses
        </button>
        <div>
          <button>

          </button>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
