import React, { useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../component/Button';

const Homepage = () => {
   const navigate=useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <div><Button  onClick={() => navigate(`/create`)}>Upload New Identity Card</Button>
    </div>
    {/* <div><Button onClick={() => navigate(`/update`)}>Update Identity Card</Button>
    </div> */}
    <div><Button onClick={() => navigate(`/display`)}>Display Identity Card</Button>
    </div>
    <div> <Button onClick={() => navigate(`/delete`)}>Delete Identity Card</Button>
    </div>
    <div> <Button onClick={()=> navigate('/displayAll')}>Display All OCR and update if any</Button></div>
    </div>
  )
}
export default Homepage


// we have used cloudinary for pictures
//Cloudinary is a cloud-based media management platform that provides a comprehensive solution for storing, optimizing, managing, and delivering images, videos, and other media assets on the internet. It offers a range of features and services designed to simplify the process of handling media files for websites and applications.