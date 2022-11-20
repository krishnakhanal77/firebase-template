import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { useQuery } from "react-query";
import { formatCurrency } from "../utils/currencyFormat";
import AddProducts from "../components/AddProducts";

const Products = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const fetchProducts = async () => {
    const response = await axios.get("http://localhost:4000/products");
    const products = response.data;
    return products;
  };
  const { data, isLoading, isError } = useQuery("products", fetchProducts);
  // const [products, setProducts] = useState();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios
  //       .get("http://localhost:4000/products")
  //       .then((response) => {
  //         setProducts(response.data);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   };
  //   fetchData();
  // }, []);
  // console.log(4343, data);
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>something went wrong</p>;
  }
  return (
    <div className="py-4 px-6 bg-[#0000000c]">
      <div className="bg-white p-4 rounded-md">
        <div className=" flex justify-between shadow-sm pb-4">
          <h3>Products</h3>
          <div className="flex ">
            <div className="border flex px-3 py-1 mr-4">
              <FiSearch className="text-[#000000de] mt-2 mr-2 text-lg font-bold" />
              <input
                className="  bg=[#f5f5f5] bg-transparent focus:outline-none"
                type="text"
                placeholder="Search products"
              />
            </div>
            <button
              onClick={handleOpen}
              className="hover:bg-[#4436e1] hover:shadow-lg font-nedium px-4 py-2 bg-secondary text-white rounded-lg"
            >
              Add Products
            </button>
            {open === true && <AddProducts />}
          </div>
        </div>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Product name
                </th>
                <th scope="col" className="py-3 px-6">
                  status
                </th>
                <th scope="col" className="py-3 px-6">
                  Category
                </th>
                <th scope="col" className="py-3 px-6">
                  Price
                </th>
                <th scope="col" className="py-3 px-6">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((items: any) => {
                return (
                  <tr
                    key={items.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {items.name}
                    </th>
                    <td className="py-4 px-6">
                      {items.status === "active" ? (
                        <p className=" text-green-500 ">Active</p>
                      ) : (
                        <p className=" text-red-500">Inactive</p>
                      )}
                    </td>
                    <td className="py-4 px-6">{items.category}</td>
                    <td className="py-4 px-6">{formatCurrency(items.price)}</td>
                    <td className="py-4 px-6">Update/Edit</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
