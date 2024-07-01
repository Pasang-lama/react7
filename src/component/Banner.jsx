import React from 'react'
import Banneritems from './Banneritems'

function Banner() {

    var bannerdata = [
        {
            bid : 1,
            bannerimg : 'https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074',
            bannertitle : 'First slide label',
            bannerdes : 'Some representative placeholder content for the first slide.'
        },

        {
            bid : 2,
            bannerimg : 'https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074',
            bannertitle : 'Seconde slide label',
            bannerdes : 'Some representative placeholder content for the first slide.'
        },
        {
            bid : 3,
            bannerimg : 'https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074',
            bannertitle : 'Seconde slide label',
            bannerdes : 'Some representative placeholder content for the first slide.'
        },
        {
            bid : 3,
            bannerimg : 'https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074',
            bannertitle : 'fifth slide label',
            bannerdes : 'Some representative placeholder content for the first slide.'
        }
    ]


  return (
    <section className="banner">
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-inner">
        {
            bannerdata.map((items)=>{
              return  <Banneritems  data = {items} />
            })
        }
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
  )
}

export default Banner
