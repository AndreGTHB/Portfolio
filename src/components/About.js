import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 2000,
});

const About = () => {
  return (
    <div className="AboutBox">
      <div class="box">
        <div>
          <h1>This is About Page</h1>
          <div data-aos="fade-down-right">
            <img
              id="image2"
              className="image"
              src="https://cdn.pixabay.com/photo/2017/05/31/18/38/sea-2361247__340.jpg"
            />
            <div data-aos="fade-down">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Phasellus vestibulum lorem sed risus ultricies tristique. Accumsan
              tortor posuere ac ut consequat semper viverra. Vitae turpis massa
              sed elementum tempus. Ultricies mi eget mauris pharetra et
              ultrices neque. Mauris vitae ultricies leo integer malesuada. Et
              ultrices neque ornare aenean euismod elementum nisi. Neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Ante in nibh
              mauris cursus mattis molestie a iaculis at. Elit ut aliquam purus
              sit. Donec ac odio tempor orci dapibus ultrices. Placerat duis
              ultricies lacus sed turpis tincidunt. In arcu cursus euismod quis
              viverra. Aliquam vestibulum morbi blandit cursus risus at. Mauris
              nunc congue nisi vitae. Et sollicitudin ac orci phasellus. Quam
              vulputate dignissim suspendisse in est ante in nibh. Aliquam ut
              porttitor leo a diam. Vivamus arcu felis bibendum ut. Ut consequat
              semper viverra nam libero. Auctor urna nunc id cursus. In metus
              vulputate eu scelerisque felis. Tincidunt arcu non sodales neque
              sodales. Tempor orci eu lobortis elementum nibh tellus molestie
              nunc non. In fermentum et sollicitudin ac orci phasellus egestas
              tellus. Ullamcorper a lacus vestibulum sed arcu non. Enim neque
              volutpat ac tincidunt vitae semper quis lectus nulla. Viverra nibh
              cras pulvinar mattis. Malesuada fames ac turpis egestas maecenas.
              Arcu ac tortor dignissim convallis. Sollicitudin aliquam ultrices
              sagittis orci a scelerisque purus semper eget. In nisl nisi
              scelerisque eu.
            </div>
            <img
              id="image3"
              className="image"
              src="https://cdn.pixabay.com/photo/2016/12/05/11/39/fox-1883658__340.jpg"
            />
            <img
              id="image14"
              className="image"
              src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
