import aboutPic from "../assets/images/about.svg"

export default function About(){
    return(
        <div className="container">
            <h2>เกี่ยวกับเรา</h2>
            <img src={aboutPic} alt="about" />
        </div>
    );
}