import Container from "./Container";

const NotificationForm = () => {
  return (
    <div className="absolute top-[48px] left-[46px] w-[597.1px] h-[171.5px] text-left text-3xs-1 text-grey-800 font-body-light">
      <div className="absolute top-[0px] left-[203.7px] w-[189.7px] h-[171.5px]">
        <div className="absolute top-[0px] left-[0px] rounded-4xs-4 bg-white shadow-[0px_2.8px_7px_rgba(0,_0,_0,_0.04),_0px_0.7px_0.7px_rgba(0,_0,_0,_0.04)] w-[189.7px] h-[171.5px]">
          <div className="absolute top-[14px] left-[161.7px] rounded-8xs-2 bg-blue-blue w-3.5 h-3.5 overflow-hidden flex flex-col items-center justify-center">
            <img
              className="relative w-[7px] h-[6.7px]"
              alt=""
              src="/icon1.svg"
            />
          </div>
          <div className="absolute top-[137.9px] left-[14px] rounded-10xs-8 bg-grey-50 flex flex-row items-start justify-start p-[4.199999809265137px] gap-[2.8px]">
            <div className="relative leading-[120%] font-medium">$1,000.00</div>
            <img
              className="relative w-[11.2px] h-[11.2px] overflow-hidden shrink-0"
              alt=""
              src="/triangledown.svg"
            />
          </div>
          <img
            className="absolute top-[14px] left-[14px] w-7 h-7 overflow-hidden"
            alt=""
            src="/barchart2.svg"
          />
        </div>
        <div className="absolute top-[97.3px] left-[14px] w-[148px] h-[26px] text-xs-2 text-grey-900">
          <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium">
            <p className="m-0">Notify me when any wallets</p>
            <p className="m-0">move more than</p>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[407.4px] w-[189.7px] h-[171.5px]">
        <div className="absolute top-[0px] left-[0px] rounded-4xs-4 bg-white shadow-[0px_2.8px_7px_rgba(0,_0,_0,_0.04),_0px_0.7px_0.7px_rgba(0,_0,_0,_0.04)] w-[189.7px] h-[171.5px]">
          <div className="absolute top-[14px] left-[161.7px] rounded-8xs-2 bg-blue-blue w-3.5 h-3.5 overflow-hidden flex flex-col items-center justify-center">
            <img
              className="relative w-[7px] h-[6.7px]"
              alt=""
              src="/icon1.svg"
            />
          </div>
          <img
            className="absolute top-[14px] left-[14px] w-7 h-7 overflow-hidden"
            alt=""
            src="/icon1.svg"
          />
        </div>
        <Container dimensions="/icon1.svg" />
      </div>
      <div className="absolute top-[0px] left-[0px] rounded-4xs-4 [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(22,_93,_255,_0.16)),_#fff] shadow-[0px_2.8px_7px_rgba(0,_0,_0,_0.04),_0px_0.7px_0.7px_rgba(0,_0,_0,_0.04)] w-[189.7px] h-[171.5px] text-sm text-grey-900">
        <div className="absolute top-[56px] left-[14px] leading-[120%] font-medium">
          <p className="m-0">We’ll be sending</p>
          <p className="m-0">notifications to you</p>
          <p className="m-0">here</p>
        </div>
        <img
          className="absolute top-[14px] left-[14px] w-7 h-7 overflow-hidden"
          alt=""
          src="/bell.svg"
        />
        <input
          value={"hello@gmail.com"}
          className="absolute top-[122.5px] left-[14px] rounded-7xs-6 bg-white box-border w-[161.7px] h-[35px] flex flex-row items-center justify-start py-[8.399999618530273px] px-[11.199999809265137px] text-smi border-[0.7px] border-solid border-neutral-300 relative leading-[120%] font-medium"
        ></input>
        <div className="absolute top-[14px] left-[127.4px] rounded-7xs-6" />
        <div className="absolute top-[14px] left-[154px] text-3xs-1 leading-[120%] font-semibold text-right">
          Save
        </div>
      </div>
    </div>
  );
};

export default NotificationForm;
