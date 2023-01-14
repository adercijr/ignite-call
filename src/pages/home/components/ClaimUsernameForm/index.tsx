import { Button, TextInput, Text } from "@ignite-ui/react"
import { Form, FormAnnotation } from "./styles"
import { ArrowRight } from "phosphor-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/router"

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "minimum 3 characters" })
    .regex(/^([a-z\\\\-]+)$/i, { message: "only letters and hyphens" })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="your-user"
          {...register("username")}
        ></TextInput>
        <Button size="sm" type="submit" disabled={isSubmitting}>
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
