let generateOtp = () => {
    // Define the lenght of the otp
    const otpLength = 6;

    // Generate OTP using math function
   const otp = Math.floor(Math.random() *Math.pow (10,otpLength));
   /// dispaly otp

   document.getElementById("otpDispaly").innerText = otp
};

document.getElementById("generateBtn").addEventListener("click",generateOtp)