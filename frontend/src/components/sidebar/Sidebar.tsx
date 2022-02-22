import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";
import {useReactiveVar} from "@apollo/client";
// import {user} from "../../cache/cache";

const Sidebar = () => {
    // const userVar = useReactiveVar(user);
    return (
            <>
                <SidebarDesktop user={null}/>
                {/*<SidebarMobile user={userVar}/>*/}
            </>
    );
}

export default Sidebar;