import { fetchTodoById } from "@/api/fetch-todo-by-id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById (id: string) {
    return useQuery({
    queryFn:() => fetchTodoById(id),
    queryKey: ["todos", id],
    staleTime: 5000, // Fresh 상황에서만 의미있음
    gcTime: 5000 // Inactive 상황에서만 의미있음
  });
}