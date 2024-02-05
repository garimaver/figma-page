const Card = () => {
    return (
      <section className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-[22px] text-left text-lg text-seconday font-heading-1-medium">
        <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <b className="h-[27px] relative inline-block">About</b>
            
          </div>
          <div className="self-stretch relative text-base text-secondary-light-shade-shade-10">
            <p className="m-0">{`Acharya Prashant is the preeminent social reformer and educator of true spirituality in the world today. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              He speaks strongly for female empowerment, protection of the natural
              world, compassion for animals, Vedantic wisdom, for living rightly,
              and campaigns against superstition.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              He leads the global movement of freedom and liberation from the
              societal chains that pull us away from Truth and Peacefulness.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`15+ million people follow Acharya Prashant on social media. 20+ million minutes are watched daily, with lifetime views of 2+ billion. `}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">{`Acharya Prashant is an IIT-IIM alumnus (India’s top engineering and management colleges), Ex-Civil Servant, and has authored 100 books on the topics of Karma, Joy, Love, Marriage, Spirituality, & more.`}</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              [Profile maintained by PrashantAdvait Foundation.]
       
            </p>
           
          </div>
        </div>
       
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-base text-secondary-light-shade-shade-8">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-lg text-black">
            <div className="h-[27px] relative font-semibold inline-block">
              Contact Information
            </div>
            <div className="h-[22.6px] w-[22.6px] rounded-[16.07px] bg-secondary-light-shade-shade-4 flex flex-row items-start justify-start p-1 box-border opacity-[0]">
              <img
                className="h-[14.6px] w-[14.6px] relative overflow-hidden shrink-0"
                alt=""
                src="/edit-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch h-12 relative inline-block">
            <p className="m-0 font-semibold">Mobile Number</p>
            <p className="m-0">8467052274</p>
          </div>
          <div className="self-stretch relative">
            <p className="m-0 font-semibold">Email</p>
            <p className="m-0">Prasant@gmail.com</p>
          </div>
          <div className="self-stretch h-12 relative inline-block">
            <p className="m-0 font-semibold">Website</p>
            <p className="m-0">Prasantkumar.com</p>
          </div>
          <div className="self-stretch h-12 relative inline-block">
            <p className="m-0 font-semibold">{`Whatsapp `}</p>
            <p className="m-0">8467052274</p>
          </div>
        </div>
       
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-black">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
            <div className="h-[27px] relative font-semibold inline-block text-black" >
              Address
            </div>
            <div className="h-[22.6px] w-[22.6px] rounded-[16.07px] bg-secondary-light-shade-shade-4 flex flex-row items-start justify-start p-1 box-border opacity-[0]">
             
            </div>
          </div>
          <div className="self-stretch relative text-base text-secondary-light-shade-shade-8">
            <p className="m-0">Dinesh Vishwakarma</p>
            <p className="m-0">
              C\O Mahabir Rana Bharkatta High School Main Road, Red Gate, Near
              Sachin Cloth Store Post - Gadi Bharkatta PS - Birni, Dist- Giridih
            </p>
            <p className="m-0">
              Jharkhand - 825324, Gadi Bharkatta, Giridih District, Jharkhand
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Card;