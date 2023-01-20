/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

import { selectAuth } from "./authSlice"

const RequireAuth = ({ children, roles }) => {
  const { isAuth, profile } = useSelector(selectAuth)
  if (!isAuth) {
    return (console.log(alert("must login first")), <Navigate to="/login" />)
  }

  if (roles && !roles.includes(profile.role)) {
    return <Navigate to="/unauthorized" />
  }
  return children
  // return (console.log("children:", children, "roles:", roles ))
}

export default RequireAuth
