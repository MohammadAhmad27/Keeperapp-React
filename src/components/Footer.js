import React from 'react';


function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright <span className='copyright'><strong>©</strong></span> {currentYear}</p>
    </footer>
  );
}

export default Footer 