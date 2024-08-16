import { useEffect } from "react"
import LeftSidebar from "./LeftSidebar/leftSidebar"
import RightContent from "./RightContent/rightContent"
import getUserdata from "../../../../actions/getUserdata";


export default async function Dashboard() {
  const user = await getUserdata();
  console.log(user,"in the dashboard")
  return (
    <div id="wrapper">
      <LeftSidebar />  
      <RightContent user={user} />
    </div>
  )
}