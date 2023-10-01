import React from 'react';
import { Navbar } from 'flowbite-react';

const NavbarComponent = () => {
    return (
        <div>
            <Navbar fluid rounded>
                <h1 className='text-black font-bold text-2xl'>AnimeX</h1>
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite React
                </span>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link
                        active
                        href="#"
                    >
                        <p>
                            Home
                        </p>
                    </Navbar.Link>
                    <Navbar.Link>
                        <p>
                            About
                        </p>
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Services
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Pricing
                    </Navbar.Link>
                    <Navbar.Link href="#">
                        Contact
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarComponent;