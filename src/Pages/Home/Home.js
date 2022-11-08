import React from 'react';
import Banner from './Banner/Banner';
import img from '../../Assets/image/dr/doctor.webp'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* about section 1*/}
            <div className='border rounded m-3 p-4'>
                <h1 className='lg:text-6xl text-center'>Online Counselling in Three Simple Steps</h1>
                <div className='hero mt-4'>
                    <div className='hero-content flex-col lg:flex-row'>
                        <div className="card lg:w-1/3 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title text-6xl">One</h2>
                                <h2 className="card-title">Connect with an expert</h2>
                                <p>Connect with a HopeQure professional and consult confidentially with the help of secure online video counseling.</p>
                            </div>
                        </div>
                        <div className="card lg:w-1/3 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title text-6xl">Two</h2>
                                <h2 className="card-title">Discuss your concern</h2>
                                <p>Get online mental health counseling by talking to a therapist and receive clarity in your thoughts and actions.</p>
                            </div>
                        </div>
                        <div className="card lg:w-1/3 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title text-6xl">Three</h2>
                                <h2 className="card-title">Become a Happier You</h2>
                                <p>Build resilience and become a better version of yourself anytime, anywhere with the help of online counseling.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about section 2 */}
            <div className=" border rounded hero min-h-screen bg-base-200 mb-6">
                <div className="hero-content flex-col lg:flex-row">
                    <img alt='' src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Ms. Zahabiya Bambora</h1>
                        <p className='font-bold'>Clinical Psychologist <br />

                            06 years Experience <br />

                            400+ Successful sessions</p>
                        <p className="py-6">I am a RCI registered Clinical Psychologist with expertise in severe clinical and sub-clinical mental health issues such as Schizophrenia, Dissociation, Depression, Anxiety, OCD, Phobias etc. along with psychological assessments and therapy. and counseling in areas of Marital, adolescent, young adults, teenagers geriatric and childhood concerns, relationship issues, parent-child conflicts, stress, trauma. I am trained to use a variety of psychotherapies and counseling techniques including Cognitive behavior therapy (CBT), psychodynamic therapy, mindfulness based therapy. I employ an eclectic approach that is tailored for the needs of each individual.</p>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;