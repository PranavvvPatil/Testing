import { useState } from 'react';
import google from "../../assets/login/Google.png";
import apple from "../../assets/login/Apple.png";
import eye from "../../assets/login/eye.png";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); 
  return (
    <div className="w-[1512px] h-[986px] flex items-center justify-center bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/b69f/b896/6a79ec5f2a9fcc0c6da7f2c6abce9fbc?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UTm85kUC5NtMghOMo~DyOa0DtpH7JT0HhKYMD2mMuEkya-Ua4~Cm50obbQ3h4mqRgSlN1eD1SgzEVrMZPpHEGyIIR9vKw~~FVCNtgEO0DtWuNyqQ1pmF2kpOKpy1Mf9Tk18fts1Ic40C2eX-SSQye-EheNohIhP2Hi25TDRfP87pzvozITkYmfUbxfCpQ41GGLYbmNo3zQ62ZX3e7K2mb0~cP65eNf0gLHzkJ4ZXfJ7bon9yADnpROuHpdGeGyqaxq1vrxU~jw9eZx8VSZmIQwNx0P8juoDeuHHH1BCZrydM8ckpR3dWLnhTZSQP8ZXwL1EMYm~q8R-a8iqyUoOsCA__')]"
     >

    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full ">
    <h1 className="text-3xl font-semibold text-center mb-4 text-black font-Pacifico leading-custom tracking-wide">
  Welcome Back
</h1>
<p className="text-center mb-6 text-gray-400 font-Pacifico text-lg leading-normal">
  Plants are the earth's lungs
</p>
      
      <form className="mt-10">
      <div className="mb-4 flex justify-between ">
        <div className="flex flex-col ">
        <label className=" text-black mb-1 font-Poppins text-base font-medium leading-[24px] tracking-wide " htmlFor="email">
                 Full Name </label>
          <input
            type="name"
            id="name"
            placeholder="Enter Name"
            className="w-full  py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm"
            required
          />
        </div>
        
        <div className="flex flex-col">
        <label className=" text-black mb-1 font-Poppins text-base font-medium leading-[24px] tracking-wide " htmlFor="email">
                 Username </label>
          <input
            type="name"
            id="name"
            placeholder="example361"
            className="w-full  py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm"
            required
          />
        </div>
        </div>
        <div className="mb-4">
        <label className="block text-black mb-1 font-Poppins text-base font-medium leading-[24px] tracking-wide" htmlFor="email">
                 Email </label>
          <input
            type="email"
            id="email"
            placeholder="example123@gmail.com"
            className="w-full  py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
          <div className="relative">
      <input
        type={showPassword ? "text" : "password"} // Change input type based on state
        id="password"
        placeholder="Enter Your Password"
        className="w-full py-2 border-b border-gray-300 focus:outline-none text-gray-500 font-poppins text-sm pr-10"
        required
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 flex items-center pr-3"
        onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
      >
        <img
          src={eye}
          alt="Toggle Password Visibility"
          className="h-5 w-5"
        />
      </button>
    </div>
        </div>
        
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="terms" className="mr-2 w-[17px] h-[15px] rounded border mt-1 border-black" required />
          <label htmlFor="terms" className="text-gray-500 font-poppins text-sm font-medium  tracking-wide">
            I agree to the <a href="#" className="text-[#6369FF] font-poppins text-lg font-semibold leading-normal underline underline-offset-[0.25rem]">Terms & conditions</a>
          </label>
        </div>
        
        <button
  type="submit"
  className="flex justify-center items-center gap-2 self-stretch rounded-[25px] bg-[#7AA262] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-full px-40 py-2 mt-8"
>
  <span className="text-white">Sign Up</span>
</button>
      </form>

      <div className="flex justify-center gap-10 mb-[40px] mt-[40px]">
        <button className="text-gray-700 hover:text-gray-900 transition">
           <img src={google} alt="" />
        </button>
        <button className="text-gray-700 hover:text-gray-900 transition">
           <img src={apple} alt="" />
        </button>
      </div>
      
      <p className="text-center text-[#8C8C8C] text-sm font-normal font-Poppins">
      Already have an account ? <a href="#" className="ml-2 text-black text-base font-medium leading-6 tracking-[0.5px] font-Poppins "> Log In</a>
      </p>
    </div>
  </div>

  )
}

export default Signup