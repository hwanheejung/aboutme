const Hero = () => (
  <div className="mx-24 mt-40 font-mono lg:mx-10 lg:mt-28">
    <div className="flex w-fit flex-col gap-2">
      <div className="mr-4 flex items-center gap-3">
        <span className="font-thin">Hi, this is</span>
        <div className="h-px flex-1 bg-primary" />
      </div>
      <h1 className="whitespace-pre-line text-4xl font-bold text-main">
        Frontend Developer, {"\n"}Hwanhee Jeong
      </h1>
    </div>
    <div className="flex flex-col gap-2">
      <p className="mt-10">
        I create digital experiences across web & app, turn data into meaning,
        empower ideas with code.
      </p>
      <p>
        Passionate about solving real-world problems through development, I
        consistently share my learnings and insights on my blog.
      </p>
      <p>
        I strive to find the simplest yet most reasonable solution to every
        challenge.
      </p>
    </div>
  </div>
);

export default Hero;
