
import heartImg from '../assets/heart.png'
const EligibilityScreening = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-10">Eligibility Screening</h1>
      <div className="flex items-center w-[60%] gap-5 justify-between">
        <div className=''>
          <img
            src={heartImg} // Replace with your image URL
            alt="Eligibility Criteria"
            className="w-[80%] rounded-full object-cover"
          />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4 underline">Eligibility criteria</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            <li>Check Age</li>
            <li>Weight</li>
            <li>Health Condition</li>
            <li>Recent History</li>
          </ol>
          <button
            className="flex items-center bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Check Criteria
          </button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityScreening;
