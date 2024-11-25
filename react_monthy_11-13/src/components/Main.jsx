

function Main() {
  return (
    <div className="hero bg-sky-300 min-h-screen">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Rick and Morty API</h1>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button className="btn btn-primary">Start</button>
      </div>
    </div>
  </div>
  )
}

export default Main