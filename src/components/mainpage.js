import React from 'react';
import './ritual.css';

export default function Mainpage() {
    return (
    <>
         {/* Navbar */}
         <div id="frst" />
        <div id="nav">
          <div className="navinner1 navhover">Menu</div>
          <div className="navinner2">Ritual</div>
          <div className="navinner3"><i className="fa fa-shopping-bag navhover" style={{fontSize: '1.5rem'}} /></div>    
        </div>
        {/* Main Image */} 
        <div className="mainimage">
          <img src="img/Home-Hero-Desktop.jpg" style={{width: '95%', height: '80vh'}} alt="Home-Hero-Desktop" />
          <h1 style={{fontSize: '4rem', position: 'absolute', top: '20vh'}}>
            <div style={{fontSize: '4rem', marginLeft: '7vw'}}>The future</div> of health <br />
            <em style={{fontSize: '4rem', marginLeft: '8vw'}}>— is clear.</em>
          </h1>
          <button style={{position: 'absolute', bottom: '15vh', color: 'white', backgroundColor: '#142b6f', borderRadius: '8vh', borderStyle: 'none', fontSize: '1em', fontWeight: 'bold', width: '100px', height: '7vh'}}>Shop All</button>
        </div>
        {/* mainimage mobile */}
        <div className="mainimagemobile">
          <img src="img/Home-Hero-Mobile.jpg" alt="Home-Hero-Desktop" />
          <h1 style={{fontSize: '4rem', position: 'absolute', top: '20vh'}}>
            <div style={{fontSize: '4rem', marginLeft: '7vw'}}>The future</div> of health <br />
            <em style={{fontSize: '4rem', marginLeft: '8vw'}}>— is clear.</em>
          </h1>
          <button style={{position: 'absolute', bottom: '15vh', color: 'white', backgroundColor: '#142b6f', borderRadius: '8vh', borderStyle: 'none', fontSize: '1em', fontWeight: 'bold', width: '100px', height: '7vh'}}>Shop All</button>
        </div>
        {/* shop */}
        <div className="shop">
          <div className="shop1">
            <div className="imgdiv"> <img src="img/Category-Multivitamin.jpg" alt="" /> </div>
            <p>Shop Multivitamin</p>
          </div>
          <div className="shop1">
            <div className="imgdiv"><img src="img/Category-Protein__1_.jpg" alt="" /> </div>
            <p>Shop Protein</p>
          </div>
          <div className="shop1">
            <div className="imgdiv"> <img src="img/Category-Pregnancy__1_.jpg" alt="" /> </div>
            <p>Shop Pregnancy</p>
          </div>
          <div className="shop1">
            <div className="imgdiv"> <img src="img/Category-Bundles.jpg" alt="" /> </div>
            <p>Shop Bundles</p>
          </div>
        </div>
        {/* daily intentions */}
        <div id="dailyintention">
          <h1>
            Daily essentials with good intentions — for living life or creating it.
          </h1>
        </div>
        <div className="daily">
          <div className="inner">
            <img src="img/ingred.png" alt="" />
            <p>Traceable Ingredients</p>
          </div>
          <div className="inner">
            <img src="img/crosscircle.png" alt="" />
            <p>Non-GMO</p>
          </div>
          <div className="inner">
            <img src="img/thrdprtytrsted.png" alt="" />
            <p>Third Party Trusted</p>
          </div>
          <div className="inner">
            <img src="img/vegan.png" alt="" />
            <p>Vegan</p>
          </div>
          <div className="inner">
            <img src="img/drop.png" alt="" />
            <p>No Artificial Flavors or Synthetic Fillers</p>
          </div>
        </div>
        <div className="pseudoscience">
          <div className="pseudo">
            <div className="yellow" />
          </div>
          <div className="imgdiv"> <img src="img/home-feat-dyson.jpg" alt="" /> </div>
          <div className="halftruths">
            <h1>We're not about pseudoscience and half-truths</h1>
            <p>From Omega-3 DHA from microalgae to regeneratively-farmed pea protein,
              our scientists studied diets and genetics to make daily essentials based on what we need.</p>
            <a>Who We Are</a>
          </div>
        </div>
        <div className="traceability">
          <div className="left">
            <h1>You deserve traceability</h1>
            <p>We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind.</p>
            <a style={{marginRight: '43%'}}>Meet Our Ingredients</a>
            <a style={{marginTop: '1.25rem'}}>Our Clinical Study</a>
          </div>
          <div className="imgdiv">
            <img src="img/Home-Map.jpg" alt="" />
          </div>
        </div>
        <div id="featured">
          <div id="products">Featured Products</div>
          <div href id="shopall">Shop All</div>
        </div>
        <div id="featuredpro">
          <div className="essentials">
            <div className="oneimg" />
            <span> <em> Essentials For Women </em> </span>
            <h1>Multivitamin 18+</h1>
            <p>The clinical-backed multivitamin, reimagined for women 18+.</p>
          </div>
          <div className="essentials">
            <div className="twoimg" />
            <span> <em> Essentials For Women </em> </span>
            <h1>Prenatal Multivitamin</h1>
            <p>The prenatal multivitamin for thinking, trying, and when it's time.</p>
          </div>
          <div className="essentials">
            <div className="threeimg" />
            <span> <em> Essentials Protein </em> </span>
            <h1>Daily Shake 18+</h1>
            <p>The reimagined plant-based protein for adults 18-49.</p>
          </div>
          <div className="essentials">
            <div className="fourimg" />
            <span> <em> Essentials For Men </em> </span>
            <h1>Multivitamin 18+</h1>
            <p>Formulated for men 18-49 to help fill nutrient gaps in their diet.*</p>
          </div>
        </div>
    </>
    )
}
