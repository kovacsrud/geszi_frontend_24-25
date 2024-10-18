
function User({user}) {
  return (
    <div style={{backgroundColor:"green",margin:"5"}}>
        <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
        <img src={user.picture.large} alt={user.name.first} />
        <p>{user.email}</p>
        <p>{user.location.city}</p>
        <p>{user.location.street.name} {user.location.street.number}</p>
    </div>
  )
}

export default User