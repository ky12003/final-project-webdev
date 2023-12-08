import "../../css/LandingPage.css"

const SectionOne = () => {

    return (
      <>
        <section id="section1" className="section">
            <div id="content">
                <h1 id="header" >BearPlanner</h1>
                <p id="subtext">Welcome to Bear Planner; a website designed by Berkeley Bears for Berkeley Bears! Bear Planner is a hub crafted exclusively for Berkeley students. Tired of wrestling with complex schedules and struggling to coordinate your courses effectively? Enter our platform, where we've simplified the art of course planning to elevate your academic experience.</p>
                <button id="generate-button">Start Generating</button>
                <p id ="login"> Already have an account? <a href = "homepage.html">Sign In</a></p>
            </div>

            <div id="image-container">
                <img id="profile-image" src="https://i0.wp.com/newspack-berkeleyside-cityside.s3.amazonaws.com/wp-content/uploads/2021/04/UC-Berkeley-campanile..jpg?ssl=1" alt="Profile Image"/>
            </div>
        </section>
      </>
    );
  }
  
  export default SectionOne;