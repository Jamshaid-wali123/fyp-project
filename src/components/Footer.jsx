import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#254B6C] px-5 text-white py-8">
      <div className="container mx-auto flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Blood Donation</h2>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" className="text-white hover:text-gray-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="text-white hover:text-gray-300">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-gray-300">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Subscribe Now</h2>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Email" 
              className="px-4 py-2 w-64 text-black rounded-l-md border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button 
              type="submit" 
              className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              <span className="text-xl">→</span>
            </button>
          </form>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Appointment Scheduling</a></li>
            <li><a href="#" className="hover:underline">Inventory Management</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Appointment Schedule Form</a></li>
            <li><a href="#" className="hover:underline">Eligibility Screening</a></li>
            <li><a href="#" className="hover:underline">Make Profile</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
