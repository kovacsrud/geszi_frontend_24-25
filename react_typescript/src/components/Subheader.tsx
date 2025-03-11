import { ReactNode } from "react"

type SubheaderProps={
    children:string|ReactNode
}


function Subheader({children}:SubheaderProps) {
  return (
    <div className="text-sky-500">
        <h3>
            {children}
        </h3>
    </div>
  )
}

export default Subheader