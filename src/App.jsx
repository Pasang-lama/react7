import Banneritems from "./component/Banneritems"
import Footer from "./component/Footer"
import Header from "./component/Header"
function App() {

  return (
    <>
      <Header />
      <section className="banner">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            <Banneritems />
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
      <Footer />
    </>
  )
}

export default App
