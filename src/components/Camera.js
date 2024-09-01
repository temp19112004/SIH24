import React, { useState, useRef } from 'react';
import Menu from './Menu';

const CameraCapture = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef(null);

  const handleClick = async () => {
    if (!isCameraActive) {
      try {
       
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        
    
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        
    
        setIsCameraActive(true);
      } catch (err) {
        console.error('Error accessing the camera:', err);
      }
    } else {
     
      if (videoRef.current) {
        const stream = videoRef.current.srcObject;
        if (stream) {
          const tracks = stream.getTracks();
          tracks.forEach(track => track.stop());
        }
        videoRef.current.srcObject = null;
      }
      setIsCameraActive(false);
    }
  };

  return (
    <div>
        {/* <Menu/> */}
      <button className='bg-[#5a6360] p-2 rounded-xl duration-200 hover:scale-x-95 blackg- border-input bg-background hover:bg-accent hover:text-accent-foreground' onClick={handleClick}>
        {isCameraActive ? 'Stop Camera' : 'Start Camera'}
      </button>
      <div>
        <video
          ref={videoRef}
          style={{ width: '100%', height: 'auto', display: isCameraActive ? 'block' : 'none' }}
          autoPlay
        />
      </div>
    </div>
  );
};

export default CameraCapture;
