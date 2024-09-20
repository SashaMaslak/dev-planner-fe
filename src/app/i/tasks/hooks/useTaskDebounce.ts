import { useCallback, useEffect } from "react"
import { TypeTaskFormState } from "@/types/task.types"
import debounce from "lodash.debounce"
import { useCreateTask } from "./useCreateTask"
import { useUpdateTask } from "./useUpdateTask"
import { UseFormWatch } from "react-hook-form"

interface IUseTaskDebounce {
  watch: UseFormWatch<TypeTaskFormState>
  itemId: string
}

export function useTaskDebaunce({ watch, itemId }: IUseTaskDebounce) {
  const { createTask } = useCreateTask()
  const { updateTask } = useUpdateTask()

  const debauncedCreateTask = useCallback(
    debounce((formData: TypeTaskFormState) => {
      createTask(formData)
    }, 444),
    []
  )

  const debauncedUpdateTask = useCallback(
    debounce((formData: TypeTaskFormState) => {
      updateTask({ id: itemId, data: formData })
    }, 444),
    []
  )

  useEffect(() => {
    const { unsubscribe } = watch(formData => {
      if (itemId) {
        debauncedUpdateTask({
          ...formData,
          priority: formData.priority || undefined,
        })
      } else {
        debauncedCreateTask(formData)
      }
    })

    return () => {
      unsubscribe()
    }
  }, [watch(), debauncedUpdateTask, debauncedCreateTask])
}
