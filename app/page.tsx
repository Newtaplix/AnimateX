import CheckOut from "@/components/checkout";
import Counter from "@/components/counter";
import Navlinks from "@/components/navlinks";
import Create from "@/components/create";
import Choose from "@/components/choose";
import AnimateX from "@/components/animatex";


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
        item: <AnimateX/>
    },
    {
      item: <CheckOut quantity="4" text="Checkout"/>,
      difficulty: "Easy"
    },
    
    {
      item: <Counter/>,
      difficulty: "Easy"
    },
    {
      item: <Navlinks list={linkslist}/>,
      difficulty: "Normal"
    },
    {
      item: <Create/>,
      difficulty: "Hard"
    },
    {
      item: <Choose/>,
      difficulty: "Hard"
    }
           
  ]
  return (
    <>
        {
          ListComponents.map((item, i) => 
            <div key={i} className="w-full flex items-center justify-center p-5 relative">
                
                <div className="w-full md:w-170 bg-white min-h-60 md:h-100 lg:h-100 relative shadow-md border border-gray-300 rounded-md mt-10 md:mt-20 flex text-center items-center justify-center">
                  {item.item}
                </div>
            </div>
          )
        }
        
    </>
  );
}
