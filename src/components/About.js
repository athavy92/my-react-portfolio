import React from 'react';
import headshot from '../assets/images/21Alec Thavychith.jpg';

export default function About() {
  return (
    <main>
      <section className="relative flex justify-center min-h-screen pt-8 lg:pt-24 px8 flex-wrap">
        <h1 className="text-4xl leading-none lg:leading-snug home-name">About Me</h1>
        <img src={headshot} className="relative flex justify-center rounded-full h-52" alt="profile-pic"/>
      </section>
    </main>
  )
}