import { Button, TextInput } from "@ignite-ui/react"
import { Form } from "./styles"
import { ArrowRight } from "phosphor-react"

export function ClaimUSernameForm() {
  return (
    <Form as="form">
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="your-user"
      ></TextInput>
      <Button size="sm" type="submit">
        To schedule
        <ArrowRight />
      </Button>
    </Form>
  )
}
