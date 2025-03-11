import { RandUser } from '../types/RandUser';

type RandUserProp={
    user:RandUser
}

function UserCard({user}:RandUserProp) {
    return (
        <div className="card bg-base-100 w-96 shadow-sm m-2">
            <figure>
                <img
                    src={user.picture.large}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{user.name.title} {user.name.first} {user.name.last}</h2>
                <p>{user.phone}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">{user.email}</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard