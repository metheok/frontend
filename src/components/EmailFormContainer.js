import React from "react";
const EmailFormContainer = () => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  React.useEffect(() => {
    const re = /^\S+@\S+\.\S+$/;

    if (!email || re.test(email)) {
      setEmailError(false);
      return;
    }
    setEmailError(true);
  }, [email]);
  return (
    <div className="absolute top-[369px] left-[937px] w-[365px] h-[347px] text-left text-base text-grey-200 font-body-light z-10">
      {/* <div className="absolute top-[126px] left-[13px] rounded-lg bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),_0px_1px_1px_rgba(0,_0,_0,_0.04)] box-border w-[340px] flex flex-row items-center justify-start py-5 px-6 border-[1px] border-solid border-grey-100"> */}
      {emailError && (
        <span className="text-red-500 relative leading-[110%] font-medium absolute top-[126px] left-[13px] ">
          Please enter a valid email
        </span>
      )}
      <input
        placeholder="Your email address"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        className="relative leading-[120%] font-medium absolute top-[126px] left-[13px] rounded-lg bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),_0px_1px_1px_rgba(0,_0,_0,_0.04)] box-border w-[340px] flex flex-row items-center justify-start py-5 px-6 border-[1px] border-solid border-grey-100"
      ></input>
      {/* </div> */}
      <div className="absolute top-[292px] left-[0px] w-[365px] h-[55px] opacity-[0.8] text-center text-grey-900">
        <div className="absolute top-[0px] left-[0px] rounded-lg flex flex-row items-center justify-center py-[18px] px-0">
          <div className="relative leading-[120%] font-semibold">
            You’ll receive an email with an invite link to join.
          </div>
        </div>
      </div>
      <div className="absolute top-[209px] left-[13px] w-[340px] h-[59px] text-center text-white">
        <button
          onClick={() => window.location.replace("http://www.w3schools.com")}
          disabled={!email || emailError}
          className="relative leading-[120%] font-semibold absolute top-[0px] left-[0px] rounded-lg bg-grey-900 box-border w-[340px] h-[59px] flex flex-row items-center justify-center py-[18px] px-7 border-[1px] border-solid border-grey-900 text-grey-300"
        >
          Get started
        </button>
      </div>
      <div className="absolute top-[0px] left-[13px] w-[326px] h-[94px] text-20xl text-grey-300">
        <div className="absolute top-[0px] left-[0px] w-[326px] h-[94px]">
          <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium">
            <p className="m-0">{`Sign up for exclusive access.`}</p>
            {/* <p className="m-0"></p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailFormContainer;
