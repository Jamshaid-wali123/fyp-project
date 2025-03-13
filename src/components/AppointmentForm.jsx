const AppointmentForm = () => {
  return (
    <div className="flex justify-center items-center bg-[#254B6C] my-5 ">
      <div className="w-full max-w-md p-8 my-5">
        <h2 className="text-3xl text-white font-semibold text-center mb-6">Appointment Schedule Form</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your name"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="email1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="email2">Email</label>
            <input
              type="email"
              id="email2"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your Email"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your phone no"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-1" htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Select Location"
            />
          </div>
          
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-1" htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Select time"
              />
            </div>
            
            <div className="flex-1">
              <label className="block text-white text-sm font-medium mb-1" htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Select Date"
              />
            </div>
          </div>
          
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
