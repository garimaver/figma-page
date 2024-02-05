const FrameCard = () => {
    return (
      <section className="self-stretch flex flex-col items-start justify-start max-w-full text-left text-5xl text-black font-heading-1-medium">
        <div className="self-stretch h-[250px] flex flex-row items-start justify-end py-[18px] px-[17px] box-border relative bg-[url('/background2.png')] bg-cover bg-no-repeat bg-[middle] max-w-full">
        
          <img className="h-[250px] flex-1 relative max-w-full overflow-hidden object-cover hidden z-[0]" src="/background2.png" alt="background"/>

          <button className="cursor-pointer [border:none] py-2 pr-3 pl-4 bg-rose-600 rounded-sm flex flex-row items-start justify-start gap-[9px] z-[1]">
             
 <img className="h-6 w-6 relative shrink-0 min-h-[24px]" src="/Vector.png" alt="Edit Profile" /> 
            <div className="relative text-base leading-[24px] font-medium font-text-base-leading-6-font-medium text-white text-colors-base-primary-foreground text-left">
              Edit Profile
            </div>
         
           
          </button>
        
          <img  className="h-[200px] w-[200px] absolute my-0 mx-[!important] bottom-[-40px] left-[31px] rounded-[50%] object-cover z-[1]" src="/prof1.png" alt="Profile"/>
        </div>
        <div className="self-stretch bg-colors-base-primary-foreground box-border flex flex-col items-start justify-start pt-[51px] px-[31px] pb-[22px] max-w-full border-[NaNpx] border-solid border-gray">
          <div className="w-[1313px] h-[157px] relative bg-colors-base-primary-foreground box-border hidden max-w-full border-b-[1px] border-solid border-gray" />
          <h3 className="m-0 h-9 relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-lg">
            Dileep Kumar
          </h3>
          <div className="w-[430px] mt-5 relative text-base text-secondary-light-shade-shade-8 inline-block max-w-full z-[1]">{`Vedanta Teacher | Best-Selling Author | IIT & IIM Alumnus | Ex-Civil Services Officer`}</div>
        </div>
      </section>
    );
  };
  
  export default FrameCard;