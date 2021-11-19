import React from 'react';
import NavigationBar from './NavigationBar';

const ImageRandomizer = () => {
  return (
    <div>
      <NavigationBar />

      <br />
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6 text-center'>
          <img src='https://cps530-term-project-server.herokuapp.com/image' alt="Pet image" className='img-fluid img-thumbnail' width='500rem' />
        </div>
        <div className='col-3'></div>
      </div>
      <br />
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4 text-center'>
          <button className='btn btn-primary' onClick={() => {
            window.location.reload();
          }}>New Image</button>
        </div>
        <div className='col-4'></div>
      </div>
    </div>
  );
}

export default ImageRandomizer;