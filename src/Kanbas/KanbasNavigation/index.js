import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { MdOutlineGroups2 } from "react-icons/md";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineCluster } from "react-icons/ai";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BiHelpCircle } from "react-icons/bi"; 

import "./index.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Groups", "Calendar","Inbox","History","Studio","Commons","Help","signin"];
    const linkToIconMap = {
        Account: <BiUserCircle className="wd-icon" />,
        Dashboard: <RiDashboard3Fill className="wd-icon" />,
        Courses: <FaBook className="wd-icon" />,
        Groups: <MdOutlineGroups2 className="wd-icon" />,
        Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
        Inbox: <HiOutlineInboxArrowDown className="wd-icon" />,
        History: <BsClockHistory className="wd-icon" />,
        Studio: <AiOutlineCluster className="wd-icon" />,
        Commons: <FaArrowRightFromBracket className="wd-icon" />,
        Help: <BiHelpCircle className="wd-icon" />,
    
      };
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-kanbas-navigation" style={{ width: 85 }}>
        <img src={process.env.PUBLIC_URL + '/images/NU.png'} alt="Description" style={{ width: '80px' }} />
         {links.map((link, index) => (
            <Link
                key={index}
                to={`/Kanbas/${link}`}
                className={`list-group-item ${pathname.includes(link) && "active"}`}
            >
                {linkToIconMap[link]}
                <br/>
                {link}
            </Link>
        ))}     
    </div>
    );
}
export default KanbasNavigation;