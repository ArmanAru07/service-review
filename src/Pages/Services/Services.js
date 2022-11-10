import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Services = () => {
    const services = useLoaderData()

    return (
        <div>
            <h1 className='lg:text-6xl text-center p-4'>Online Counselling Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(services => <p key={services._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <PhotoProvider>
                                    <PhotoView src={services.image}>
                                        <img src={services.image} alt="Shoes" className="rounded-xl" />
                                    </PhotoView>
                                </PhotoProvider>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{services.serviceName}</h2>
                                <p>{services.description.slice(0,100)+'...'} </p>
                                <div className="card-actions">
                                    <h2 className="card-title text-primary">Fee:$ {services.fee}</h2>
                                    <Link to={`/services/${services._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
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