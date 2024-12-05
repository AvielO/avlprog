import { Link } from "react-router-dom";
import CustomInput from "../../Components/CustomInput";

const SigninPage = () => {
  return (
    <div className="flex flex-col min-h-screen xl:flex-row">
      <div className="flex flex-col xl:w-1/2 m-12 gap-4 justify-center">
        <div className="text-center flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Sign in to AvlHealth</h1>
          <h4 className="text-lg text-gray-500">
            Measure and lose weight faster
          </h4>
        </div>

        <div>
          <form className="flex flex-col gap-4 items-center justify-center w-full">
            <CustomInput
              type="text"
              name="username"
              placeHolder="Username"
              minLength={4}
              maxLength={16}
              required={true}
            />

            <CustomInput
              type="password"
              name="password"
              placeHolder="Password"
              minLength={4}
              maxLength={16}
              required={true}
            />

            <div className="flex items-center gap-12">
              <div className="flex items-center text-center gap-1">
                <CustomInput type="radio" name="save-me" value="save" />
                <label>Remember me</label>
              </div>

              <Link
                to="/forgot-password"
                className="text-blue-500 font-semibold"
              >
                Forgot Password?
              </Link>
            </div>

            <button className="bg-blue-500 transition-all font-semibold text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Sign In
            </button>
          </form>
        </div>
        <div className="text-center">
          <span>Don't have an account? </span>
          <Link to="/signup" className="font-semibold">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full min-h-full xl:w-1/2 bg-signup-bg bg-cover bg-center py-6 px-8 text-white items-center justify-center gap-4">
        <div className="flex">
          <img
            src="/assets/logo/logo-white.png"
            className="w-40 h-auto m-6 xl:w-64 2xl:w-72 transition-all"
            alt="AvlHealth Logo"
          />
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-4 xl:gap-12">
            <img
              src="/assets/items/signup-picture.png"
              className="w-80 h-auto xl:w-[20rem] 2xl:w-[21rem]"
              alt="signup-picture"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 text-center justify-center">
          <h1 className="text-3xl md:text-4xl xl:text-5xl transition-all font-semibold text-center">
            Go beyond, and even more
          </h1>
          <p className="text-md md:text-lg xl:text-lg transition-all text-center text-gray-300">
            AvlHealth is your ultimate companion for achieving your weight goals
            and leading a healthier lifestyle.
            <br /> With our app, you can set personalized weight targets, track
            your daily meal calories, and monitor your progress through detailed
            and visually appealing graphs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
