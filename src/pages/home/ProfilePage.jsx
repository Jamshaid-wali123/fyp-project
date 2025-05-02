import React, { useState } from 'react';

const initialProfile = {
  name: 'Ali khan',
  phone: '',
  email: 'alikhan@gmail.com',
  bloodType: 'A+',
  gender: 'Male',
  age: 15,
  weight: '50 Kg',
  previousDonationDate: '10-12-2024',
};

const sidebarTabs = [
  'Edit Profile',
  'Appointment',
  'Eligibility Criteria',
  'Donor History',
  'Notification',
];

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [activeTab, setActiveTab] = useState('Edit Profile');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // TODO: Add backend update logic here
    alert('Profile updated!');
  };

  // Appointment form state
  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    email2: '',
    phone: '',
    location: '',
    time: '',
    date: '',
  });

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({ ...prev, [name]: value }));
  };

  const handleAppointmentSubmit = (e) => {
    e.preventDefault();
    // TODO: Add backend logic here
    alert('Appointment scheduled!');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="flex flex-col items-center w-full max-w-4xl">
        <div className="flex flex-col items-center mb-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          />
          <span className="text-xs text-gray-500 mt-2 cursor-pointer">Upload / Replace Picture</span>
        </div>
        <h2 className="text-xl font-semibold mb-6">Ali khan</h2>
        <div className="flex w-full">
          {/* Sidebar */}
          <div className="w-48 flex flex-col gap-2 mr-8">
            {sidebarTabs.map((item) => (
              <button
                key={item}
                className={`border rounded py-2 transition-all duration-200 text-sm font-medium
                  ${activeTab === item 
                    ? 'bg-purple-600 text-white font-bold shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-purple-50'
                  }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            ))}
          </div>
          {/* Main Content */}
          <div className="flex-1">
            {activeTab === 'Edit Profile' && (
              <form className="space-y-4" onSubmit={handleUpdate}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone no</label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    placeholder="+92 xxx xxxxxxx"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Blood Type</label>
                  <input
                    type="text"
                    name="bloodType"
                    value={profile.bloodType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Gender</label>
                  <input
                    type="text"
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={profile.age}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Weight</label>
                  <input
                    type="text"
                    name="weight"
                    value={profile.weight}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Previous Donation Date</label>
                  <input
                    type="text"
                    name="previousDonationDate"
                    value={profile.previousDonationDate}
                    onChange={handleChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 mt-4"
                >
                  Update Profile
                </button>
              </form>
            )}
            {activeTab === 'Appointment' && (
              <form className="space-y-4" onSubmit={handleAppointmentSubmit}>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Appointment Schedule Form</h2>
                <div>
                  <label className="block text-md font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={appointment.name}
                    onChange={handleAppointmentChange}
                    placeholder="Enter your name"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={appointment.email}
                    onChange={handleAppointmentChange}
                    placeholder="Enter your email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email2"
                    value={appointment.email2}
                    onChange={handleAppointmentChange}
                    placeholder="Enter your Email"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={appointment.phone}
                    onChange={handleAppointmentChange}
                    placeholder="Enter your phone no"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div>
                  <label className="block text-md font-medium text-gray-700">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={appointment.location}
                    onChange={handleAppointmentChange}
                    placeholder="Select Location"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-md font-medium text-gray-700">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={appointment.time}
                      onChange={handleAppointmentChange}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-md font-medium text-gray-700">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={appointment.date}
                      onChange={handleAppointmentChange}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 mt-4"
                >
                  Appointment
                </button>
              </form>
            )}
            {activeTab === 'Eligibility Criteria' && (
              <div className="bg-white p-6 rounded-lg shadow w-full">
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Eligibility Criteria</h2>
                <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
                  <li>Check Age (18+ years)</li>
                  <li>Weight (50kg or more)</li>
                  <li>Good Health Condition</li>
                  <li>No recent major illness or surgery</li>
                  <li>No recent blood donation (last 3 months)</li>
                  <li>No infectious diseases</li>
                </ol>
                <button className="bg-purple-600 text-white font-semibold py-2 px-4 rounded hover:bg-purple-700 transition duration-300">
                  Check Criteria
                </button>
              </div>
            )}
            {activeTab === 'Donor History' && (
              <div className="w-full flex flex-col items-center">
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Donor History</h2>
                <table className="border-collapse border border-gray-400 w-[500px] text-center">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-400 px-4 py-2">No of Donation</th>
                      <th className="border border-gray-400 px-4 py-2">Date</th>
                      <th className="border border-gray-400 px-4 py-2">Blood Type</th>
                      <th className="border border-gray-400 px-4 py-2">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1,2,3,4,5].map((i) => (
                      <tr key={i}>
                        <td className="border border-gray-400 px-4 py-2">01</td>
                        <td className="border border-gray-400 px-4 py-2">10-12-2024</td>
                        <td className="border border-gray-400 px-4 py-2">A+</td>
                        <td className="border border-gray-400 px-4 py-2">2 Bottle</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {activeTab === 'Notification' && (
              <div className="w-full flex flex-col items-start">
                <div className="flex items-center mb-2">
                  <h2 className="text-3xl font-semibold text-gray-700 mr-2">Notification</h2>
                  <span className="text-blue-600 font-medium text-base">New</span>
                </div>
                <p className="text-gray-700 text-lg">Your donation apointment date is tomorrow<br/>19-december-2024. Thank you</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 