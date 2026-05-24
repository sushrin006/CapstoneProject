import { useRef, type Dispatch, type SetStateAction } from "react";

export default function OTPInput({
  otp,
  setOtp,
}: {
  otp: string[];
  setOtp: Dispatch<SetStateAction<string[]>>;
}) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (value: string, index: number) => {
    console.log(value);
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <div className="flex gap-6">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputs.current[index] = el;
          }}
          type="text"
          value={digit}
          maxLength={1}
          className="border border-black  rounded-md"
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          style={{
            width: "40px",
            height: "40px",
            textAlign: "center",
            fontSize: "18px",
          }}
        />
      ))}
    </div>
  );
}
