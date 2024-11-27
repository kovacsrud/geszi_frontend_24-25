function Episode({ episode }) {
  return (
    <div className="m-5 card bg-sky-200 text-sky-800 w-96">
      <div className="card-body">
        <h2 className="card-title">Episode:{episode.name}</h2>
        <p>Air date:{episode.air_date}</p>
        <p>Episode:{episode.episode}</p>
        <div className="card-actions justify-end">
         
        </div>
      </div>
    </div>
  );
}

export default Episode;
