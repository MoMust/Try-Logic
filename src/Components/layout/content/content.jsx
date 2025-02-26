import React from 'react'
import '../../../css/style.css'
export const Content = () => {
  return (
    <div className="content-wrapper ">
      {/* <div className='test-box'></div> */}
      <div className="content-container">
        <div className="content-intro-left">
          <div className="header-intro">
            <h1 className="header-text">
              Unlock your potential with our swift IQ test
            </h1>
            <p className="header-subtext">
              DISCOVER YOUR INTELLIGENS IN 20 MINUTES . SCIENTIFIALLY PRECISE
              AND INSTANTLY INSIGHTFUL
            </p>
            <button className="btn-start-test">START THE TEST</button>
          </div>
          <div className="details-intro">
            <p>12,475 tests conduced today</p>
          </div>
        </div>
        <div className="content-intro-right">
          <div className="content-intro-right-img">
            <img src="/Images/logicTestImage.png" alt="intro-img" />
          </div>
        </div>
        <div className="content-intro-numbers">Numbers</div>
        <div className="content-intro-empty">Empty</div>
      </div>
    </div>
  );
}
