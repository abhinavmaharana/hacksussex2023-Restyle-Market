import React from "react";

export default function LoginForm() {
  return (
    <div class=" grid place-items-center h-screen">
    <div className="grid place-items-center h-screen container--body">
      <form>
        <div class="mb-3 xl:w-96">
            <label
            for="exampleEmail0"
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
            id="exampleEmail0"
            placeholder="Email"
            />
        </div>
        <div class="mb-3 xl:w-96">
            <label
                for="examplePassword0"
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
                id="examplePassword0"
                placeholder="Password"
            />
            </div>
            <div class=" flex items-center justify-between ">
            <button type="button" class="  inline-block px-6 py-2.5 bg-[#9873AC] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#9873AC] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sig In</button>
            </div>
      </form>
      </div>
    </div>
  );
}
