const Skills = () => {
    return(
        <>
        <div className="column">
        <h5>I'M EXPERT ON</h5>
        <h3>Let's Work</h3>
        <h3>Together</h3>

        <a href="./cv.pdf" download><button>DOWNLOAD CV</button></a>
      </div>
      <div className="column">
        <div className="skill-box">
          <span className="title">Javascript</span>

          <div className="skill-bar">
            <span className="skill-per javascript">
              <span className="tooltip">60%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">HTML5</span>

          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">CSS</span>

          <div className="skill-bar">
            <span className="skill-per css">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">C++</span>

          <div className="skill-bar">
            <span className="skill-per c">
              <span className="tooltip">85%</span>
            </span>
          </div>
        </div>
      </div>
        </>
    )
}
const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(<Skills />);