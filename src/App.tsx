import React from 'react';
import Header from './components/Header/Header';
import HeroImage from './assets/hand.jpg'
import SwiperComponent from './components/Swiper/Swiper';
import CardComponent from './components/CardComponent';
import VideoCard from './components/VideoCard';
import ImageListItem from './components/ImageListComponent';
import PromotionCard from './components/PromotionCard';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <section className="w-full h-[100vh] sm:h-screen overflow-hidden">
        <img
          src={HeroImage}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </section>

      <main className="space-y-12 relative">
        {/** Title Section */}
        <section className='w-full font-serif font-semibold text-lg sm:text-4xl text-left sm:text-center py-20 px-4'>
          <p>Every brand has a story.</p>
          <p>We help the world hear yours.</p>
        </section>

        {/** Card Section */}
        <section className='px-4 md:px-10'>
          <div className='flex sm:hidden'>
            <SwiperComponent />
          </div>
          <div className='hidden sm:flex justify-center'>
            <div className='grid grid-flow-col grid-rows-3 lg:grid-rows-2 gap-4 max-w-screen-xl'>
              <CardComponent />
            </div>
          </div>
        </section>

        {/** Video Section */}
        <section className='mx-auto py-20 px-4 md:px-10 space-y-10'>
          <p className='font-serif font-bold text-lg sm:text-4xl sm:text-center'>Innovation You Can See</p>
          <div className='w-full flex flex-col md:grid md:grid-flow-col md:grid-rows-3 gap-10 pt-20'>
            <VideoCard />
          </div>
        </section>

        {/** combined Section */}
        <section className='mx-auto px-4 md:px-10 py-20 bg-black'>

          {/** text Section */}
          <div className='font-serif text-center text-white space-y-10 max-w-screen-md mx-auto'>
            <span className='block font-semibold text-2xl sm:text-6xl'>
              <p>Designed to get better</p>
              <p>with time</p>
            </span>
            <span className='block text-sm sm:text-xl'>
              <p>
                Designed to get better with time, our product evolves alongside you — adapting to your needs, enhancing its performance, and delivering greater value the more you use it. Experience craftsmanship that matures gracefully, ensuring not just reliability today, but exceptional quality for years to come.
              </p>
            </span>
            <button
              className='bg-white text-black px-8 py-4 rounded-full'
            >
              Explore More
            </button>
          </div>

          {/** Image Section */}
          <div className='pt-12'>
            <ImageListItem />
          </div>

        </section>

        {/**  */}
        <section className='flex flex-col lg:flex-row gap-4 px-4 md:px-10'>
          <PromotionCard />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
