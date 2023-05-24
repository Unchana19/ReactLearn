import notFoundPic from "../assets/images/notfound.svg"

export default function NotFound(){
    return(
        <div className="container">
            <h3 className="title">404 NOTFOUND</h3>
            <img src={notFoundPic} alt="not found" />
        </div>
    );
}