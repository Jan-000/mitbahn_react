import React from 'react'
import Home from '../pages/Home';

export default function HomeView() {
  return (
    <div className='home-view' >
        <Home />
        <article>
            <h2 className='mitBahn-greet'>Welcome to mitBahn</h2>
            <p className='mitBahn-greet-text'>The app that will help you travel cheap in Germany with the Quer-durchs-Land-Ticket. Let us present some of the benefits.</p>
            <article>
                <h3>Eco friendly</h3>
                <p>
                The train is one of the most eco friendly land vehicles.
                It only emmits 1/3 of the emission from a regular car per kilometre (yes metric system is the way to go). 
                While you ride you won't have to worry about price explosions at german Gas stations and that you didn't kill the planet
                as much as you could have today.
                
                </p>
                <figure>
                    <img  width="50%" alt="emissions" src="emissions.jpeg"></img>
                    <figcaption>Comparison of emissions among vehicles.</figcaption>
                </figure>
                
                <hr></hr>
            </article>
            <article>
                <h3>Connecting</h3>
                <p>
                    Even for people knowing about this possibility it can be very hard to find other people with the same destination. This app allows to
                    connect outside of your circle of friends. You will meet new people. And maybe some of these will change your life. 
                    A new friend? A person so passionate about something you get pulled into something completely new? A new love? 
                    We don't know. If we knew we would maybe charge extra for love.
                    
                </p>
                <figure>
                    <img width="50%" alt="romance" src="traintravel.webp"></img>
                    <figcaption>Always out of range.</figcaption>
                </figure>

                <hr></hr>
            </article>
            <article>
                <h3>Relaxed</h3>
                <p>
                    Ever drove a car over long distances while passengers annoyed the **** out of you?
                    Almost had an accident while you got distracted? Your kid turned on the light in the back and you couldn't 
                    see anything at night anymore? Guess what. You can have the same with random strangers but with the
                    good feeling that it's none of your business. Because you are not driving. You sit there and feel the slight
                    vibrations of the train. Looking out of the window. You can walk around whenever you want. Consume whatever you want. 
                    Total freedom! Toilets! Sometimes 
                    there even is free cocaine! Sounds heavenly, right?
                </p>
                <figure>
                    <img width="50%" alt="angry" src="angrydude.jpg"></img>
                    <figcaption>U mad bro?</figcaption>
                </figure>

                <hr></hr>
            </article>
            <article>
                <h3>Cheap</h3>
                <p>Not much to say about this. Money always speaks for itself.</p>
                <figure>
                    <img width="50%" alt="prices" src="prices.png"></img>
                    <figcaption>Prices as of Feb.2022</figcaption>
                </figure>

                <hr></hr>
            </article>
            <article>
                <h2>So take a seat and let's have a ride.</h2>
                <figure>
               
                    <img width="50%" alt="yea" src="train.gif"></img>
                    <figcaption>Yeehaw</figcaption>
                </figure>
            </article>
        </article>
    </div>
  )
}
