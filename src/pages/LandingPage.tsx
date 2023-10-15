import { Description, NavBar } from "../components"
import hand from '../assets/hand.png';
import { AsideImage } from "../components/Header/AsideImage";

export const LandingPage = () => {
    return (
       <header className="min-h-screen flex flex-col relative">
          <NavBar />
          <img
              src={hand}
              className="absolute top-8 -z-10"
              style={{ width:220}}
            />
          <div className="w-full flex flex-col  xl:flex xl:flex-row justify-center  items-center mt-24 pl-32 pr-32  ">
            <Description />
            <AsideImage />
          </div>
         
       </header>
    )
}