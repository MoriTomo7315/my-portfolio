import Image from "next/image";
export default function ProfileIcon() {
  return (
    <Image
      src="/profile_image.jpg"
      alt="プロフィール画像です。"
      width={200}
      height={200}
      className="rounded-full"
      priority={true}
    />
  );
}
