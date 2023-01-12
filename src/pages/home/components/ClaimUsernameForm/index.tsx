import { Button, TextInput, Text } from "@ignite-ui/react"
import { Form, FormAnnotation } from "./styles"
import { ArrowRight } from "phosphor-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const claimUSernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "minimum 3 characters" })
    .regex(/^([a-z\\\\-]+)$/i, { message: "only letters and hyphens" })
    .transform((username) => username.toLowerCase()),
})

type ClaimUSernameFormData = z.infer<typeof claimUSernameFormSchema>

export function ClaimUSernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUSernameFormData>({
    resolver: zodResolver(claimUSernameFormSchema),
  })

  async function handleClaimUsername(data: ClaimUSernameFormData) {}

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="your-user"
          {...register("username")}
        ></TextInput>
        <Button size="sm" type="submit">
          To schedule
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : "Enter the intended username."}
        </Text>
      </FormAnnotation>
    </>
  )
}
