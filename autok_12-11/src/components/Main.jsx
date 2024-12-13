function Main() {
  return (
    <div className="hero bg-red-100 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.kimballstock.com/pix/car/p/03/aut-23-rk3838-01p.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Autó nyilvántartás</h1>
          <p className="py-6">
            Üdvözli az autó nyilvántartás!
          </p>
          <button className="btn btn-secondary bg-red-500">Tovább</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
