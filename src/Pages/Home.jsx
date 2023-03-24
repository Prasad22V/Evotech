import React from 'react'
import Products from '../Components/Products';
import Slider from '../Components/Slider';
import "./Css/Home.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';


const Home = () => {
  return (
    <>
      <Slider />

      <section className='home_hero'>
        {/* Left side div */}
        <div className="home_hero-image">
          <figure>
            {/* <img src="https://o.remove.bg/downloads/5591247a-c6d1-4c67-a136-31674ef59eff/evoTechBootle-removebg-preview.png" alt="" /> */}
          </figure>
        </div>

        {/* Right side div */}
        <div className='home_hero_info'>
          <div className="home_hero_heading">
            <h1>Always Want Safe and Good Water</h1>
            <h2>For Healthy Life</h2>
          </div>

          <div className="home_hero_para">
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi maxime optio ipsam nesciunt dicta et sapiente, nihil amet facilis
            </p>
          </div>
          <button className="button">
            Explore &#10132;
          </button>
        </div>
      </section>

      <div className="home_products">
        <Products />
        <Products />
        <Products />
      </div>

      <div className="home_qualities">

        <div className="home_quality_box">
          <div className="home_quality_heading">
            <ThumbUpIcon className='home_quality_icon' />
            <h2>Best Products</h2>
          </div>
          <div className="home_quality_info">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>

        </div>

        <div className="home_quality_box">
          <div className="home_quality_heading">
            <CheckCircleIcon className='home_quality_icon' />
            <h2>Expertise</h2>
          </div>
          <div className="home_quality_info">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>

        <div className="home_quality_box">
          <div className="home_quality_heading">
            <GroupsRoundedIcon className='home_quality_icon' />
            <h2>Team Work</h2>
          </div>
          <div className="home_quality_info">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing.</h3>
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
        </div>


      </div>
    </>
  )
}

export default Home