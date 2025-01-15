

function Kutyafajta({kutyafajta}) {
  return (
    <div className="card bg-sky-200 text-sky-900 w-96 m-2">
  <div className="card-body">
    <h2 className="card-title">Id:{kutyafajta.Id}</h2>
    <p>{kutyafajta.nev}</p>
    <p>{kutyafajta.eredetinev}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
  )
}

export default Kutyafajta