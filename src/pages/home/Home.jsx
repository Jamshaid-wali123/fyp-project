import AppointmentForm from "../../components/AppointmentForm"
import CreateProfile from "../../Components/CreateProfile"
import Eligibility_Screening from "../../Components/Eligibility_Screening"
import Layout from "../../components/layout/Layout"
import Navbar from "../../components/Navbar"

const Home = () => {
  return (
    <div className=" overflow-hidden">
    <Navbar/>
    <CreateProfile/>
    <AppointmentForm/>
    <Eligibility_Screening/>
    </div>
  )
}

export default Home
