import { create } from "zustand";
import { combine } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// state 타입이 자동으로 추론
export const useCountStore = create(
  immer( // 상태 업데이트를 자동으로 불변하게 관리해줌
    combine({ count: 0 }, (set, get) => ({
      actions: {
        increase: () => {
          set((state) => {
            state.count += 1;
          });
        },
        decrease: () => {
          set((state) => {
            state.count -= 1;
          });
        },
      },
    })),
  ),
);

export const useCount = () => {
  const count = useCountStore((store) => store.count);

  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);

  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);

  return decrease;
};
