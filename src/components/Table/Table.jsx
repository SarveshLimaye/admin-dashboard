import { useState, useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

export default function Table({ data }) {
  const pageSize = 10;
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editedName, setEditedName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [editedEmail, setEditedEmail] = useState("");
  const [editedRole, setEditedRole] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editedId, setEditedId] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (items.length === 0) {
      setItems(data);
    }
  }, [items, data]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const visibleItems = items.slice(startIndex, startIndex + pageSize);

  const handleDelete = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
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

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredItems = data.filter(
      (item) =>
        item.name.toLowerCase().includes(term.toLowerCase()) ||
        item.email.toLowerCase().includes(term.toLowerCase()) ||
        item.role.toLowerCase().includes(term.toLowerCase())
    );
    setItems(filteredItems);
  };

  const handleToggleSelect = (id) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };

  const handleDeleteSelected = () => {
    const updatedItems = items.filter(
      (item) => !selectedItems.includes(item.id)
    );
    setItems(updatedItems);
    setSelectedItems([]);
  };

  const handleToggleSelectAll = () => {
    if (selectedItems.length === visibleItems.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(visibleItems.map((item) => item.id));
    }
  };

  return (
    <div className="container mt-5 mb-10  px-60">
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="py-3 pl-2 flex justify-between">
            <SearchBar onSearch={handleSearch} />

            <button
              onClick={() => handleDeleteSelected()}
              className="text-red-500 hover:text-red-700"
            >
              Delete Selected
            </button>
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
                          checked={selectedItems.length === visibleItems.length}
                          onChange={() => handleToggleSelectAll()}
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
                  {visibleItems.map((item) => (
                    <tr
                      key={item.id}
                      className={
                        selectedItems.includes(item.id)
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
                      }
                    >
                      <td className="py-3 pl-4">
                        <div className="flex items-center h-5">
                          <input
                            type="checkbox"
                            className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleToggleSelect(item.id)}
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

                      <td
                        className={
                          isEdit && editedId === item.id
                            ? "py-4 text-sm font-medium flex space-x-4"
                            : "px-6 py-4 text-sm font-medium flex space-x-4"
                        }
                      >
                        {isEdit && editedId === item.id ? (
                          <div className="w-48">
                            <button
                              onClick={() => {
                                setIsEdit(false);
                                setEditedName("");
                                setEditedEmail("");
                                setEditedRole("");
                              }}
                              className="text-blue-600 mx-1 hover:text-blue-900"
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
                              className="save text-blue-600 mx-1 hover:text-blue-900"
                            >
                              Save
                            </button>
                          </div>
                        ) : (
                          <BiEdit
                            onClick={() => handleEdit(item.id)}
                            className="edit text-blue-600 hover:text-blue-900"
                          />
                        )}
                        <RiDeleteBin7Line
                          onClick={() => handleDelete(item.id)}
                          className="delete text-red-500 hover:text-red-700"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(items.length / pageSize)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
