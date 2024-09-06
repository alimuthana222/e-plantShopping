import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="container text-center content">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="display-4">Welcome To Paradise Nursery</h1>
              <p className="lead">Where Green Meets Serenity</p>
              <button
                className="btn btn-success btn-lg mt-3"
                onClick={handleGetStartedClick}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <AboutUs />
            </div>
          </div>
        </div>
      </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;
