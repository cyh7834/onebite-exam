import { Button } from "@/components/ui/button";
import { useCountStore } from "@/store/count";

export default function CounterPage() {
  const { count, increase, decrease } = useCountStore();

  return (
    <div>
      <h1 className="text-2xl font-bold">Counter</h1>
      <div>{count}</div>
      <Button onClick={increase}>+</Button>
      <Button onClick={decrease}>-</Button>
    </div>
  );
}
