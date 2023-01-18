// import { Navigate } from "react-router-dom"
// import { useSelector } from "react-redux"

// import { selectToken, selectLogin } from "./loginSlice"

// const RequireAuth = ({ children, roles }) => {
//   const { token } = useSelector(selectToken)
//   const { profile } = useSelector(selectLogin)

//   if (!token) {
//     return <Navigate to="/login" />
//   }

//   if (roles && !roles.includes(profile.role)) {
//     return <Navigate to="/unauthorized" />
//   }

//   return children
// }

// export default RequireAuth
