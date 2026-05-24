import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ResetPwIcon from "../icons/reset-pw-icon";
import OTPInput from "../components/otp-field";
import { Button } from "../components/button";

const ResetCode = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!otp.includes("")) setIsError(false);
  }, [otp]);
  return (
    <div className="bg-[#F6F6F8] flex justify-center w-full h-screen items-center ">

   
    <div className="flex flex-col gap-10 justify-center items-center w-fit bg-white p-8 rounded-lg">
      <ResetPwIcon width={80} height={80} />
      <section className="space-y-3 flex flex-col justify-center items-center">
        <h1 className="text-2xl flex justify-center font-bold ">
          Enter Verification Code
        </h1>
        <p className="text-lg flex justify-center text-[#6B7280]">
          We've sent a 6-digit code to your email
        </p>
        <p className="flex justify-center text-l text-[#374151] ">
          {" "}
          sushrin@gmail.com
        </p>
      </section>

      <section className="flex flex-col justify-center gap-2 ">
        <OTPInput otp={otp} setOtp={setOtp} />
        <div className="flex justify-center">
          {isError && <p className="text-red-500 font-bold">OTP is required</p>}
        </div>

        <Button onClick={() => navigate("/")}>Verify Account</Button>
      </section>

      <section className="space-y-5">
        <div className="flex gap-1 text-sm justify-center">
          <p>Didn't receive the code? </p>
          <button className="text-[#1745CF] font-bold">Resend Code</button>
        </div>
        <Link
          to="/login"
          className="text-sm text-[#9CA3AF] flex justify-center"
        >
          Back to Login
        </Link>
      </section>
    </div>
     </div>
  );
};

export default ResetCode;
