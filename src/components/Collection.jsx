
import choice from "../assets/img/Choose-Your-Enemies.png"
import front from "../assets/img/Front.png"
import signature from "../assets/img/signature.png"
import { FaArrowRight } from "react-icons/fa";
export default function Collection() {
  return (
    <div className="bg-black py-6 ">
      <div className="max-w-6xl mx-auto text-white">
        <div className="hero  min-h-screen mb-8">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="flex items-center  md:w-full ml-0 md:ml-12">
              <img
                src={choice}
                className="w-56 md:w-80" />
              <img
                src={front}
                className=" w-56 md:w-80 " />
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold uppercase">Patrick Bet-David's </h1>
              <h1 className="text-6xl font-bold uppercase text-red-700">Signed   </h1>
              <h1 className="text-6xl font-bold uppercase text-red-700">  collection </h1>
              <button className="btn bg-white uppercase mt-2">Shop now <span><FaArrowRight></FaArrowRight></span></button>
              <img src={signature} alt="signature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
