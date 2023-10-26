import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import { Iconly } from "react-iconly";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <p className="uppercase tracking-wider text-sm text-gray-600 px-4">
        Menu
      </p>
      <ul className="mt-4 links">
        <li className="mb-2 flex items-center gap-3 active">
          <Link to="/">
            <Iconly
              name="Chart"
              set="bulk"
              primaryColor="#707FDD"
              size="medium"
            />
            Dashboard
          </Link>
        </li>
        <li className="mb-2 flex items-center gap-3">
          <Link to="/">
            <Iconly
              name="Buy"
              set="bulk"
              primaryColor="#a6abc8"
              size="medium"
            />
            Food Order
          </Link>
        </li>
        <li className="mb-2 flex items-center gap-3">
          <Link to="/">
            <Iconly
              name="Document"
              set="bulk"
              primaryColor="#a6abc8"
              size="medium"
            />
            Manage Menu
          </Link>
        </li>
        <li className="mb-2 flex items-center gap-3">
          <Link to="/">
            <Iconly
              name="Chat"
              set="bulk"
              primaryColor="#a6abc8"
              size="medium"
            />
            Customer Review
          </Link>
        </li>
      </ul>
      <p className="uppercase tracking-wider text-sm text-gray-600 p-4 pb-0">
        Others
      </p>
      <ul className="mt-4 links">
        <li className="mb-2 flex items-center gap-3">
          <Link to="/">
            <Iconly
              name="Setting"
              set="bulk"
              primaryColor="#a6abc8"
              size="medium"
            />
            Settings
          </Link>
        </li>
        <li className="mb-2 flex items-center gap-3">
          <Link to="/">
            <Iconly
              name="Wallet"
              set="bulk"
              primaryColor="#a6abc8"
              size="medium"
            />
            Payment
          </Link>
        </li>
        <li className="mb-2 flex items-center gap-3">
          <Link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9968 15.1746C7.68382 15.1746 3.99982 15.8546 3.99982 18.5746C3.99982 21.2956 7.66082 21.9996 11.9968 21.9996C16.3098 21.9996 19.9938 21.3206 19.9938 18.5996C19.9938 15.8786 16.3338 15.1746 11.9968 15.1746Z"
                fill="#a6abc8"
              />
              <path
                d="M11.9968 12.5837C14.9348 12.5837 17.2888 10.2287 17.2888 7.2917C17.2888 4.3547 14.9348 1.9997 11.9968 1.9997C9.05983 1.9997 6.70483 4.3547 6.70483 7.2917C6.70483 10.2287 9.05983 12.5837 11.9968 12.5837Z"
                fill="#a6abc8"
              />
            </svg>
            Accounts
          </Link>
        </li>
        <li className="mb-2 flex items-center gap-3">
          <Link to="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M16.34 1.9998H7.67C4.28 1.9998 2 4.3798 2 7.9198V16.0898C2 19.6198 4.28 21.9998 7.67 21.9998H16.34C19.73 21.9998 22 19.6198 22 16.0898V7.9198C22 4.3798 19.73 1.9998 16.34 1.9998Z"
                fill="#a6abc8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1247 8.1893C11.1247 8.6713 11.5157 9.0643 11.9947 9.0643C12.4877 9.0643 12.8797 8.6713 12.8797 8.1893C12.8797 7.7073 12.4877 7.3143 12.0047 7.3143C11.5197 7.3143 11.1247 7.7073 11.1247 8.1893ZM12.8697 11.3621C12.8697 10.8801 12.4767 10.4871 11.9947 10.4871C11.5127 10.4871 11.1197 10.8801 11.1197 11.3621V15.7821C11.1197 16.2641 11.5127 16.6571 11.9947 16.6571C12.4767 16.6571 12.8697 16.2641 12.8697 15.7821V11.3621Z"
                fill="#F1F2F7"
              />
            </svg>
            Help
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
