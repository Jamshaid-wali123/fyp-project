import AppointmentForm from "../../components/AppointmentForm"
import Layout from "../../components/layout/Layout"
import Navbar from "../../components/Navbar"

const Home = () => {
  return (
    <div className=" overflow-hidden">
    <Navbar/>
    <AppointmentForm/>
    </div>
  )
}

export default Home
