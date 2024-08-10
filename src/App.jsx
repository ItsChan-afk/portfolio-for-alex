import React from 'react';
import NavBar from './Pages/features/nav-bar/NavBar';
import Footer from './Pages/features/footer/Footer';
import './App.css'; // Make sure to import your CSS file
import TwoCarousel from './Pages/commission/my-carousels/TwoCarousel';
import articleData from '/public/resources/article.json';
import carouselData from '/public/resources/commisions.json';
import OneCarousel from './Pages/commission/my-carousels/OneCarousel';
const App = () => {
  return (
    <div className="app-container">
      <NavBar />
      <main>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    // <div className='test-bug'>
    //   <TwoCarousel props={carouselData.semiRealism} />
    //   <OneCarousel referenceSheet={carouselData.referenceSheet} />
    // </div>
  );
}

export default App;
