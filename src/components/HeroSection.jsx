import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
      <div className="w-[90%] text-white">
        <h1 className="text-5xl mb-4 text-center font-semibold">
          Transforming Your Care
        </h1>
        <p className="text-xl mb-4 text-center">
          Donate Your blood and save life
        </p>
        <p className="italic mb-8 text-center text-[.8rem] w-[80%] mx-auto">
          " Blood donors report feeling a sense of great satisfaction after
          making their blood donation. Why? Because helping others in need just
          feels good."
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => navigate('/sign-up')} 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded"
          >
            Registered
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
