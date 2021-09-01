import React, { useState } from "react";

export default function About(props) {
  const [style, setstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
      <div className="container" style={style}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={style}
              >
                Developed for learning purpose by Rushikesh Mehtre{" "}
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                I have developed this web application only for learning
                purpose.I used mainly ReactJS,Javascript and bootstrap for
                design and development.More functionalities will be added as and
                when need arises.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={style}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={style}
              >
                Manipulate text as per your needs
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={style}>
                Text Organizer helps you to organize text ! You can count number
                of words and characters.Also you can get number of minutes
                needed to read the text.Along with it you can change it to
                Uppercase and lowercase as per needs.Last but not least you can
                also remove extra spaces
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
