import React from 'react'

function Tourspecialcard(props) {
  return (
        <div className="col-lg-4 col-md-6 ">
            <div className="tour-card">
              <img src={props.data.image} alt="" />
              <h3>
                {
                    props.data.title
                }
              </h3>
            </div>
          </div>
  )
}

export default Tourspecialcard
