import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// state 타입이 자동으로 추론
export const useCountStore = create(
  // 개발자도구에서 실시간으로 디버깅 devtools
  devtools(
    // 로컬 스토리지에 스토어 저장. json으로 저장되는데 actions는 함수라서 json 파싱이 이뤄지지 않음
    persist(
      // 스토어에 특정 값이 바뀔 때마다 원하는 코드를 실행
      subscribeWithSelector(
        // 상태 업데이트를 자동으로 불변하게 관리해줌
        immer(
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
      ),
      {
        name: "countStore",
        partialize: (store) => ({
          count: store.count,
        }),
        storage: createJSONStorage(() => sessionStorage), // 로컬 스토리지 대신 세션 스토리지에 저장
      },
    ),
    {
      name: "countStore", // 개발자도구에서 실시간으로 디버깅 devtools
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    console.log(count);

    const store = useCountStore.getState();
  },
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
