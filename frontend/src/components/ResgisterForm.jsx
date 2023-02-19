import React from "react";

export default function RegisterForm() {
  return (
      <div class=" grid place-items-center h-screen">
        <div className="grid place-items-center h-screen container--body">
          <form action="/register" method="POST" noValidate>
          <div className="grid grid-cols-2 gap-4">
            <div class="mb-3 ">
              <label
                for="firstname"
                class="form-label inline-block mb-2 text-gray-700"
              >
                First Name:
              </label>
              <input
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="firstname"
                name="firstname"
                placeholder="First name"
              />
            </div>
            <div class="mb-3 ">
              <label
                for="lastname"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Last Name:
              </label>
              <input
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="lastname"
                name="lastname"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div class="mb-3 ">
              <label
                for="username"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Username:
              </label>
              <input
                type="text"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="username"
                name="username"
                placeholder="Username"
              />
            </div>
            <div class="mb-3 ">
              <label
                for="email"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="Email"
                name="Email"
                placeholder="Email"
              />
            </div>
          </div>
          <div class="mb-3 xl:w-96">
              <label
                for="password"
                class="form-label inline-block mb-2 text-gray-700"
              >
                Password:
              </label>
              <input
                type="password"
                class="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div class=" flex items-center justify-between ">
              <button type="button" class="  inline-block px-6 py-2.5 bg-[#9873AC] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#9873AC] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Submit</button>
            </div>
          </form>
          </div>
        </div>
        
        
      
  );
}
