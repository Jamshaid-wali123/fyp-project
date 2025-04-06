import React from "react";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center mb-4">
          <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
            {/* Placeholder for image upload */}
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm text-gray-500 mt-2">Upload Picture</span>
        </div>
        <form className="space-y-4">
        
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 border rounded"
            required
          />
          <label>Phone no</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone no"
            className="w-full p-2 border rounded"
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <label>Blood type</label>
          <input
            type="text"
            name="bloodType"
            placeholder="Blood Type"
            className="w-full p-2 border rounded"
            required
          />
          <label>Health Condition</label>
          <input
            type="text"
            name="healthCondition"
            placeholder="Health Condition"
            className="w-full p-2 border rounded"
            required
          />
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Age"
            className="w-full p-2 border rounded"
            required
          />
          <label>Weight</label>
          <input
            type="text"
            name="weight"
            placeholder="Weight"
            className="w-full p-2 border rounded"
            required
          />
          <label>Gender</label>
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            className="w-full p-2 border rounded"
            required
          />
          <label>Previous Donation Date</label>
          <input
            type="date"
            name="previousDonationDate"
            placeholder="Previous Donation Date"
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="button"
            className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
