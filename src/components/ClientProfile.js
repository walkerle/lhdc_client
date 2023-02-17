import React from 'react';

function ClientProfile({ client }) {

  return (
    <tr>
      <td>{client.name}</td>
    </tr>
  )
}

export default ClientProfile;