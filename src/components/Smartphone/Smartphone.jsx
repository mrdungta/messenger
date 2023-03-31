function Smartphone() {
  return (
    // iPhone 14 Pro Max
    <div className="ml-[15vw] h-[160.7mm] w-[77.6mm] scale-125 rounded-[2rem] bg-black flex justify-center items-center">
      {/* Notch */}
      <div className="fixed top-[4mm] h-[5mm] w-[20mm] rounded-[1rem] bg-black"></div>

      {/* Screen */}
      <div className="h-[158mm] w-[75mm] rounded-[1.75rem] bg-white">
        {/* Messenger */}
        <div>
          {/* Navigation Bar */}
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default Smartphone;
