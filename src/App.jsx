import Banner from "./component/Banner"
import Footer from "./component/Footer"
import Header from "./component/Header"
import Tourspecialcard from "./component/Tourspecialcard"

function Featurepackagelist(props){
  return(
    <li><a href={props.list.url}><i className="bi bi-arrow-right pe-2" /> {props.list.packagename}</a></li>
  )
}




function App() {
  var specialtour = [
    {
      id: 1,
      image: "https://www.plannepal.com/assets/img/our-specialities/tour-banner-special.jpg?ver=1465419636",
      title: "Tour In Nepal"
    },
    {
      id: 2,
      image: "https://www.plannepal.com/assets/img/our-specialities/trekking-banner-special.jpg?ver=1465419556",
      title: "Trekking In Nepal"
    },
    {
      id: 3,
      image: "https://www.plannepal.com/assets/img/our-specialities/flight-book.jpg?ver=1465419604",
      title: "Flight Booking"
    },
  ]


  var feturelist = [
    {
      id: 1,
      packagename : "Nepal Faily Holiday",
      url : "https://www.plannepal.com/nepal/tour/nepal-family-tour"
    },
    {
      id: 2,
      packagename : "Nepal Vacation Tour",
      url : "https://www.plannepal.com/nepal/tour/nepal-family-tour"
    },
    {
      id: 3,
      packagename : "Nepal Faily Holiday",
      url : "https://www.plannepal.com/nepal/tour/nepal-family-tour"
    },
    {
      id: 4,
      packagename : "Nepal Vacation Tour",
      url : "https://www.plannepal.com/nepal/tour/nepal-family-tour"
    }
  ]
  return (
    <>
      <Header />
      <Banner />
      <section className="about-us container mt-5">
        <div className="row gy-4">
          <div className="col-lg-9 col-md-12">
            <h2>DEAR TRAVELLERS, NAMASTE AND WELCOME</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptates ipsa ullam sequi eum tenetur vel
              libero animi dolores aut quidem sapiente nostrum excepturi magnam eaque cumque modi quos minima ex nam officia
              sit. Iste, similique molestiae earum, ab ut voluptatem quis nostrum recusandae delectus quo ducimus repellat
              ipsum placeat vitae ex id hic accusantium neque autem sapiente omnis at temporibus quibusdam quam. Modi
              laborum labore, vero eligendi magnam nesciunt veniam ad necessitatibus veritatis placeat nulla saepe in ipsam
              qui quam eaque quo! Asperiores ipsum quaerat odit eius odio quidem, ut assumenda tempora nesciunt cum
              architecto, repellendus iste tempore sequi.
            </p>
          </div>
          <div className="col-lg-3 col-md-12 ">
            <h2>FEATURED PACKAGES</h2>
            <ul>
       {
        feturelist.map((item)=>{
          return <Featurepackagelist list={item}/>
        })
       }
            </ul>
          </div>
        </div>
      </section>

      <section className="tou-special mt-5 container">
        <h2 className="section-heading">OUR SPECIALITIES </h2>
        <div className="row gy-4">
          {
            specialtour.map((items) => (
              <Tourspecialcard data = {items} />
            )
            )
          }
        </div>
      </section>
      <Footer />
    </>
  )
}

export default App
