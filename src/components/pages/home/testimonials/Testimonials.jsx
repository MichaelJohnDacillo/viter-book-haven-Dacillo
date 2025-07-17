import React from 'react'
import CardsTestimonial from '../../../partials/CardsTestimonial';

const Testimonials = () => {
  return (
    <>
        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                What Our Readers Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don't just take our word for it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CardsTestimonial
              s1={"text-yellow-400"} s2={"text-yellow-400"} s3={"text-yellow-400"} s4={"text-yellow-400"} s5={"text-yellow-400"} testimony={"The best selection of books I've found online. Fast shipping and great customer service!"} image={"./images/p1.webp"} name={"Sarah Johnson"} type={"Book Club Membe"}/>

              <CardsTestimonial
              s1={"text-yellow-400"} s2={"text-yellow-400"} s3={"text-yellow-400"} s4={"text-yellow-400"} s5={"text-yellow-400"} testimony={"I love the curated collections. Always find something interesting to read."} image={"./images/p2.webp"} name={"Michael Chen"} type={"Avid Reader"}/>

              <CardsTestimonial
              s1={"text-yellow-400"} s2={"text-yellow-400"} s3={"text-yellow-400"} s4={"text-yellow-400"} s5={"text-gray-300"} testimony={"Great prices and frequent sales. My go-to place for new releases."} image={"./images/p3.webp"} name={"Emily Rodriguez"} type={"Loyal Customer"}/>
            </div>
          </div>
        </section>
    </>
  );
};

export default Testimonials;