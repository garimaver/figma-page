
import Card from "./Card";
import Header from "./Header";
import FrameCard from './FrameCard';





const LandingPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[352px] box-border gap-[33px] tracking-[normal] mq800:gap-[33px]">
      <div className="w-[269px] hidden" />
   <Header/>
      <main className="w-[1313px] bg-colors-base-primary-foreground flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[28px] max-w-full shrink-0 z-[1] text-left text-base text-colors-base-primary-foreground font-text-base-leading-6-font-medium mq1350:pb-8 mq1350:box-border mq1350:w-[calc(100%_-_40px)] mq800:pb-[21px] mq800:box-border">
        <div className="w-[143px] hidden flex-col items-center justify-start">
          <div className="self-stretch flex-1 rounded-[3px] bg-colors-base-success flex flex-row items-center justify-center py-0 px-4 gap-[9px]">
            <img className="h-6 w-6 relative" alt="" src="/send.svg" />
         
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/edit.svg"
            />
          </div>
        </div>
      <FrameCard/>
        <Card />
      </main>
    </div>
  );
};

export default LandingPage;
