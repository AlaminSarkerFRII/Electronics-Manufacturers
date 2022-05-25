import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../../assests/imgae-1.jpg";

const Portfolio = () => {
  return (
    <div className="px-20">
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse w-full">
          <img
            src={profileImg}
            class="max-w-sm w-full rounded-full shadow-2xl mx-auto"
            alt=""
          />
          <div className="max-w-lg">
            <p className="text-xl">Hi !! I am </p>
            <h1 class="text-5xl font-bold">Alamin Sarker</h1>
            <p class="py-2 text-md">
              Address: 3/7A, Aziz Mohollah, Mohammadpur, Dhaka-1207 ,
              Bangladesh.
              <br /> <p>Mobile No: +8801740051568</p>
              <p className="font-bold">Email: alamin.education1997@gmail.com</p>
            </p>
            <button class="btn btn-primary">Hire Me</button>
          </div>
        </div>
      </div>
      <div className="card-body text-xl py-10">
        <div className="card-title text-2xl"> Career Objective:</div>
        <p>
          Innovative Front End Developer with 1 years training experience
          building and maintaining responsive websites in the recruiting
          industry. Proficient in HTML5, CSS3, JavaScript, React.js Passionate
          about usability and possess working knowledge of Adobe Photoshop,
          Figma, Photophea. Also Online Problem Solving.
        </p>
      </div>
      <div className="card-body text-2xl py-10 grid grid-cols-1">
        <div className="card-title">
          <h1>Project-1 </h1>
          <button> https://ema-john-simple-with-firebase.web.app/</button>
        </div>
        <div className="card-title">
          <h1>Project-02</h1>
          <button>https://visit-world-with-me.web.app/</button>
        </div>
        <div className="card-title">
          <h1>Project-03</h1>
          <button>https://good-foods-a594c.firebaseapp.com/</button>
        </div>
      </div>
      <div className="card-body text-2xl py-10">
        <div className="card-title text-2xl">Skills :</div>
        <p>
          <span className="text-xl">Language: </span>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Bootstrap</li>
          <li>JavaScript, (ES6, OOP)</li>
          <li> React.js</li>
          <li className="text-2xl font-bold">
            Backend: Node.js, Express.js, MongoDB.
          </li>
          <li className="text-2xl font-bold">Python and C (mid level)</li>
        </p>
      </div>

      {/* table */}

      <div className="py-10">
        <div class="overflow-x-auto w-full py-5">
          <h1 className="text-2xl font-bold py-3">Academic Qualification:</h1>
          <table class="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>Exam Title</th>
                <th>Concentration/Major</th>
                <th>Institute</th>
                <th>Result</th>
                <th>Pass. Year </th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              <tr>
                <td>Diploma in Engineering</td>
                <td>Computer Science and Engineering(CSE)</td>
                <td>Feni Polytechnic Institute</td>
                <td>CGPA:3.14 (out of 4)</td>
                <td>2017</td>
                <td>4( Four)Years</td>
              </tr>
              {/* <!-- row 2 --> */}
              <tr>
                <td>Secondary School Certificate (SSC)</td>
                <td>Science</td>
                <td>Dilalpur High School</td>
                <td>GPA:4.50 (out of 5)</td>
                <td>2012</td>
                <td>--</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
