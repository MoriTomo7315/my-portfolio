import ProfileIcon from "../atomics/profileIcon";

export default function AboutMeZone() {
  return (
    <div className="flex m-auto justify-center align-middle">
      <ProfileIcon />
      <div className="my-auto mx-4">
        <p className="text-lg font-bold p-2">森 友哉 | Tomoya Mori</p>
        <p className="text-lg font-bold p-2">Age 29, Kanagawa, Japan</p>
      </div>
    </div>
  );
}
