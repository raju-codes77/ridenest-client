import CarDetails from "@/components/CarDetails";


const CarDetailsPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`http://localhost:5000/explore-cars/${id}`);

    const car = await res.json();

  

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">

          {<CarDetails car={car}/>}
        </section>
    );
};

export default CarDetailsPage;