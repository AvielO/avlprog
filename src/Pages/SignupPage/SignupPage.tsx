const SignupPage = () => {
  return (
    <div className="flex h-full w-full text-white">
      <div className="flex w-1/2 justify-center bg-signup-bg bg-cover bg-center p-8">
        <div className="absolute top-0 left-0">
          <img
            src="/public/assets/logo/logo-white.png"
            className="w-64 h-auto m-8"
            alt="AvlHealth Logo"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src="/public/assets/items/signup-picture.png"
            className="h-[32rem] w-auto"
            alt="signup-picture"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl text-center">Lorem Ipsum, easy and Fast</h1>
            <p>
              Overlord help you wset fsdfsd, fdsf f sdfsd fsd fsd,f sdf sd,f
              sdfsdfsdf sdfdsf sdfsd fsdfsd fds, fsdf fsd
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2">no</div>
    </div>
  );
};

export default SignupPage;
