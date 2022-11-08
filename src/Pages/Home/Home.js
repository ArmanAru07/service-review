import React from 'react';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <div className='border rounded m-3 p-4'>
                <h1 className='text-6xl text-center'>Online Counselling in Three Simple Steps</h1>
                <div className='hero mt-4'>
                <div className='hero-content flex-col lg:flex-row'>
                    <div className="card w-1/3 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title text-6xl">One</h2>
                            <h2 className="card-title">Connect with an expert</h2>
                            <p>Connect with a HopeQure professional and consult confidentially with the help of secure online video counseling.</p>
                        </div>
                    </div>
                    <div className="card w-1/3 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title text-6xl">Two</h2>
                            <h2 className="card-title">Discuss your concern</h2>
                            <p>Get online mental health counseling by talking to a therapist and receive clarity in your thoughts and actions.</p>
                        </div>
                    </div>
                    <div className="card w-1/3 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title text-6xl">Three</h2>
                            <h2 className="card-title">Become a Happier You</h2>
                            <p>Build resilience and become a better version of yourself anytime, anywhere with the help of online counseling.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;