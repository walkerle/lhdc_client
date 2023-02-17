import React from 'react';
import ClientProfile from './ClientProfile.js';

function Clients ({ clients }) {

  const clientsList = clients.map(client => {
    return (
      <ClientProfile key={client.id} client={client} />
    )
  })

  return (
    <div>
      <h3><strong>Client Profiles</strong></h3>
      <table className="ClientsParent">
        <tbody className="ClientsChild">
          <tr>
            <th>Client Name</th>
          </tr>
          {clientsList}
        </tbody>
      </table>
    </div>
  )
}

export default Clients;