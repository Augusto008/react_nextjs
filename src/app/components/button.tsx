import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    color?: "primary" | "secondary" | "success" | "danger";
    clicked: () => void;
}

const Button = ({children, color, clicked}: Props) => {
    return (
        <button className={"btn btn-" + color} onClick={clicked}>{children}</button>
    )
}

export default Button
