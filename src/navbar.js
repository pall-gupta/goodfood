import "./navbar.css";
import Burger from "./burger.png";
function navbar() {
  return (
    <nav className="">
      <div className="container mx-auto flex justify-between items-center border-bottom-gray">
        <div className="flex p-5 gap-2 justify-center items-center logo-bar">
          <div className="logo font-bold text-white flex justify-center items-center w-6 h-6 rounded-full">
            G
          </div>
          <h3 className="font-bold logoName ">GOODFOOD</h3>
        </div>
        <div className="relative ">
          <input
            type="search"
            className="search-box px-4 py-2 w-100"
            placeholder="Search"
          ></input>
          <button class="absolute px-4 inset-y-0 right-0 flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <g opacity="0.5">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.91314 10.8263C8.6266 10.8263 10.8263 8.6266 10.8263 5.91314C10.8263 3.19969 8.6266 1 5.91314 1C3.19969 1 1 3.19969 1 5.91314C1 8.6266 3.19969 10.8263 5.91314 10.8263Z"
                  stroke="#627B87"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.7193 9.71889L12.8074 12.807"
                  stroke="#627B87"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="bg-orange-100	rounded-full p-2">
            <img src={Burger} alt="profile icon"></img>
          </div>
          <div class="p-4">
            <div class="dropdown inline-block relative">
              <button class="gap-2 inline-flex items-center">
                <p class="mr-1">Delicious Burger </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      d="M9.99997 13.0942L15.0083 8.08584L13.8308 6.90668L9.99997 10.74L6.16997 6.90668L4.99164 8.08501L9.99997 13.0942Z"
                      fill="#1F384C"
                    />
                  </g>
                </svg>
              </button>
              <ul class="dropdown-menu absolute hidden pt-1">
                <li class="">
                  <a
                    class="bg-gray-100 hover:bg-gray-200 py-2 px-4 block"
                    href="#"
                  >
                    One
                  </a>
                </li>
                <li class="">
                  <a
                    class="bg-gray-100 hover:bg-gray-200 py-2 px-4 block"
                    href="#"
                  >
                    Two
                  </a>
                </li>
                <li class="">
                  <a
                    class="rounded-b bg-gray-100 hover:bg-gray-200 py-2 px-4 block"
                    href="#"
                  >
                    Three is the magic number
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 ">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
              >
                <path
                  d="M6.4 16C5.51684 15.9957 4.80073 15.2831 4.792 14.4H7.992C7.99369 14.6139 7.9529 14.826 7.872 15.024C7.66212 15.5056 7.23345 15.8569 6.72 15.968H6.716H6.704H6.6896H6.6824C6.58945 15.9874 6.49492 15.9981 6.4 16ZM12.8 13.6H0V12L1.6 11.2V6.8C1.55785 5.67129 1.81275 4.5513 2.3392 3.552C2.86323 2.62521 3.75896 1.9671 4.8 1.744V0H8V1.744C10.0632 2.2352 11.2 4.0304 11.2 6.8V11.2L12.8 12V13.6Z"
                  fill="#B0C3CC"
                />
              </svg>
              <div className=" absolute	rounded-full notification"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default navbar;
