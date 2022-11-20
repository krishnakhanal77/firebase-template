import React, { useState } from "react";

const AddProducts = () => {
  const [form, setForm] = useState<any>({
    name: "",
    category: "",
    // status: true,
    price: "",
  });

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setForm((state: any) => ({
      ...state,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    setForm("");
  };

  return (
    <div className="absolute bg-white z-50 w-80 p-5 border rounded-md right-40">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Category
            </label>
            <select
              onChange={onChange}
              name="category"
              value={form.category}
              className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            >
              <option selected>Choose category</option>
              <option value="Mobile">Mobile</option>
              <option value="Laptop">Laptop</option>
              <option value="Television">Television</option>
              <option value="Watch">Watch</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Status
            </label>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                onChange={onChange}
                value="Active"
                name="status"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Active
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                onChange={onChange}
                value="Inactive"
                name="status"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Inactive
              </label>
            </div>
          </div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Price
          </label>
          <input
            onChange={onChange}
            value={form.price}
            type="number"
            name="price"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter price"
            required
          />

          <button
            onSubmit={handleSubmit}
            type="submit"
            className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
