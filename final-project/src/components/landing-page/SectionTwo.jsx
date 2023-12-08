import "../../css/LandingPage.css"

const SectionTwo = () => {

    return (
      <>
        <section id="section3" className="section">
          <div>
            <div className="container">
              <h1 className="feature">Our Features</h1>

              <div className="card-container">
                <div className="card">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHm_h0JmQtQGVu728TY5IK8ohn6aj6e2ai3nZ0qR6rw&s"
                    alt="Feature 1"
                  />
                  <p id="des">
                    {" "}
                    One key feature of Bear Planner is its ability to provide
                    users with a four-year display of classNamees they are
                    planning to take. This feature ensures a comprehensive
                    overview of the academic roadmap, allowing students to
                    carefully plan their coursework throughout their college
                    journey.{" "}
                  </p>
                </div>

                <div className="card">
                  <img
                    src="https://media.istockphoto.com/id/1205507976/vector/graduate-cap-logo-university-mortarboard.jpg?s=612x612&w=0&k=20&c=X_WSdETOyZPl9KeYSdYCYCltoS7cYwUtQHM6hbj_QqQ="
                    alt="Feature 2"
                  />
                  <p id="des">
                    {" "}
                    Bear Planner seamlessly integrates with the user's college
                    and major selections, dynamically adjusting requirements
                    based on their academic pursuits. By linking to the user
                    profile, the system provides a holistic view of
                    major-specific requirements, enabling students to navigate
                    their chosen academic path with clarity.{" "}
                  </p>
                </div>

                <div className="card">
                  <img
                    src="https://i.pinimg.com/736x/4b/90/5b/4b905b1342b5635310923fd10319c265.jpg"
                    alt="Feature 3"
                  />
                  <p id="des">
                    {" "}
                    We prioritize user experience through personalized login
                    authentication, creating a secure and tailored environment
                    for each student. As users log in, they gain access to a
                    dashboard that displays fulfilled requirements and grading
                    styles for each course. For instance, it distinguishes
                    between Pass/No Pass grading options.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default SectionTwo;