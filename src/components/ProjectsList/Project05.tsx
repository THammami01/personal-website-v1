import { FC } from "react";
import project05Img from "../../img/Project05.gif";

interface Project05Props {

}

const Project05: FC<Project05Props> = () => {
  return (
    <div className="project-row" data-aos="fade-up">
      <div className="project-left">
        <img src={project05Img} alt="" />
      </div>
      <div className="project-right">
        <h3>TSI for Typing Practice</h3>
        <ul className="tech-stack-list">
          <p className="text-grey"><b>Stack: </b></p>
          <li><span className="iconify" data-icon="logos:python" data-inline="false"></span></li>
        </ul>

        {/* <p style={{fontSize: ".9rem", margin: ".75rem 0"}}>Project is Undergoing Development.</p> */}

        <div className="project-links">
          <a href="https://github.com/THammami01/TSI/blob/main/app_v2.0.py" className="btn-blue btn-small hover-bg-light" target="_blank"><span className="iconify" data-icon="charm:link-external"></span> Demo</a>
          <a href="https://github.com/THammami01/TSI" className="btn-blue-outline btn-small mx-1" target="_blank"> <i className="fab fa-github"></i
        > Code</a>
          {/* <p className="btn-blue-outline btn-small mx-1" style={{ cursor: "initial" }}> <i className="fab fa-github"></i
          > Code is private</p> */}
        </div>
      </div>
    </div>
  );
}

export default Project05;
