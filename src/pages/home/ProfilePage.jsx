import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classNames from "classnames";

const profileSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .number()
    .typeError("Phone number must be a number")
    .positive("Phone number must be positive")
    .integer("Phone number must be an integer")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  bloodType: yup.string().required("Blood type is required"),
  gender: yup.string().required("Gender is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .integer("Age must be an integer")
    .min(18, "You must be at least 18 years old")
    .max(100, "Age must be less than 100")
    .required("Age is required"),
  weight: yup
    .number()
    .typeError("Weight must be a number")
    .positive("Weight must be positive")
    .min(50, "Weight must be at least 50kg")
    .required("Weight is required"),
  previousDonationDate: yup
    .date()
    .required("Previous donation date is required")
    .test('is-3-months-old', 'Last donation must be at least 3 months ago', function(value) {
      if (!value) return true;
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return value <= threeMonthsAgo;
    }),
});

const appointmentSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  location: yup.string().required("Location is required"),
  time: yup
    .string()
    .required("Time is required")
    .test('valid-time', 'Appointment time must be between 8 AM and 6 PM', function(value) {
      if (!value) return true;
      const [hours, minutes] = value.split(':').map(Number);
      const appointmentTime = new Date();
      appointmentTime.setHours(hours, minutes);
      
      const startTime = new Date();
      startTime.setHours(8, 0);
      
      const endTime = new Date();
      endTime.setHours(18, 0);
      
      return appointmentTime >= startTime && appointmentTime <= endTime;
    }),
  date: yup
    .date()
    .required("Date is required")
    .min(new Date(), "Cannot select past dates")
    .test('valid-date', 'Cannot select past dates', function(value) {
      if (!value) return true;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return value >= today;
    }),
});

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
  const [activeTab, setActiveTab] = useState('Edit Profile');

  // Profile form
  const {
    register: registerProfile,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: initialProfile,
    mode: 'onSubmit'
  });

  // Appointment form
  const {
    register: registerAppointment,
    handleSubmit: handleAppointmentSubmit,
    formState: { errors: appointmentErrors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
    mode: 'onSubmit'
  });

  const onProfileUpdate = (data) => {
    // TODO: Add backend update logic here
    alert('Profile updated!');
  };

  const onAppointmentSubmit = (data) => {
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
                className={`border rounded-lg py-2.5 px-4 transition-all duration-300 text-sm font-medium
                  ${activeTab === item 
                    ? 'bg-purple-600 text-white font-semibold shadow-md border-purple-600' 
                    : 'bg-white text-gray-700 hover:bg-purple-50 border-gray-200'
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
              <form className="space-y-4" onSubmit={handleProfileSubmit(onProfileUpdate)}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.name && "border-red-500"
                      )}
                      {...registerProfile("name")}
                    />
                    {profileErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone no</label>
                    <input
                      type="number"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.phone && "border-red-500"
                      )}
                      placeholder="Enter phone number"
                      {...registerProfile("phone")}
                    />
                    {profileErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.email && "border-red-500"
                      )}
                      {...registerProfile("email")}
                    />
                    {profileErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Blood Type</label>
                    <input
                      type="text"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.bloodType && "border-red-500"
                      )}
                      {...registerProfile("bloodType")}
                    />
                    {profileErrors.bloodType && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.bloodType.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.gender && "border-red-500"
                      )}
                      {...registerProfile("gender")}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {profileErrors.gender && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.gender.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                      type="number"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.age && "border-red-500"
                      )}
                      {...registerProfile("age")}
                    />
                    {profileErrors.age && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.age.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Weight</label>
                    <input
                      type="number"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.weight && "border-red-500"
                      )}
                      placeholder="Enter weight in kg"
                      {...registerProfile("weight")}
                    />
                    {profileErrors.weight && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.weight.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Previous Donation Date</label>
                    <input
                      type="date"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        profileErrors.previousDonationDate && "border-red-500"
                      )}
                      {...registerProfile("previousDonationDate")}
                    />
                    {profileErrors.previousDonationDate && (
                      <p className="text-red-500 text-sm mt-1">{profileErrors.previousDonationDate.message}</p>
                    )}
                  </div>
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
              <form className="space-y-4" onSubmit={handleAppointmentSubmit(onAppointmentSubmit)}>
                <h2 className="text-3xl font-semibold text-gray-700 mb-6">Appointment Schedule Form</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-md font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        appointmentErrors.name && "border-red-500"
                      )}
                      placeholder="Enter your name"
                      {...registerAppointment("name")}
                    />
                    {appointmentErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{appointmentErrors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        appointmentErrors.email && "border-red-500"
                      )}
                      placeholder="Enter your email"
                      {...registerAppointment("email")}
                    />
                    {appointmentErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{appointmentErrors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-md font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        appointmentErrors.phone && "border-red-500"
                      )}
                      placeholder="Enter your phone no"
                      {...registerAppointment("phone")}
                    />
                    {appointmentErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">{appointmentErrors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        appointmentErrors.location && "border-red-500"
                      )}
                      placeholder="Select Location"
                      {...registerAppointment("location")}
                    />
                    {appointmentErrors.location && (
                      <p className="text-red-500 text-sm mt-1">{appointmentErrors.location.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-md font-medium text-gray-700">Time</label>
                    <input
                      type="time"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        appointmentErrors.time && "border-red-500"
                      )}
                      {...registerAppointment("time")}
                    />
                    {appointmentErrors.time && (
                      <p className="text-red-500 text-sm mt-1">{appointmentErrors.time.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-md font-medium text-gray-700">Date</label>
                    <input
                      type="date"
                      className={classNames(
                        "w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-400",
                        appointmentErrors.date && "border-red-500"
                      )}
                      {...registerAppointment("date")}
                    />
                    {appointmentErrors.date && (
                      <p className="text-red-500 text-sm mt-1">{appointmentErrors.date.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 mt-4"
                >
                  Schedule Appointment
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