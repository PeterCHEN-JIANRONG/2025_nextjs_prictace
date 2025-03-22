import type { User } from "@/app/types/user"

interface propsType {
  data: User
}
const UserCard = ({data}: propsType) => {
  return (<>
  <div className="p-1 bg-amber-200 text-black w-[400px] rounded-xl">
    <h2>{`${data.name.title}.${data.name.last} ${data.name.first}`}</h2>
    <p>{data.gender}</p>
    <p>{data.email}</p>
    <p>{data.phone}</p>
  </div>
  </>)
}

export default UserCard