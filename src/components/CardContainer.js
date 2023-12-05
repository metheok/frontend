import { useMemo } from "react";

const CardContainer = ({ personName, jobTitle, testimonialText, pLeft }) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: pLeft,
    };
  }, [pLeft]);

  return (
    <div
      className="absolute top-[827px] left-[533px] rounded-xl bg-white shadow-[0px_4px_10px_rgba(0,_0,_0,_0.04),_0px_1px_1px_rgba(0,_0,_0,_0.04)] w-[353px] flex flex-col items-start justify-start p-5 box-border gap-[20px] text-left text-base text-grey-900 font-body-light"
      style={frameDivStyle}
    >
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="relative leading-[120%] font-semibold">
          {personName}
        </div>
        <div className="relative text-smi leading-[120%] font-medium text-grey-400">
          {jobTitle}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-text-5-">
        <div className="relative leading-[120%] font-medium inline-block w-[313px] shrink-0">
          {testimonialText}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
