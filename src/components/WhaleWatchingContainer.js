const WhaleWatchingContainer = () => {
  return (
    <div className="absolute top-[409px] left-[60px] w-[678px] h-[306px] text-right text-12xl text-background-f2f2f2 font-body-light">
      <img
        className="absolute top-[17px] left-[646px] w-8 h-8 overflow-hidden"
        alt=""
        src="/eye.svg"
      />
      <div className="absolute top-[65px] left-[373px] w-[305px] h-[147px]">
        <div className="absolute top-[0px] left-[0px] leading-[120%] font-medium flex items-center w-[305px]">
          Watch what the whales are doing
        </div>
        <div className="absolute top-[90px] left-[0px] text-base leading-[120%] font-medium flex items-center w-[305px] opacity-[0.7]">
          All whales are not equal. Know exactly what the whales impacting YOUR
          portfolio are doing.
        </div>
      </div>
      <img
        className="absolute top-[-46px] left-[-60px] rounded-xl w-[455px] h-[426px] object-cover"
        alt=""
        src="/cohorts-1@2x.png"
      />
    </div>
  );
};

export default WhaleWatchingContainer;
