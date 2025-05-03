import CheckOut from "@/components/checkout";
import Counter from "@/components/counter";
import Navlinks from "@/components/navlinks";
import Create from "@/components/create";
import Choose from "@/components/choose";


export default function Home() {
  const linkslist = [
      {
          text: "Home",
          link: "/"
      },
      {
          text: "Contact",
          link: "/"
      },
      {
          text: "About",
          link: "/"
      },
      {
          text: "More",
          link: "/"
      },
      {
          text: "History",
          link: "/"
      },
  ]
  const ListComponents = [
    {
    item: <CheckOut quantity="4" text="Checkout"/>
    },
    {
      item: <Counter/>
    },
    {
      item: <Navlinks list={linkslist}/>
    },
    {
      item: <Create/>
    },
    {
      item: <Choose/>
    }
           
  ]
  return (
    <>
        {
          ListComponents.map((item, i) => 
            <div key={i} className="w-full flex items-center justify-center p-5">
                <div className="w-full md:w-170 bg-white min-h-60 md:h-100 lg:h-100 shadow-md border border-gray-300 rounded-md mt-10 md:mt-20 flex text-center items-center justify-center">
                  {item.item}
                </div>
            </div>
          )
        }
        
    </>
  );
}
