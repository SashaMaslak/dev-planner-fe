import { taskService } from "@/services/task.service"
import { useQuery } from "@tanstack/react-query"

export function useTasks() {
  const {} = useQuery({
    queryKey: ["tasks"],
    queryFn: () => taskService.getTasks(),
  })
  return {}
}
