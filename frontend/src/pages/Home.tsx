import Sidebar from "../components/sidebar/Sidebar";
import NoteFeed from "../components/notes/NoteFeed";
import Notes from "../components/notes/Notes";

const Home = ({children}:any) => {
    return(
        <div className="flex flex-no-wrap">
            <Sidebar/>
            {children}
        </div>
    )
}

export default Home;