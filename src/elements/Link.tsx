import { Link } from "react-router-dom"

type LinkProps = {
    to: string,
    style?: string,
    label: string
}
export const LinkItem = (props: LinkProps) => {
    return (
       <Link to={props.to} className={`text-[#0d0d0d] ${props.style}`}>
          {props.label}
       </Link>
    )
}