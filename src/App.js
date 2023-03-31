import Smartphone from "./components/Smartphone/Smartphone";

export default function App() {
  return (
    <div className="h-screen w-screen bg-macos-big-sur-wallpaper font-sf-pro flex justify-start items-center">
      <Smartphone />

      <div className="absolute top-[20vh] right-[30vw] text-[#f5f5f7]">
        <h1 className="text-[5rem]">Messenger</h1>
        <h2 className="text-[2.5rem]">iPhone 14 Pro Max</h2>
      </div>
    </div>
  );
}
