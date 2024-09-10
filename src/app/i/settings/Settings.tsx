"use client"

import { TypeUserForm } from "@/services/auth.service"
import { SubmitHandler, useForm } from "react-hook-form"
import { useInitialData } from "./useInitialData"
import { useUpdateSettings } from "./useUpdateSettings"
import { Field } from "@/components/ui/fields/Field"
import { Button } from "@/components/ui/buttons/Button"

export function Settings() {
  const { register, handleSubmit, reset } = useForm<TypeUserForm>({
    mode: "onChange",
  })

  useInitialData(reset)

  const { isPending, mutate } = useUpdateSettings()

  const onSubmit: SubmitHandler<TypeUserForm> = data => {
    const { password, ...rest } = data

    mutate({ ...rest, password: password || undefined })
  }

  return (
    <div>
      <form className="w-2/4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div>
            <Field
              id="email"
              label="Email"
              placeholder="Enter email: "
              type="email"
              {...register("email", {
                required: "Email is required!",
              })}
              extra="mb-4"
            />
            <Field
              id="name"
              label="Name"
              placeholder="Enter name: "
              type="email"
              {...register("name")}
              extra="mb-4"
            />
            <Field
              id="password"
              label="Password"
              placeholder="Enter password: "
              type="password"
              {...register("password")}
              extra="mb-10"
            />
          </div>
          <div>
            <Field
              id="workInterval"
              label="Work interval (min): "
              placeholder="Enter work interval (min): "
              isNumber
              {...(register("workInterval"), { valueAsNumber: true })}
              extra="mb-4"
            />
            <Field
              id="breakInterval"
              label="Break interval (min): "
              placeholder="Enter break interval (min): "
              isNumber
              {...(register("breakInterval"), { valueAsNumber: true })}
              extra="mb-4"
            />
            <Field
              id="intervalsCount"
              label="Intervals count (max): "
              placeholder="Enter intervals count (max): "
              isNumber
              {...(register("intervalsCount"), { valueAsNumber: true })}
              extra="mb-6"
            />
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          Save
        </Button>
      </form>
    </div>
  )
}
