import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react"
import { Container, Form, Header } from "./styles"
import { ArrowRight } from "phosphor-react"

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Wellcome to Ignite Call</Heading>
        <Text>
          We need some information to create your profile! Oh, you can edit this
          information later.
        </Text>

        <MultiStep size={4} currentStep={1}></MultiStep>
      </Header>

      <Form as="form">
        <label>
          <Text size="sm">Username</Text>
          <TextInput prefix="ignite.com/" placeholder="Your username" />
        </label>
        <label>
          <Text size="sm">Full name</Text>
          <TextInput placeholder="Your full name" />
        </label>

        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
