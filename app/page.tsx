import AnimateX from "@/components/animatex";

export default function Home() {
 
  const ListComponents = [
    {
        item: <AnimateX/>
    },

           
  ]
  return (
    <>
        {
          ListComponents.map((item, i) => 
            <div key={i} className="w-full flex items-center justify-center p-5 relative">
                
                <div className="w-full p-2 md:p-0 md:w-170 min-h-60 md:h-100 lg:h-100 relative md:mt-20 flex text-center items-center justify-center">
                  {item.item}
                </div>
            </div>
          )
        }
        
    </>
  );
}
