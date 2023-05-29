import "./home.scss"
import Banner from "../../components/Banner/BannerTitle.jsx"
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <div className="home-container">
            <Banner title="Welcome to HRnet! Your all in one employee platform" />
            <Link className="homeLink" to="/CreateEmployee">Add an employee</Link>
            </div>
       
        </>
    )
}