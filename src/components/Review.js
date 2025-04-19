import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Autoplay, Keyboard, Navigation } from 'swiper/modules'; // Import required modules
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

const Testimonials = () => {
    return (
        <section>
            <div className="container-fluid mt-5" id="testimonalsec">
                <h2>What travelers are saying about us!</h2>
                <p>
                    Thank you for sharing your kind words with us! It’s truly wonderful to hear about your peaceful travel adventures.<br />
                    We’re delighted to have been a part of your journey and look forward to helping you create more memorable experiences.
                </p>
                <div className="container reviewsection">
                    <Swiper
                        modules={[Autoplay, Keyboard, Navigation]} // Use required modules here
                        slidesPerView={1}
                        centeredSlides={true}
                        spaceBetween={10}
                        keyboard={{ enabled: true }}
                        loop={true}
                        autoplay={{
                            delay: 3000, // Adjust delay as needed
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            600: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="reviewslide">
                                    <h5>{testimonial.name}</h5>
                                    <p>{testimonial.feedback}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

const testimonials = [
  { name: 'RAGAVI', feedback: 'Overall, Travel Easy-la hotels add panna, na use pannina experience super-a irundhadhu. Ithu easy-a book panna, convenient, and value-for-money-a irukku.' },
  { name: 'MATHAN', feedback: 'Customer reviews paarthutu, na easy ah decide panninen, appo booking smooth ah nadandhudhu. Location search pannumpothu time save aguthu. Map view pathutu, near-by places plan pannalaam.' },
  { name: 'JOE', feedback: 'Travel Easy website use pannittu, na romba happy! Service and features super-a irukku. First time, na hotel booking try pannadhuda, website-la hotels add pannuvanga, prices competitive-a irundhadhu.' },
  { name: 'JOHN CHARLIE', feedback: 'The Travel Easy website was very useful for providing traveler feedback. But, it would be better if some more facilities were added.' },
  { name: 'ARIVAZHAGAN', feedback: 'I am glad I used the Travel Easy website. It made it easy to get travel information. Guidance and detailed information about travel routes was provided.' },
  { name: 'SANTHOSH', feedback: 'Please Include a field for users to provide their email if they’d like to be updated when the feature launches.' },
  { name: 'AARTHI', feedback: 'Hi, please considering adding more hotels for staying, it’s really helpful to us.' },
  { name: 'MAHETHA', feedback: 'We need place searching option to your website it would be helpful for us.' },
  { name: 'RITHI', feedback: 'It was an amazing experience, but a tough trek, will remember for a lifetime. Thanks for creating amazing experience. The further back you go better it gets.' },
  { name: 'JASHIMA', feedback: 'A must goes place! beautiful mountain along the way.' },
  { name: 'GEORGE', feedback: 'If you’ve had an epic experience with a travel site, there are plenty of ways to let them know what’s up! First, go straight to their website or shoot them an email—most places have a feedback form, but let’s be real.' },
  { name: 'SHRAVAN', feedback: 'There is an extremely huge list of all the factors that are a part of your rank in the Google Search Engine.' },
  { name: 'RAINA SHIVA', feedback: 'Great website setup! Sooper helpful assistance and response for any question I had.' },
  { name: 'DHANUJA REDDY', feedback: 'Highlight the areas you find useful or well-executed. Thank you.' },
  { name: 'LITHINA', feedback: 'This was the first time ever using a travel website for visiting places. Every details were executed to perfection.' },
  { name: 'ABDUL KALIQ', feedback: 'This site is very useful for travelers. Tamilnadu all place almost covers in website. Request in Features update hotel stay in kindly fast update.' },
  { name: 'THUSREE MOHAMMED', feedback: 'This website is very important in traveling person and bike rider. TN place almost included in site very thank you so much in developing company.' },
];

export default Testimonials;
