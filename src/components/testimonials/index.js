import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      text: "This quizzing app is a game-changer! The combination of exciting quizzes, rewarding prizes, and a user-friendly interface makes it a must-try for anyone who loves movies.",
      name: "Vishal Munjal",
      location: "Agra",
    },
    {
      text: "I'm hooked! This quizzing app is my new go-to destination for movie trivia. The rewards are amazing, but it's the thrill of competition that keeps me coming back for more!!!",
      name: "Natasha Cintury",
      location: "Sikkim",
    },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h3>
        Real <span>people</span>, Real <span>money</span>
      </h3>
      <p>
        What winners say about <strong>FANIZM</strong>
      </p>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>{review.text}</p>
            <h4>
              {review.name}, <span>{review.location}</span>
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
