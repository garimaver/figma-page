const Header = () => {
  return (
    <div className="self-stretch bg-colors-base-primary-foreground shadow-[0px_4px_9px_rgba(0,_0,_0,_0.04)] flex flex-col items-center justify-start top-[0] z-[99] sticky max-w-full">
      <header className="w-[1360px] h-20 flex flex-row items-center justify-start py-[13px] px-5 box-border gap-[40px] max-w-full text-left text-sm text-seconday font-heading-1-medium mq1350:w-[399.7999999999999px] mq800:gap-[40px]">
        <div className="rounded-[4.98px] flex flex-row items-center justify-start py-[3.828996419906616px] pr-4 pl-[3.828996419906616px] gap-[7.66px] text-19xl-5">
         
          <img src="/logo.png" alt="Company Logo" />
         
        </div>
        <div className="w-[960.2px] flex flex-row items-start justify-center gap-[40px] max-w-full mq1350:hidden mq800:gap-[40px]">
          <div className="h-[21px] relative font-semibold inline-block">
            Home
          </div>
          <div className="relative font-semibold whitespace-nowrap">
            Puja Seva
          </div>
          <div className="relative font-semibold">Temple</div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative font-semibold">Astrology</div>
       
            <img className="h-4 w-4 relative"  src="/arrow-down.png" alt="downArrowImg" />
          </div>
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <div className="relative font-semibold">Library</div>
           
            <img className="h-4 w-4 relative" src="/arrow-down.png" alt="downArrowImg" />
          </div>
        </div>
        <div className="w-[73.8px] rounded-8xs bg-colors-base-primary-foreground flex flex-col items-center justify-center p-0.5 box-border text-secondary-light-shade-shade-6">
         
          <img className="w-[42px] h-[42px] relative rounded-[50%] object-cover" src="/prof1.png"  alt="Profile Image" />
          <div className="self-stretch flex flex-row items-center justify-center py-0 px-1.5 gap-[5.5px]">
            <div className="relative">Dileep</div>
           
             <img className="h-4 w-4 relative"  src="/arrow-down.png" alt="downArrowImg" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;