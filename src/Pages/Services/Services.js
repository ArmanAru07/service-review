import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData()

    return (
        <div>
            <h2>Services{services.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(services => <p key={services._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img  src={services.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{services.serviceName}</h2>
                                <p>{services.description} </p>
                                <div className="card-actions">
                                    <h2 className="card-title text-primary">Fee:$ {services.fee}</h2>
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Services;