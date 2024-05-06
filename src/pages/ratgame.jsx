import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EmbeddedIframe = () => {
  return (
    <>
    <Navbar>
      <h1>PixiJS Embeded Sandbox</h1>
    </Navbar>
     <main>
  
        
    <div className='py-20 px-20'>
      <iframe 
        src="https://codesandbox.io/embed/kgjk9m?view=preview&module=%2Fsrc%2Findex.js"
        style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
        title="affectionate-bassi-kgjk9m"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        ></iframe>
      </div>
      
      </main> 
      <Footer></Footer>
    </>
  );
};

export default EmbeddedIframe;
