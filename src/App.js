import React from 'react';
import './App.css';
import styled from "styled-components"

const HomeStyle = styled.div`
font-family: 'American Typewriter';
color: white;
background-color: #30866a;
a{
  background-color: #30866a;
  padding: 15px;
  color: white;
  border-radius: 25px;
}
p{
  width: 60%;
  margin: auto
}
h1{
  text-align: center;
}
img{
  height: 350px;
  margin-bottom: 10px;
}
.header{
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  color: black
}
.footer{
  text-align: center;
  background-color: white;
  color: black;
  margin-bottom: 10px;
}
.row{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
hr{
  width: 80%
}
.container-main{
  background-color: #29796c;
  padding-top: 10px;
}
.main{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body1{
  background-color: #30866a;
}
.body1{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body2{
  background-color: #29796c;
  padding-top: 10px;
}
.body2{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body3{
  background-color: #30866a;
}
.body3{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body4{
  background-color: #29796c;
  padding-top: 10px;
}
.body4{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body5{
  background-color: #30866a;
}
.body5{
  display: flex;
  width: 80%;
  margin: auto
}
`


function App() {
  return (
    <>
      <HomeStyle>
        <div className='header'>

          <h1>
            NAW Putter
          </h1>

          <div>
            <a href=''>
              DOWNLOAD ON THE APP STORE!
            </a>
          </div>

        </div>

        <div className='container-main'>
          <h1>
            Track Your Putting Practices and Play Putting Games!
          </h1>

          <div className='main'>

            <p>
              Have you been spending hours practicing your disc golf putt, only to be unsure that you're actually improving? Have you been improving, but want to see where you can improve more? Tired of simply throwing your disc at the chains, and want some games to spice up your practice session? Well then NAW Putter is for you! NAW Putter tracks your makes and misses and organizes it into helpful and interesting statistics. NAW Putter keeps track of your daily practice session, as well as your previous 10 days of practices, so you can keep track of your improvement over time. Want to know how many putts you've made since downloading the app? We got you covered there as well, can you reach 99% accuracy? Games offer you either a more interesting way to train, or a fun break from your regular routine!
            </p>

            <img
              src={require('./ScreenShots/Iphone/01_Login.png')}
              alt='Home Page'
            />
          </div>
        </div>


        <div className='container-body1'>
          <h1>
            Play Blackjack!
          </h1>

          <div className='body1'>

            <img
              src={'https://raw.githubusercontent.com/dlafrance99/Blackjack-CardCounter/master/Images/ScreenShots/Screen02_BlackjackBetting.png'}
              alt='Blackjack Screen'
            />

            <p>
              Play Blackjack just like you're at the casino! Although we play for fake money (but real bragging rights), you can grow your blackjack and card counting skills in a regular game of Blackjack! Feel free to change the settings of the game (number of decks, can you surrender, and type of game played)!
            </p>

            <img
              src={'https://raw.githubusercontent.com/dlafrance99/Blackjack-CardCounter/master/Images/ScreenShots/Screen03_BlackjackPlaying.png'}
              alt='Blackjack Screen'
            />

          </div>
        </div>

        <div className='container-body2'>
          <h1>
            Quick Counting!
          </h1>

          <div className='body2'>

            <img
              src={'https://raw.githubusercontent.com/dlafrance99/Blackjack-CardCounter/master/Images/ScreenShots/Screen04_QuickCounting.png'}
              alt='Blackjack Screen'
            />

            <p>
              Practice your card counting skills and try to get the best time in our Quick Card Counter! Race against the clock to attempt to get the correct count after being shown random cards. The game will keep track of your time per card so you can make your card counting more confident and quicker! Make it more challenging by increasing the number of decks, then see if you can beat your best score per card!
            </p>

          </div>
        </div>


        <div className='container-body3'>
          <h1>
            Tracker!
          </h1>

          <div className='body3'>

            <p>
              Want to try out some possible hands? Curious about what to do in a particular situation? Or simply want to use our tool to play at online casinos in the smartest way you can? Well our tracker allows you to enter in dealer card, player cards, and count, then will tell you the statisically best option! While we can guarantee you'll win, we will do our best to make your chances as good as we can!
          </p>

            <img
              src={'https://raw.githubusercontent.com/dlafrance99/Blackjack-CardCounter/master/Images/ScreenShots/Screen05_Tracker.png'}
              alt='Blackjack Screen'
            />

          </div>
        </div>


        <div className='container-body4'>
          <h1>
            Basic Strategy!
          </h1>

          <div className='body4'>

            <img
              src={'https://raw.githubusercontent.com/dlafrance99/Blackjack-CardCounter/master/Images/ScreenShots/Screen06_BasicStrategy.png'}
              alt='Blackjack Screen'
            />

            <p>
              Want to increase your chances of winning? Here's the best place to start! By learning Basic Strategy, and memorizing these charts (and using them to perfection), you can increase your odds against the house! Pair these charts with card counting and you can even give yourself an advantage over the house!
          </p>

          </div>
        </div>


        <div className='container-body5'>
          <h1>
            Card Counting!
          </h1>

          <div className='body5'>

            <p>
              Trying to step up your Blackjack game? Card Counting isn't as hard as you've been led to believe, and with a little bit of explanation, and a lot of practice, can increase your odds against the house, and the odds of winning! This section teaches you the basics of card counting as well as some betting strategies.
          </p>

            <img
              src={'https://raw.githubusercontent.com/dlafrance99/Blackjack-CardCounter/master/Images/ScreenShots/Screen07_CardCounting.png'}
              alt='Blackjack Screen'
            />

          </div>
        </div>

        <div className='footer'>

          <div className='row'>

            <h1>
              Blackjack and Card Counting
            </h1>

            <div>
              <a href=''>
                DOWNLOAD ON THE APP STORE!
              </a>
            </div>

          </div>

          <hr />

          <div className='row'>

            <p>
              nawdevelopment@gmail.com
            </p>

            <p>
              Built in Colorado | Copyright © 2020 NAW Development
            </p>

          </div>

        </div>
      </HomeStyle>
    </>
  );
}

export default App;
