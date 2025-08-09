import React from 'react';
import Header from './components/Header/Header';
import HeroImage from './assets/hand.jpg'
import SwiperComponent from './components/Swiper/Swiper';
import CardComponent from './components/CardComponent';
import VideoCard from './components/VideoCard';
import ImageListItem from './components/ImageListComponent';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Header />
      <section className="w-full aspect-[1/2] sm:aspect-[4/5] lg:aspect-[3/2] overflow-hidden">
        <img
          src={HeroImage}
          alt="hero"
          className="w-full h-full object-cover"
        />
      </section>

      <main className="space-y-12">
        {/** Title Section */}
        <section className='w-full font-serif font-semibold text-lg sm:text-2xl text-left sm:text-center pt-10 px-4'>
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
              <CardComponent 
                image=''
                cardTitle='cardTitle'
                cardDescription='cardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescription'  
              />
              <CardComponent 
                image=''
                cardTitle='cardTitle'
                cardDescription='cardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescription'  
              />
              <CardComponent 
                image=''
                cardTitle='cardTitle'
                cardDescription='cardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescription'  
              />
              <CardComponent 
                image=''
                cardTitle='cardTitle'
                cardDescription='cardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescription'  
              />
              <CardComponent 
                image=''
                cardTitle='cardTitle'
                cardDescription='cardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescription'  
              />
              <CardComponent 
                image=''
                cardTitle='cardTitle'
                cardDescription='cardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescriptioncardDescription'  
              />
            </div>
          </div>
        </section>

        {/** Video Section */}
        <section className='mx-auto px-4 md:px-10'>
          <div className='w-full flex flex-col md:grid md:grid-flow-col md:grid-rows-3 gap-4'>
            <VideoCard 
              src='/video/123.mp4'
            />
            <VideoCard 
              src='/video/123.mp4'
            />
            <VideoCard 
              src='/video/123.mp4'
            />
            <VideoCard 
              src='/video/123.mp4'
            />
            <VideoCard 
              src='/video/123.mp4'
            />
            <VideoCard 
              src='/video/123.mp4'
            />
          </div>
        </section>

        {/** combined Section */}
        <section className='mx-auto bg-black px-4 md:px-10 py-10'>

          {/** text Section */}
          <span className='font-serif font-semibold text-lg sm:text-2xl text-center text-white'>
            <p>Where quality meets passion.</p>
            <p>Your story, our brand.</p>
          </span>

          {/** Image Section */}
          <div className='pt-12'>
            <ImageListItem />
          </div>

        </section>
      </main>

      <footer className="mt-20 py-8 text-center text-gray-500">
        footer
      </footer>
    </div>
  );
};

export default App;
