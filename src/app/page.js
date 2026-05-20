import Banner from "@/components/Banner";
import DriveFleet from "@/components/DriveFleet";
import Testimonials from "@/components/Testimonials";
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <>

      <Banner />
      <DriveFleet></DriveFleet>
      <Testimonials></Testimonials>
      <ToastContainer/>
    </>

  );
}
