import Banner from "@/components/Banner";
import CarList from "@/components/CarList";
import DriveFleet from "@/components/DriveFleet";
import Testimonials from "@/components/Testimonials";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <>

      <Banner />
      <CarList/>
      <DriveFleet></DriveFleet>
      <Testimonials></Testimonials>
      <ToastContainer/>
    </>

  );
}
