import Button from "../Button";
import CreateNewPost from "./createNewPost";
import {useNavigate} from "react-router-dom";

const SidebarDesktop = ({user}:any) => {
    console.log(user);
    const navigate = useNavigate();
    return(
        <div className="w-64 absolute sm:relative bg-gray-800 shadow md:h-screen flex-col justify-between hidden sm:flex">
            <div className="px-8">
                <div className="h-16 w-full flex items-center">
                    <div className="text-white text-3xl">
                        LOL
                    </div>
                </div>
                <ul className="mt-12">
                    <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6" onClick={() => {
                        navigate('/');
                    }}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <rect x={4} y={4} width={6} height={6} rx={1} />
                                <rect x={14} y={4} width={6} height={6} rx={1} />
                                <rect x={4} y={14} width={6} height={6} rx={1} />
                                <rect x={14} y={14} width={6} height={6} rx={1} />
                            </svg>
                            <span className="text-sm  ml-2">Мой профиль</span>
                        </div>
                        <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">5</div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6" onClick={() => {
                        navigate('/notes');
                    }}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                            </svg>
                            <span className="text-sm  ml-2">Посты</span>
                        </div>
                        <div className="py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs">8</div>
                    </li>
                    <li className="flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6" onClick={() => {
                        navigate('/mynotes');
                    }}>
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={18} height={18} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                <circle cx={12} cy={12} r={9} />
                            </svg>
                            <span className="text-sm  ml-2">Мои посты</span>
                        </div>
                    </li>
                    <CreateNewPost/>
                </ul>
            </div>
        </div>
    )
}

export default SidebarDesktop;