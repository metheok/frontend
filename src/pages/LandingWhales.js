import CardContainer from "../components/CardContainer";
import EmailFormContainer from "../components/EmailFormContainer";
import NotificationForm from "../components/NotificationForm";
import WhaleWatchingContainer from "../components/WhaleWatchingContainer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const LandingWhales = () => {
  return (
    <div className="relative bg-grey-900 w-full h-[1024px] overflow-y-auto text-left text-12xl text-background-f2f2f2 font-body-light">
      <div className="absolute top-[-114px] left-[-384px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(31,_169,_17,_0.81)_17.21%,_#2f15d0_64.58%,_rgba(0,_0,_0,_0))] w-[1334px] h-[1257.8px]" />

      <CardContainer
        personName="Yash P"
        jobTitle="Research, 3poch Crypto Hedge Fund"
        testimonialText="“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
      />
      <CardContainer
        personName="Jack F"
        jobTitle="Ex Blackrock PM"
        testimonialText="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
        pLeft="160px"
      />
      <CardContainer
        personName="Jack F"
        jobTitle="Ex Blackrock PM"
        testimonialText="“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
        pLeft="160px"
      />
      <div className="absolute top-[0px] left-[800px] bg-white shadow-[0px_8px_22px_-6px_rgba(24,_39,_75,_0.12),_0px_14px_64px_-4px_rgba(24,_39,_75,_0.12)] w-[640px] h-[1024px] z-10" />
      <img
        className="absolute h-[5.86%] w-[4.17%] top-[88.28%] right-[91.67%] bottom-[5.86%] left-[4.17%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <EmailFormContainer clas />
      <div className="absolute top-[86px] left-[60px] w-[322px] h-[251px]">
        <div className="absolute top-[48px] left-[0px] leading-[120%] font-medium flex items-center w-[313px] ">
          Get notified when a highly correlated whale makes a move
        </div>
        <div className="absolute top-[175px] left-[0px] text-base leading-[120%] font-medium flex items-center w-[322px] opacity-[0.7]">
          Find out when a certain whale moves more than any preset amount
          on-chain or when a dormant whale you care about becomes active.
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-8 h-8 overflow-hidden"
          alt=""
          src="/bell1.svg"
        />
      </div>
      <div className="absolute top-[737px] left-[338px] text-6xl leading-[120%] font-medium text-right flex items-center w-[400px]">
        Testimonials
      </div>
      <div className="absolute top-[786.5px] left-[59.5px] box-border w-[679px] h-px border-t-[1px] border-solid border-grey-50" />
      <div className="absolute top-[44px] left-[393px] w-[407px] h-[304px]">
        <NotificationForm />
      </div>
      <WhaleWatchingContainer />
    </div>
  );
};

export default LandingWhales;
