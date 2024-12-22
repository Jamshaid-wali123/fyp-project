import AppointmentForm from "../../components/AppointmentForm"
import CreateProfile from "../../Components/CreateProfile"
import Layout from "../../components/layout/Layout"
import Navbar from "../../components/Navbar"

const Home = () => {
  return (
    <div className=" overflow-hidden">
    <Navbar/>
    <CreateProfile/>
    <AppointmentForm/>
    </div>
  )
}

export default Home
