import AppointmentForm from "../../components/AppointmentForm"
import CreateProfile from "../../components/OurGoalSection"
import Navbar from "../../components/Navbar"
import EligibilityScreening from "../../components/EligibilitySection"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div className=" overflow-hidden">
    <Navbar/>
    <CreateProfile/>
    <EligibilityScreening/>
    <AppointmentForm/>
    <Footer/>
    </div>
  )
}

export default Home
