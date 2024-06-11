import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Freebook from "./components/Freebook"

const Home = () => {
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Navbar/>
    <Banner/>
    <Freebook/>
    <Footer/>
    </div>
    </>
  )
}

export default Home