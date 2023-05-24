import homePic from "../assets/images/home.svg"

export default function Home(){
    return(
        <div className="container">
            <h2>หน้าแรก</h2>
            <img src={homePic} alt="home" />
        </div>
    );
}