import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 모든 컴포넌트에서 쿼리 클라이언트 라는 스토어에 API 요청의 상태를 보관할 수 있음
const queryClient = new QueryClient(); // defaultOptions, queries 옵션을 통해 전역 설정으로도 가능
// 보통 staleTime은 0, gcTime은 5분 정도로 설정.

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools></ReactQueryDevtools>
      <App />
    </QueryClientProvider>
  </BrowserRouter>,
);
