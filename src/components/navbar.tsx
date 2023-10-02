import React from 'react';
import { Navbar } from 'flowbite-react';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <h1 className='text-black font-bold text-2xl'>AnimeX</h1>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p className='text-base '>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link>
                        <p className='text-base '>
                            About
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <p className='text-base '>
                            Services
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <p className='text-base '>
                            Pricing
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        <p className='text-base '>
                            Contact
                        </p>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;