const SignupPage = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:h-full w-full">
      <div className="flex flex-col w-full xl:w-1/2 bg-signup-bg bg-cover bg-center pb-6 px-8 text-white">
        <div className="h-1/3 flex justify-center items-center">
          <img
            src="/public/assets/logo/logo-white.png"
            className="w-40 h-auto m-6 xl:w-64 transition-all"
            alt="AvlHealth Logo"
          />
        </div>
        <div className="flex h-2/3">
          <div className="flex flex-col items-center gap-4 xl:gap-12">
            <img
              src="/public/assets/items/signup-picture.png"
              className="w-80 h-auto xl:w-[24rem]"
              alt="signup-picture"
            />
            <div className="flex flex-col gap-4 text-center justify-center">
              <h1 className="text-3xl md:text-4xl xl:text-5xl transition-all font-semibold text-center">
                Go beyond, and even more
              </h1>
              <p className="text-md md:text-lg xl:text-xl transition-all text-center text-gray-300">
                AvlHealth is your ultimate companion for achieving your weight
                goals and leading a healthier lifestyle.
                <br /> With our app, you can set personalized weight targets,
                track your daily meal calories, and monitor your progress
                through detailed and visually appealing graphs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/2">no</div>
    </div>
  );
};

export default SignupPage;
