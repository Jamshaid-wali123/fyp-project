import AppointmentForm from "../../components/AppointmentForm"
import CreateProfile from "../../components/OurGoalSection"
import Navbar from "../../components/Navbar"
import EligibilityScreening from "../../components/EligibilitySection"
import MakeProfile from "../../Components/Profile"
import Footer from "../../components/Footer"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <CreateProfile/>
      <EligibilityScreening/>
      <AppointmentForm/>
      {/* <MakeProfile/> */}
      <Footer/>
    </div>
  )
}

export default Home
