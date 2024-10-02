import React from 'react';

function HeroSec() {
    return (
        <>
        <section className="container-fluid" id="support-hero">
          <div className=" p-3 mt-5 " id="supportWrapper">
            <h3>Support portal</h3>
            <a href="">Track Ticket</a>
          </div>
          <div className="row p-3  ">
            <div className="col-6 p-5 ">
              <h4>Search for an answer or browse help topics to create a ticket</h4>
             
              <input placeholder='Eg. how do I activate F&O'/><br/>
              <a href="">Track account opening</a>
              <a href="">Track segment activation</a>
              <a href="">Intraday margins</a>
              <a href="">Kite user manual</a>
            </div>
            <div className="col-6 p-5  ">
              <h4>Featured</h4>
              <a href="">1.Current Buybacks - August 2024</a><br/>
              <a href="">2.Offer for sale (OFS) - August 2024</a>
              </div>
          </div>
        </section>
        </>
      );
}

export default HeroSec;