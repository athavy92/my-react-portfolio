import React from 'react';
import image from '../assets/images/home-background.jpg';
import charlotte from '../assets/images/charlotte-nc.jpg';
import charlotte2 from '../assets/images/charlotte-2.jpg';
import headshot from '../assets/images/21Alec Thavychith.jpg';

const backgroundImages = [charlotte, charlotte2];

export default function Home() {

  return (
    <main>
      <img src={backgroundImages[0]} alt="https://unsplash.com/photos/Icfk7F4Ku0w?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink" about="Image acquired from unsplash" className="absolute object-cover w-full h-full"/>
      <section className="relative flex justify-center min-h-screen pt-4 lg:pt-14 px8 flex-wrap">
        <h1 className="text-4xl text-white cursive leading-none lg:leading-snug home-name">Welcome To My Portfolio</h1>
        <h2 className="text-sm text-white">Built using React and Sanity</h2>
      </section>
    </main>
  )
}