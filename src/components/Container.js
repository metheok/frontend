const Container = ({ dimensions }) => {
  return (
    <div className="absolute top-[81.2px] left-[14px] w-[114.1px] h-[76px] text-left text-xs-2 text-grey-900 font-body-light">
      <div className="absolute top-[35px] left-[0px] rounded-10xs-8 bg-grey-50 flex flex-row items-center justify-end p-[4.199999809265137px] gap-[2.8px] text-right text-3xs-1 text-grey-800">
        <div className="relative leading-[120%] font-medium">{`> 30 days`}</div>
        <img
          className="relative w-[11.2px] h-[11.2px] overflow-hidden shrink-0"
          alt=""
          src={dimensions}
        />
      </div>
      <div className="absolute top-[0px] left-[0px] w-[114.1px] h-[26px]">
        <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium flex items-center w-[114.1px]">
          Notify me when any wallet dormant for
        </div>
      </div>
      <div className="absolute top-[63px] left-[0px] w-[107.8px] h-[13px]">
        <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium flex items-center w-[107.8px]">
          becomes active
        </div>
      </div>
    </div>
  );
};

export default Container;
