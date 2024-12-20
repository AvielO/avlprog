import { Link } from "react-router-dom";
import CustomInput from "../../Components/CustomInput/CustomInput";
import Logo from "../../Components/Logo/Logo";

const SignupPage = () => {
  return (
    <div className="flex flex-col min-h-screen xl:flex-row">
      <div className="flex flex-col w-full xl:w-1/2 bg-signup-bg bg-cover bg-center pb-6 px-8 text-white items-center justify-center gap-4">
        <Logo />

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

      <div className="flex flex-col xl:w-1/2 m-12 gap-4 justify-center">
        <div className="text-center flex flex-col gap-1">
          <h1 className="text-4xl font-semibold">Sign up for an account</h1>
          <h4 className="text-lg text-gray-500">
            Measure and lose weight faster
          </h4>
        </div>

        <div>
          <form className="flex flex-col gap-4 items-center justify-center w-full">
            <div className="flex gap-4 flex-wrap justify-center w-full">
              <CustomInput
                type="text"
                name="firstName"
                placeHolder="First Name"
                minLength={2}
                maxLength={16}
                required={true}
              />

              <CustomInput
                type="text"
                name="lastName"
                placeHolder="Last Name"
                minLength={2}
                maxLength={16}
                required={true}
              />
            </div>
            <CustomInput
              type="text"
              name="username"
              placeHolder="Username"
              minLength={4}
              maxLength={12}
              required={true}
            />

            <CustomInput
              type="email"
              name="email"
              placeHolder="Email"
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

            <label className="text-center text-gray-600 font-semibold">
              By creating an account, you agreeing to our <b>Privacy Policy</b>,
              and <b>AvlHealth Policy</b>.
            </label>

            <button className="bg-blue-500 transition-all font-semibold text-white rounded-lg py-2 px-4 hover:bg-blue-600">
              Sign Up
            </button>
          </form>
        </div>
        <div className="text-center">
          <span>Already have an account? </span>
          <Link to="/signin" className="font-semibold">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
