import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../reducers/userSlice";

function Users() {
    const dispatch=useDispatch();
    const {userList,loading,error}=useSelector((state)=>state.users);
    useEffect(()=>{
        dispatch(fetchUsers())
    },[dispatch])
  return (
    <div>
        <h2 className="text-2xl font-bold text-center text-blue-600">Felhasználók</h2>
        {loading && <p className="text-center text-blue-700">Betöltés....</p>}
        {error && <p className="text-center text-red-700">{error}</p>}

        <ul>
            {userList.map((user)=>(<li key={user.id}>{user.name} - {user.email}</li>))}
        </ul>

    </div>
  )
}

export default Users