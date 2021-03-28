import React from 'react';
import charlotte from '../assets/images/charlotte-nc.jpg';
import charlotte2 from '../assets/images/charlotte-2.jpg';


const backgroundImages = [charlotte, charlotte2]

export default function Home() {

  return (
    <main>
      <img src={backgroundImages[0]} alt="charlotte-background" about="Image acquired from unsplash" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-4 lg:pt-14 px8 flex-wrap">
        <h1 className="text-4xl text-white cursive leading-none lg:leading-snug home-name">Welcome To My Portfolio</h1>  
        <h2 className="text-sm text-white">Built using React and Sanity</h2>
      </section>
    </main>
  )
}