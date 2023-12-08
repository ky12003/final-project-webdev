import "../../css/LandingPage.css";

const FaqSection = () => {
  return (
    <>
      <section id="faq-section" className="section">
        <div id="faq-content-wrap">
          <h1 id="faq-title">Frequently Asked Questions</h1>

          <div className="faq-item">
            <div className="faq-label">
              <h2>Q:</h2>
            </div>
            <div className="faq-content">
              <p className="question">What services does BearPlanner offer?</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-label">
              <h2>A:</h2>
            </div>
            <div className="faq-content">
              <p className="answer">
                BearPlanner provides a comprehensive course planning platform
                tailored for Berkeley students. Our services include schedule
                optimization, degree tracking, and personalized academic
                guidance.
              </p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-label">
              <h2>Q:</h2>
            </div>
            <div className="faq-content">
              <p className="question">How can I get started with BearPlanner?</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-label">
              <h2>A:</h2>
            </div>
            <div className="faq-content">
              <p className="answer">
                To get started, simply create an account on our platform. Once
                logged in, you can input your courses, explore scheduling
                options, and take advantage of our user-friendly tools designed
                to streamline your academic planning experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
