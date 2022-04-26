import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";
function Item({ icon, link, size }) {
  return (
    <li>
      <Link to={link}>
        <div className="flex gap-3 items-center text-white hover:text-secondary-500">
          <span className={size}>{icon}</span>
        </div>
      </Link>
    </li>
  );
}

export default function Question() {
  const items = [
    {
      icon: <AiFillPlusCircle />,
      link: "/",
    },
    {
      icon: <ImBin />,
      link: "/",
    },
  ];
  return (
    <>
      <div className="flex justify-start">
        <div className="w-1/5 m-5">
          <div className="ml-8 text-xl text-primary-500">Categories</div>
          <div className="w-full flex flex-col justify-center items-center m-5">
            <table className="w-full text-center text-primary-0 text-white drop-shadow-lg">
              <thead className="">
                <tr className="bg-primary-500 h-10 underline">
                  <th className="w-16">ID</th>
                  <th>Name</th>
                  <th className=""></th>
                </tr>
                <tr className="bg-primary-100 h-8 outline-none border-b border-white">
                  <th>1</th>
                  <td>Productivity</td>
                  <td>
                    <ul className="pl-2">
                      <Item key={items[1].key} {...items[1]} size="text-xl" />
                    </ul>
                  </td>
                </tr>
                <tr className="bg-primary-100 h-8 outline-none border-b border-white">
                  <th>2</th>
                  <td>6 Months Upward</td>
                  <td>
                    <ul className="pl-2">
                      <Item key={items[1].key} {...items[1]} size="text-xl" />
                    </ul>
                  </td>
                </tr>
                <tr className="bg-primary-100 h-8 outline-none border-b border-white">
                  <th>3</th>
                  <td>6 Months Downward</td>
                  <td>
                    <ul className="pl-2">
                      <Item key={items[1].key} {...items[1]} size="text-xl" />
                    </ul>
                  </td>
                </tr>
                <tr className="bg-primary-100 h-8 outline-none border-b border-white">
                  <th></th>
                  <td></td>
                  <td>
                    <ul className="flex flex-col py-2 px-2 gap-8 float-right">
                      <Item key={items[0].key} {...items[0]} size="text-4xl" />
                    </ul>
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="w-4/5 m-5">
          <div className="ml-5 text-xl text-primary-500">Questions</div>
          <div className="w-full flex flex-col justify-center items-center pt-5 pr-5">
            <table className="w-full table-auto text-center drop-shadow-lg">
              <thead className="">
                <tr className="bg-primary-500 h-10 underline text-white">
                  <th>Number</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Can be rate</th>
                  <th>Order Number</th>
                  <th>Actions</th>
                </tr>
                <tr className="bg-primary-white h-8 outline-none border border-primary-500 text-primary-500">
                  <th>1</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="bg-primary-white h-8 outline-none border border-primary-500 text-primary-500">
                  <th>2</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="bg-primary-white h-8 outline-none border border-primary-500 text-primary-500">
                  <th>3</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
