import React from 'react';
import './App.css';
import styled from "styled-components"

const HomeStyle = styled.div`
font-family: 'American Typewriter';
color: #e6e6e6;
background-color: #6f263d;
a{
  background-color: #440d16;
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
  background-color: #236192;
}
.footer{
  text-align: center;
  background-color: #236192;
  padding-bottom: 10px;
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
  background-color: #4f131f;
  padding-top: 10px;
}
.main{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body1{
  background-color: #6f263d;
}
.body1{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body2{
  background-color: #4f131f;
  padding-top: 10px;
}
.body2{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body3{
  background-color: #6f263d;
}
.body3{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body4{
  background-color: #4f131f;
  padding-top: 10px;
}
.body4{
  display: flex;
  width: 80%;
  margin: auto
}
.container-body5{
  background-color: #6f263d;
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

            <img
              src={require('./ScreenShots/Iphone/01_login.png')}
              alt='Home Page'
            />

            <p>
              Have you been spending hours practicing your disc golf putt, only to be unsure that you're actually improving? Have you been improving, but want to see where you can improve more? Tired of simply throwing your disc at the chains, and want some games to spice up your practice session? Well then NAW Putter is for you! NAW Putter tracks your makes and misses and organizes it into helpful and interesting statistics. NAW Putter keeps track of your daily practice session, as well as your previous 10 days of practices, so you can keep track of your improvement over time. Want to know how many putts you've made since downloading the app? We got you covered there as well, can you reach 99% accuracy? Games offer you either a more interesting way to train, or a fun break from your regular routine!
            </p>


          </div>
        </div>


        <div className='container-body1'>
          <h1>
            Custom Practice!
          </h1>

          <div className='body1'>

            <img
              src={require('./ScreenShots/Iphone/06_PracticeScreen.png')}
              alt='Blackjack Screen'
            />

            <p>
              Create your own practice session, by choosing the distance and how many you make. Simple as that. Our app will do the rest, keeping track of your daily stats, the stats from your last 10 practice sessions, and your all time stats. Easily compare these stats as soon as you're done with your session either from our end screen, or by heading to the records section!
            </p>

            <img
              src={require('./ScreenShots/Iphone/07_PracticeScreenResults.png')}
              alt='Blackjack Screen'
            />

          </div>
        </div>

        <div className='container-body2'>
          <h1>
            Putting Games!
          </h1>

          <div className='body2'>

            <img
              src={require('./ScreenShots/Iphone/11_GameSelection.png')}
              alt='Blackjack Screen'
            />

            <p>
              Want to try a new practice game? Or do you want to mix it up with a wacky fun disc golf game? Select from several disc golf putting games, some are great for training, others are fun to compete against your friends with! Worried a game may mess up your stats? Simply read our game descriptions, most "training games" will adjust your stats, our "just for fun" games will simply adjust your "just for fun" game stats!
            </p>

            <img
              src={require('./ScreenShots/Iphone/02_GameDescription.png')}
              alt='Blackjack Screen'
            />

          </div>
        </div>


        <div className='container-body3'>
          <h1>
            Records!
          </h1>

          <div className='body3'>

            <p>
              Want to make sure you're improving? Simply stop by the records page and compare your highlights. Compare your all time records to your daily and last 10 days of practice. Check up on your high scores for our disc golf games, and then try to beat your top score! Have a stat that you'd like included? Simply email us with your suggestion and we'll try to incorporate it!
            </p>

            <img
              src={require('./ScreenShots/Iphone/08_Records.png')}
              alt='Blackjack Screen'
            />

          </div>
        </div>


        <div className='container-body4'>
          <h1>
            Update Your Profile!
          </h1>

          <div className='body4'>

            <img
              src={require('./ScreenShots/Iphone/09_Profile.png')}
              alt='Blackjack Screen'
            />

            <p>
              Update your profile to include your favorite discs, your bagsize (how many discs you usually putt with). We use this information to create more stat updates as well as eventually include a breakdown of your putting stats based on which disc you're using. Simply select the disc you're using and we'll keep track of all your stats associated with that disc (in a future update, we're hoping to offer a compare discs section).
          </p>

            <img
              src={require('./ScreenShots/Iphone/10_DiscSelection.png')}
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
              Built in Colorado | Copyright © 2020 NAW Development LLC.
            </p>

          </div>

        </div>
      </HomeStyle>
    </>
  );
}

export default App;
