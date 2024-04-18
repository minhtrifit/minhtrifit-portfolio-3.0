import Image from "next/image";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <div className="flex gap-2 items-center">
      <Link href="https://facebook.com/minhtrifit" target="_blank">
        <Image
          className="w-12 h-auto hover:translate-y-1"
          src="/social-media/facebook.png"
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="nav-logo"
        />
      </Link>
      <Link href="https://youtube.com/@minhtrifit" target="_blank">
        <Image
          className="w-12 h-auto hover:translate-y-1"
          src="/social-media/youtube.png"
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="nav-logo"
        />
      </Link>
      <Link
        href="https://linkedin.com/in/lê-minh-trí-89ab94215/"
        target="_blank"
      >
        <Image
          className="w-12 h-auto hover:translate-y-1"
          src="/social-media/linkedin.png"
          priority
          sizes="100vw"
          width="0"
          height="0"
          alt="nav-logo"
        />
      </Link>
    </div>
  );
};

export default SocialMedia;
