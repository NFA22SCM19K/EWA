import Header from "./Header"
import LeftNavigationBar from "./LeftNavigationBar"
import './style.css';
import Content from "./Content";
export default function Home(){
    return(
        <>
        <div className="Container">
        <Header />
        <LeftNavigationBar />
        <Content />
        </div>
        </>
    );
}