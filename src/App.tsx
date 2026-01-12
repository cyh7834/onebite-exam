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
    </div>
  );
}

export default App;
