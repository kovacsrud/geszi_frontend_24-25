type HeaderProps={
    headerText:string,
    id:number
}


function Header({headerText,id}:HeaderProps) {
  return (
    <div>
        <h1 className="text-3xl text-center">{headerText}</h1>
        <h3 className="text-center">{id}</h3>
    </div>
  )
}

export default Header