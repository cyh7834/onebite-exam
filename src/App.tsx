import "./App.css";

function App() {
  return (
    <div>
      {/*1. 타이포그래프*/}
      <div className="text-xs text-red-500">test-xs</div>
      <div className="text-sm text-[rgb(100,200,300)]">test-sm</div>
      <div className="text-lg font-bold">test-lg</div>
      <div className="text-xl">test-xl</div>
      <div className="text-2xl">test-2xl</div>
      <div className="text-[13px]">test-13px</div>

      {/*2. 백그라운드*/}
      <div className="bg-amber-500">background</div>

      {/*3. 사이즈*/}
      <div className="w-20 bg-blue-500">box</div>

      {/*4. 여백*/}
      <div className="m-5 h-50 w-50 bg-red-400 p-5">
        <div className="h-full w-full bg-sky-500"></div>
      </div>

      {/*5. 테두리*/}
      <div className="m-5 border-x-2 border-r-3 border-red-500"></div>

      {/*6. 플렉스 컨테이너 (배치)*/}
      <div className="flex">
        <div className="w-10 border">1</div>
        <div className="w-10 border">2</div>
        <div className="w-10 border">3</div>
        <div className="w-10 border">4</div>
      </div>

      {/*7. */}
    </div>
  );
}

export default App;
