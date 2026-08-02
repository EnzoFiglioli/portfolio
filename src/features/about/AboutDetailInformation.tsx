import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { about } from "./about.data";

export const AboutDetailInformation = () => {
  return (
    <>
    <ul>
        <li className="flex"><MapPin className="mr-4" /> {about.information.location}</li>
        <li className="flex"><GraduationCap className="mr-4" /> {about.information.studing}</li>
        <li className="flex"><Briefcase className="mr-4" /> {about.information.currentJob}</li>
    </ul>
    </>
  )
}
