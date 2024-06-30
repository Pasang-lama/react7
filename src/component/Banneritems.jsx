import React from 'react'

function Banneritems() {
    var bannerdata = [
        {
            bid : 1,
            bannerimg : 'https://www.plannepal.com/uploads/2016/12/standard/d922009ec7e1d3d3755ac007ee963e56.jpg?ver=1482387074',
            bannertitle : 'First slide label',
            bannerdes : 'Some representative placeholder content for the first slide.'
        }
    ]
  return (
    <div className="carousel-item active">
    <img src={bannerdata[0].bannerimg} className="d-block w-100" alt="..." />
    <div className="carousel-caption d-none d-md-block">
      <h5>{bannerdata[0].bannertitle}</h5>
      <p>{bannerdata[0].bannerdes}</p>
      <a href className="px-5 py-3 mt-3">Contact us</a>
    </div>
  </div>
  )
}

export default Banneritems
