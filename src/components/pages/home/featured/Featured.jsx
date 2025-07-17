import React from 'react'
import CardsFeatured from '../../../partials/CardsFeatured';

const Featured = () => {
  return (
    <>
        {/* Featured Books */}
        <section id="featured" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Featured Books
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our handpicked selection of must-read titles
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Book 1 */}
              <CardsFeatured
              image={"./images/ft-1.webp"} title={"The Silent Patient"} author={"Alex Michaelides"} s1={"text-yellow-400"} s2={"text-yellow-400"} s3={"text-yellow-400"} s4={"text-yellow-400"} s5={"text-gray-300"} rate={"(4.2)"} price={"$12.99"}/>

              {/* Book 2 */}
              <CardsFeatured
              image={"./images/ft-2.webp"} title={"Atomic Habits"} author={"James Clear"} s1={"text-yellow-400"} s2={"text-yellow-400"} s3={"text-yellow-400"} s4={"text-yellow-400"} s5={"text-yellow-400"} rate={"(4.9)"} price={"$14.99"}/>

              {/* Book 3 */}
              <CardsFeatured
              image={"./images/ft-3.webp"} title={"Educated"} author={"Tara Westover"} s1={"text-yellow-400"} s2={"text-yellow-400"} s3={"text-yellow-400"} s4={"text-yellow-400"} s5={"text-yellow-400"} rate={"(4.8)"} price={"$13.49"}/>

              {/* Book 4 */}
              <CardsFeatured
              image={"./images/ft-4.webp"} title={"Where the Crawdads Sing"} author={"Delia Owens"} s1={"text-yellow-400"} s2={"text-yellow-400"} s3={"text-yellow-400"} s4={"text-yellow-400"} s5={"text-gray-300"} rate={"(4.5)"} price={"$11.99"}/>
            </div>
          </div>
        </section>
    </>
  );
};

export default Featured;