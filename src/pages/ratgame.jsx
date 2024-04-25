import React from 'react';

const EmbeddedIframe = () => {
  return (
    <div>
      <h1>Embedded CodeSandbox</h1>
      <iframe
        src="https://codesandbox.io/embed/kgjk9m?view=preview&module=%2Fsrc%2Findex.js"
        style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
        title="affectionate-bassi-kgjk9m"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default EmbeddedIframe;
