/* eslint-disable no-shadow */
import { useEffect, useState} from "react";
import { getMyProfile } from "../services/users";

const profilePage = () => {
// eslint-disable-next-line no-unused-vars
const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getMyProfile()
      setProfile(profile)
    }
    fetchProfile()
  },[])

  return(
    <div>
      <h1>profile page</h1>
      {profile && (
        <pre>
          {JSON.stringify(profile, null,2)}
        </pre>
      )}
    </div>
  )


}

export default profilePage;
