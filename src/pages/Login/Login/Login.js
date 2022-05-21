import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div class="hero bg-base-200">
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-10">
          <form class="card-body">
            <h1 className="text-center text-2xl font-bold">Login</h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                class="input input-bordered"
              />
              <label class="label">
                <a
                  href="#"
                  class="label-text-alt link link-hover text-error font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div class="form-control mt-3">
              <button class="btn btn-primary">Submit</button>
            </div>
          </form>
          <div class="divider w-40 mx-auto">OR</div>
          <div className="flex flex-col my-2">
            <button class="btn bg-white text-black my-4 mx-auto px-6 flex flex-row font-bold hover:rounded-full hover:bg-orange-200">
              <span>
                <FcGoogle className="w-6 h-6 font-bold" />
              </span>
              <span className="font-bold">continue with google</span>
            </button>
            <button class="btn text-black my-2 mx-auto gap-3 font-bold flex flex-row px-6 bg-sky-600 hover:bg-white  hover:rounded-full ">
              <FaFacebook className="w-6 h-6 font-white" />
              <span className="font-bold">continue with Facebook</span>
            </button>
          </div>
          <div>
            <h4 className="text-center font-bold">Don't have an account ?</h4>
            <button
              onClick={() => navigate("/register")}
              class="btn text-black my-3 mx-auto gap-3 font-bold flex flex-row px-6 bg-white hover:bg-amber-400 hover:rounded-full "
            >
              <BiLogInCircle className="w-6 h-6 font-white" />
              <span className="font-bold">Register Now </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
