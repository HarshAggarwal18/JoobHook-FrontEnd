
import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {

    const links = [
        { name: "Find Jobs", url: "find-jobs" },
        { name: "Find Talent", url: "find-talent" },
        { name: "Post Job", url: "post-job/0" },
        { name: "Posted Jobs", url: "posted-jobs/0" },
        { name: "Job History", url: "job-history" },
        { name: "AI Job Suggestions", url: "https://ai-resume-analyzer-frontend-3efd.onrender.com" }
    ]
    const location = useLocation();
    return <div className="flex bs-mx:!hidden gap-5 text-mine-shaft-300 h-full items-center">
        {
            links.map((link, index) => (
                <div key={index} className={`${location.pathname === "/" + link.url ? "border-bright-sun-400 text-bright-sun-400" : "border-transparent"} border-t-[3px] h-full flex items-center`}>
                    {
                        link.name === "AI Job Suggestions" ? (
                            <Link className="font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500 text-transparent bg-clip-text animate-[pulse_3s_ease-in-out_infinite] hover:scale-110 transition-all duration-500 drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" key={index} to={link.url} >
                                {link.name} ✨
                            </Link>
                        ) : (
                            <Link className="hover:text-mine-shaft-200 transition-colors duration-300" key={index} to={link.url}>{link.name}</Link>
                        )
                    }
                </div>
            ))

        }
    </div>
}
export default NavLinks;