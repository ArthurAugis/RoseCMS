import React from 'react';
import { fetchUsers } from '../../api';

function Gestion() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await fetchUsers();
        setUsers(result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Page de Gestion des Utilisateurs</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Mail</th>
              <th className="py-3 px-6 text-left">Username</th>
              <th className="py-3 px-6 text-left">Mot de passe</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.mail} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{user.mail}</td>
                  <td className="py-3 px-6">{user.pseudo}</td>
                  <td className="py-3 px-6">{user.mdp}</td>
                  <td className="py-3 px-6 flex space-x-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                      Modifier
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">Aucun utilisateur trouvé.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gestion;
