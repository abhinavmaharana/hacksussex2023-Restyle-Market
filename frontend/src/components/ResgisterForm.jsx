import React from "react";

export default function RegisterForm(){
    return(
    <div className="register--container">
      <div class="flex justify-center">
        <form action="" method="post">
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
                placeholder="Email input"
            />
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
                placeholder="Password input"
                />
            </div>
            <div class="mb-3 xl:w-96">
                <label
                for="examplePassword0"
                class="form-label inline-block mb-2 text-gray-700"
                >
                Confirm Password:
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
                placeholder="Password input"
                />
            </div>
            </div>
        </form>
      </div>
    </div>
    )
}