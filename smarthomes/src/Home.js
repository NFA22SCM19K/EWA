import Header from "./Header"
import LeftNavigationBar from "./LeftNavigationBar"
import './style.css';
export default function Home(){
    return(
        <>
        <div className="Container">
        <Header />
        <LeftNavigationBar />
        </div>
        </>
    );
}