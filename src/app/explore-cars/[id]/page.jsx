import CarDetails from "@/components/CarDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const CarDetailsPage = async ({ params }) => {
    const { id } = await params;
    const {token}=await auth.api.getToken({
        headers:await headers()
    })
    const res = await fetch(`http://localhost:5000/all-cars/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    });

    const car = await res.json();

  

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">

          {<CarDetails car={car}/>}
        </section>
    );
};

export default CarDetailsPage;