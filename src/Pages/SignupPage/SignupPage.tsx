const SignupPage = () => {
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col w-1/2 bg-signup-bg bg-cover bg-center p-8 text-white flex-1 justify-center items-center">
        <div className="h-1/4">
          <img
            src="/public/assets/logo/logo-white.png"
            className="absolute w-64 h-auto top-0 left-0 m-12"
            alt="AvlHealth Logo"
          />
        </div>
        <div className="h-3/4">
          <div className="flex flex-col items-center justify-center">
            <img
              src="/public/assets/items/signup-picture.png"
              className="h-[32rem] w-auto"
              alt="signup-picture"
            />
            <div className="flex flex-col gap-4 text-center justify-center">
              <h1 className="text-5xl font-semibold text-center">
                Go beyond, and even more
              </h1>
              <p className="text-xl text-center">
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
