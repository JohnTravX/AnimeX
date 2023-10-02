import { Footer } from 'flowbite-react';
import React from 'react'

const FooterComponent = () => {
  return (
    <div className='shadow-lg'>
          <Footer container>
              <Footer.Copyright
                  by="AnimeX"
                  className='text-gray-900 text-md'
                  href="#"
                  year={2023}
              />
              <Footer.LinkGroup>
                  <Footer.Link href="#" className='text-gray-900 text-md'>
                      About
                  </Footer.Link>
                  <Footer.Link href="#" className='text-gray-900 text-md'>
                      Privacy Policy
                  </Footer.Link>
                  <Footer.Link href="#" className='text-gray-900 text-md'>
                      Licensing
                  </Footer.Link>
                  <Footer.Link href="#" className='text-gray-900 text-md'>
                      Contact
                  </Footer.Link>
              </Footer.LinkGroup>
          </Footer>
    </div>
  )
}

export default FooterComponent;