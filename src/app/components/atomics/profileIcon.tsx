import Image from "next/image";

export default function ProfileIcon() {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
      <div className="relative">
        <Image
          src="/profile_image.jpg"
          alt="プロフィール画像です。"
          width={200}
          height={200}
          className="rounded-full ring-4 ring-white dark:ring-gray-800 transform transition duration-500 group-hover:scale-105"
          priority={true}
        />
      </div>
    </div>
  );
}
