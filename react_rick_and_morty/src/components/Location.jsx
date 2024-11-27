

function Location({location}) {
  return (
    <div className="m-5 card bg-sky-200 text-sky-800 w-96">
    <div className="card-body">
      <h2 className="card-title">Name:{location.name}</h2>
      <p>Type:{location.type}</p>
      <p>Dimension:{location.dimension}</p>
      <div className="card-actions justify-end">
       
      </div>
    </div>
  </div>
  )
}

export default Location