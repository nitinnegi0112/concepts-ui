import React from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import productPic from "../assets/images/product-pic.jpg";
const Table = () => {
  const data = [
    {
      imgUrl: "demo",
      serialNo: "1",
      productName: "Product #1",
      id: "id000001",
      price: "80.00",
      quantity: "20",
      orderTime: "27-08-2018 01:22:12",
      customer: "Patricia J. King ",
      status: "InTransit",
    },
    {
      imgUrl: "demo",
      serialNo: "2",
      productName: "Product #2",
      id: "id000002",
      price: "800.00",
      quantity: "230",
      orderTime: "27-08-2018 01:22:12",
      customer: "Rachel J. Wicker ",
      status: "Delivered",
    },
    {
      imgUrl: "demo",
      serialNo: "3",
      productName: "Product #3",
      id: "id000003",
      price: "840.00",
      quantity: "210",
      orderTime: "27-08-2018 01:22:12",
      customer: "Michael K. Ledford ",
      status: "Delivered",
    },
    {
      imgUrl: "demo",
      serialNo: "4",
      productName: "Product #4",
      id: "id000004",
      price: "20.00",
      quantity: "14",
      orderTime: "27-08-2018 01:22:12",
      customer: "Michael K. Ledford ",
      status: "Delivered",
    },
   
  ];
  return (
    <div className="table">
      <h5>Recent Orders</h5>
      <table>
        <thead class="bg-light">
          <tr class="border-0">
            <th class="border-0">#</th>
            <th class="border-0">Image</th>
            <th class="border-0">Product Name</th>
            <th class="border-0">Product Id</th>
            <th class="border-0">Quantity</th>
            <th class="border-0">Price</th>
            <th class="border-0">Order Time</th>
            <th class="border-0">Customer</th>
            <th class="border-0">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.serialNo}</td>
                <td>
                  <div>
                    <img
                      src={productPic}
                      alt="user"
                    
                      style={{height:'32px',width:'32px',borderRadius:'2px'}}
                      
                    />
                  </div>
                </td>
                <td>{item.productName}</td>
                <td>{item.id}</td>
                <td>{item.quantity}</td>
                <td>${item.price}</td>
                <td>{item.orderTime}</td>
                <td>{item.customer}</td>
                <td>
                  <span>
                    
                    <FontAwesomeIcon
                      icon={faCircle}
                      color={`${item.status ==='InTransit'?'#ffb739':'#21ae41'}`}
                      size='xs' 
                    ></FontAwesomeIcon>{" "}
                  </span>
                  {item.status}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
