import { useRef } from "react";
import "./styles.css";

const OtpConfigurations = () => {
 
  const otpConfigurations ={
    size:4,
  }

  const inputRef = useRef([]);

  const handleKeyUp =(e, index)=> {
    if(e.target.value && index < otpConfigurations.size) {
      inputRef.current[index + 1]?.focus();
    }

    if(e.key == 'Backspace') {
      inputRef.current[index - 1]?.focus();
    }
  }

  return (
    <div>
      OTP Component
      <div>
        {Array.from({length: otpConfigurations.size}).map((_, index) => (
         <input type="text" maxLength={1} className="otp-input" 
         ref={(el) => (inputRef.current[index])} 
         onKeyUp={(e) => handleKeyUp(e, index)}
         />
        ))}
      </div>
    </div>
  );
};

export default OtpConfigurations;
