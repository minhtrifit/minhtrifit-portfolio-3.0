import Image from "next/image";

const page = () => {
  return (
    <div className="mx-auto max-w-screen-lg p-6">
      <div className="px-[40px] py-[40px] md:py-[120px] flex gap-5 flex-wrap-reverse justify-between">
        <div className="w-[100%] md:w-[500px]">
          <h1 className="text-3xl md:text-[50px] font-bold text-primary-blue">
            WRONG TURN?
          </h1>
          <div className="mt-5 text-[18px] text-justify">
            You look lost, stranger. You know what helps when you’re lost? A
            piping hot bowl of noodles. Take a seat, we’re frantically at work
            here cooking up something good
          </div>
        </div>
        <Image
          className="w-[350px] h-auto"
          src="/assets/logo.png"
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="nav-logo"
        />
      </div>
    </div>
  );
};

export default page;
