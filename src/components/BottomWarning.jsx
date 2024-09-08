import { Link } from "react-router-dom";

export default function BottomWarning({label, buttonText,to}) {
  return (
    <div className="flex justify-center gap-1 text-sm py-2">
        <div className="font-bold">{label}</div>
        <Link to={to} className="pointer underline cursor-pointer text-gray-800 font-bold">{buttonText}</Link>
    </div>
  )
}
