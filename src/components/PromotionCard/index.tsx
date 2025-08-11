import { PromotionCardData } from "../../constant/promotionCard";

const PromotionCard = () => {
  return (
    <>
    {PromotionCardData.map((item) => (
      <div 
        style={{
          overflow: "hidden"
        }}
        className="relative size-full rounded-3xl"
      >
        <div 
          className="relative size-full hover:transition-all hover:duration-[400ms] hover:ease-in-out hover:scale-105"
        >
        <img 
          className="absolute object-cover inset-0 size-full rounded-3xl" 
          src={item.src} 
          alt=""
        />
        <div className="relative text-white font-serif p-4 sm:p-10 size-full flex flex-col justify-between gap-10">
          <div className="w-full sm:w-[70%] space-y-4 sm:space-y-6 lg:h-[270px]">
            <p className="text-sm">{item.subTitle}</p>
            <p className="text-xl sm:text-2xl lg:text-4xl font-bold">{item.title}</p>
            <button  
              className="border border-1 rounded-md py-2 px-6 cursor-pointer hover:bg-white hover:transition-all hover:duration-300 hover:ease-in-out hover:text-black"
            >
                {item.buttonText}
            </button>
          </div>
          <div className="flex items-end justify-end pt-4">
            <p>
              Got question? Read our 
              <a className="ml-1 underline underline-offset-4">
                FAQs
              </a>
            </p>
          </div>
        </div>
        </div>
      </div>
    ))}
  </>
  )
}

export default PromotionCard;