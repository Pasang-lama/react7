import React from 'react'

function Banneritems(props) {

  return (
    <div className="carousel-item active">
      <img src={props.data.bannerimg} className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>{props.data.bannertitle}</h5>
        <p>{props.data.bannerdes}</p>
        <a href className="px-5 py-3 mt-3">Contact us</a>
      </div>
    </div>
  )
}

export default Banneritems
