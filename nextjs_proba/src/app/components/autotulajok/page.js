export default async function Autotulajok(){

    const tulajKeres=await fetch('http://localhost:3000/api/tulajok');
    const tulajok= await tulajKeres.json();

    return (
        <div>
            <h2>Autó tulajok</h2>
            {
                tulajok.map((tulaj)=>(<p>{tulaj.first_name} {tulaj.last_name}</p>))
            }

        </div>
    )
    
}