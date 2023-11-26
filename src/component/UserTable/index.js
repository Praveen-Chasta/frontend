const UserTable = props => {
  const {userDetails} = props
  const {id, name, username, email, address} = userDetails
  const {street, city, zipcode} = address
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <td>{id}</td>
          <td>{name}</td>
          <td>{username}</td>
          <td>{email}</td>
          <td>
            {street},{city}, {zipcode}
          </td>
        </tbody>
      </table>
    </>
  )
}
export default UserTable
