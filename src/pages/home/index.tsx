import { Heading, Text } from "@ignite-ui/react"
import { Container, Hero, Preview } from "./styles"
import Image from "next/image"

import previewImage from "../../assets/app-preview1.png"
import { ClaimUSernameForm } from "./components/ClaimUsernameForm"

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Hassle-free scheduling</Heading>
        <Text size="xl">
          Connect your calendar and let people book appointments in your free
          time.
        </Text>
        <ClaimUSernameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          quality={100}
          priority
          alt="aplication preview image"
        />
      </Preview>
    </Container>
  )
}
