import React from "react";
import "../about.css";

// About John and Russell
function About() {
  return (
    <div>
      <table className="aboutTable">
        <tr>
          <td className="aboutHeader">John Sieffert</td>
          <td>
            <img
              className="aboutThem"
              src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/14925247_10154686026506563_1833980115889782575_n.jpg?_nc_cat=110&_nc_sid=8bfeb9&_nc_ohc=obCtGn0orGAAX8xSEYd&_nc_ht=scontent-dfw5-1.xx&oh=cd1dd83cf9914cf0494f60c1c3438438&oe=5F092A3C"
              alt="john"
            />
          </td>
          <td className="aboutText">
            John Sieffert is an Air Force veteran who currently works at BAE as
            a lead engineer on the F-35 program. He combines his love for
            working with his hands and his entreprenurial style to make TVK a
            success.
          </td>
        </tr>
      </table>
      <table className="aboutTable">
        <tr>
          <td className="aboutHeader">Russell Barton</td>
          <td>
            <img
              className="aboutThem"
              src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.0-9/10341745_920193041325979_4182119128996726423_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=omF_qDcdGnMAX_ymRSB&_nc_ht=scontent-dfw5-1.xx&oh=27b05c8fb0ec4b7ee4741214dc0771e6&oe=5F060042"
              alt="russell"
            />
          </td>
          <td className="aboutText">
            Russel Barton is a Navy veteran who currently works at WestRock in
            Greenville, TX. He, together with John, is working to build a
            successful business that delivers great products and helps other
            vets as well.
          </td>
        </tr>
      </table>
    </div>
  );
}

export default About;
