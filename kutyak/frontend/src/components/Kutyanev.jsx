
function Kutyanev({kutyanev}) {
  return (
    <div className="card bg-primary text-primary-content w-96">
  <div className="card-body">
    <h2 className="card-title">Id:{kutyanev.Id}</h2>
    <p>{kutyanev.nev}</p>
    <p>{kutyanev.eredetinev}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default Kutyanev