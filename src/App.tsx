import React from 'react';
import Header from './components/Header/Header';
import HeroImage from './assets/hand.jpg'
import SwiperComponent from './components/Swiper/Swiper';
import CardComponent from './components/CardComponent';

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

      <main className="p-4">
        <div className='w-full font-serif font-semibold text-2xl text-left sm:text-center pt-10'>
          <p>Every brand has a story.</p>
          <p>We help the world hear yours.</p>
        </div>
        <div className='pt-14'>
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
        </div>
      </main>

      <footer className="mt-20 py-8 text-center text-gray-500">
        footer
      </footer>
    </div>
  );
};

export default App;
