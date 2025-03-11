import { ReactNode } from "react"

interface SectionProps {
    title?:string,
    children:ReactNode
}

function Section({title,children}:SectionProps) {
  return (
    <div>
        <h1 className="text-3xl text-center">{title}</h1>
        <div className="text-center">
            {children}
        </div>
    </div>
  )
}

export default Section