import React from "react";
import "./About.css";
import modding from './images/mods.jpg';
import api from './images/mod2.png';
import community from './images/community.jpg';

export default () => (
  <div className="about">
    <div className="about_bg">
      <div className="about__bg-overlay">
        <div className="row justify-content-center">
          <div className="col-md-10 mt-5">
            <h1>Terasology</h1>
              <p className="mt-5"> An open source voxel world  born from a Minecraft-inspired tech demo 
                <br/>
                Imagine the possibilities! 
              </p>
              <a href="https://github.com/Terasology/terasology.github.io" className="btn btn-light btn-lg mt-5 px-5 font-weight-bold ">Find out More</a>
          </div>
        </div>
      </div>
    </div>
    <section className="about__details py-5 mt-6e">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-5 text-center">About Us</h2>
          <p className="text-center">
            The Terasology project was and is becoming a stable platform for various types of gameplay settings in a voxel world. 
            The creators and maintainers are a diverse mix of software developers, designers, game testers, 
            graphic artists, and musicians. We encourage others to join
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row mt-6e">
            <div className="col-md-5 pt-5">
            <div className="mod_bg"></div>
            </div>
            <div className="col-md-7">
              <h3 className="mb-3 text-right mr-4">History</h3>
              <p className="text-justify">
              From the ground up, Terasology was built to be a super hackable and modular game. 
              We host a large number of modules under the Terasology organization and many more which 
              are maintained by individual enthusiasts. We welcome new ideas, both crazy and well thought-out 
              for modules and game extensions from anyone and everyone, so feel free to talk to us on our <a className="text-success font-weight-bold" href="https://discordapp.com/invite/Terasology">Discord</a> or IRC (#terasology on Freenode).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row mt-6e">
            <div className="col-md-7">
              <h3 className="mb-3  mr-4">Modding API</h3>
              <p className="text-justify">
                Terasology is fully open source and is licensed under the Apache 2.0 
                license for code and under CC BY 4.0 for artwork (see credits for some minor exceptions).
                The Terasology project was and is becoming a stable platform for various types of gameplay settings in a voxel world. 
                The creators and maintainers are a diverse mix of software developers, designers, game testers, 
                graphic artists, and musicians. We encourage others to join
              </p>
            </div>
            <div className="col-md-5 pt-5">
              <div className="mod_api-bg"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row mt-6e">
            <div className="col-md-5 pt-5">
              <div className="mod_group"></div>
            </div>
            <div className="col-md-7">
              <h3 className="mb-3 text-right mr-4">Terasology Community</h3>
              <p className="text-justify">
              The creators and maintainers are a diverse mix of software developers, designers, 
              game testers, graphic artists, musicians and open source loving high schoolers. 
              We encourage and appreciate contributions from everybody, and try to be as warm 
              and welcoming as possible to newcomers.
              If you have any questions or if you just want to chat use this invite link for our <a className="text-success font-weight-bold" href="https://discordapp.com/invite/Terasology">Discord</a>, or check out our 
              IRC channel #terasology on Freenode. And don't worry about missing something by 
              joining only one of those, as we have everything bridged. :)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
