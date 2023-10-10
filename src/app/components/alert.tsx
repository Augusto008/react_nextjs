import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    close: () => void;
}

const Alert = ({ children, close }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
        { children }
        <button type="button" onClick={close} className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert;