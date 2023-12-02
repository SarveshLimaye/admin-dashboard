import { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";

export default function Table({ data }) {
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedRole, setEditedRole] = useState("");
  const [editedId, setEditedId] = useState("");

  useEffect(() => {
    if (items.length === 0) {
      setItems(data);
    }
  }, [items, data]);

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    console.log(filteredItems);
    setItems(filteredItems);
  };

  const handleEdit = (id) => {
    setIsEdit(true);
    const editedItem = items.find((item) => item.id === id);
    setEditedId(editedItem.id);
    setEditedName(editedItem.name);
    setEditedEmail(editedItem.email);
    setEditedRole(editedItem.role);
  };
  return (
    <div className="container mt-5 mb-10  px-60">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2">
            <div className="relative max-w-xs">
              <label htmlFor="hs-table-search" className="sr-only">
                Search
              </label>
              <input
                type="text"
                name="hs-table-search"
                id="hs-table-search"
                className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <svg
                  className="h-3.5 w-3.5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 pl-4">
                      <div className="flex items-center h-5">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="checkbox" className="sr-only">
                          Checkbox
                        </label>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Role
                    </th>

                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {items.map((item) => (
                    <tr key={item.id}>
                      <td className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                          />
                          <label htmlFor="checkbox" className="sr-only">
                            Checkbox
                          </label>
                        </div>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {isEdit && editedId === item.id ? (
                          <input
                            type="text"
                            value={editedName}
                            onChange={(e) => setEditedName(e.target.value)}
                            className="border rounded-md"
                          />
                        ) : (
                          item.name
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {isEdit && editedId === item.id ? (
                          <input
                            type="text"
                            value={editedEmail}
                            onChange={(e) => setEditedEmail(e.target.value)}
                            className="border rounded-md"
                          />
                        ) : (
                          item.email
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {isEdit && editedId === item.id ? (
                          <input
                            type="text"
                            value={editedRole}
                            onChange={(e) => setEditedRole(e.target.value)}
                            className="border rounded-md"
                          />
                        ) : (
                          item.role
                        )}
                      </td>

                      <td className="px-6 py-4 text-sm font-medium flex space-x-4">
                        {isEdit && editedId === item.id ? (
                          <>
                            <button
                              onClick={() => {
                                setIsEdit(false);
                                setEditedName("");
                                setEditedEmail("");
                                setEditedRole("");
                              }}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                const editedItem = items.find(
                                  (item) => item.id === item.id
                                );
                                editedItem.name = editedName;
                                editedItem.email = editedEmail;
                                editedItem.role = editedRole;
                                setIsEdit(false);
                                setEditedName("");
                                setEditedEmail("");
                                setEditedRole("");
                                setEditedId("");
                              }}
                              className="text-blue-600 hover:text-blue-900"
                            >
                              Save
                            </button>
                          </>
                        ) : (
                          <BiEdit
                            onClick={() => handleEdit(item.id)}
                            className="text-blue-600 hover:text-blue-900"
                          />
                        )}
                        <RiDeleteBin7Line
                          onClick={() => handleDelete(item.id)}
                          className="text-red-500 hover:text-red-700"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
