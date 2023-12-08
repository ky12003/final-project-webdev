import "../../css/LandingPage.css";

const FaqSection = () => {
  return (
    <>
      <section id="faq-section" class="section">
        <div id="faq-content-wrap">
          <h1 id="faq-title">Frequently Asked Questions</h1>

          <div class="faq-item">
            <div class="faq-label">
              <h2>Q:</h2>
            </div>
            <div class="faq-content">
              <p class="question">What services does BearPlanner offer?</p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-label">
              <h2>A:</h2>
            </div>
            <div class="faq-content">
              <p class="answer">
                BearPlanner provides a comprehensive course planning platform
                tailored for Berkeley students. Our services include schedule
                optimization, degree tracking, and personalized academic
                guidance.
              </p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-label">
              <h2>Q:</h2>
            </div>
            <div class="faq-content">
              <p class="question">How can I get started with BearPlanner?</p>
            </div>
          </div>

          <div class="faq-item">
            <div class="faq-label">
              <h2>A:</h2>
            </div>
            <div class="faq-content">
              <p class="answer">
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
