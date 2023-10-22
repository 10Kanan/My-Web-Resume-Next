import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub, IoPersonCircle, IoLogoLinkedin } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container mt={10}>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Phornlapat Piban
          </Heading>
          <p>hello and welcome 👋</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/phornlapat.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          My journey as a software developer began in June 2023. I realized my
          passion for coding and aspired to work as a developer. So, I joined a
          four-month JavaScript full-stack developer program with TechUp and
          Self-taught. Along the way,I acquired a technical skills and soft
          skills in programming, shaping my path in the world of software
          development.
        </Paragraph>
      </Section>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Projects
        </Heading>
        <Paragraph>
          This section will introduce you to the projects I&apos;ve been
          learning and working on. It includes my full-stack web application
          project, class projects, and tutorials I&apos;ve learned from. I hope
          these projects give you a better understanding of me. Click to explore
          more details.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/portfolio"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>Aug 2018 - Jun 2022</BioYear>
          Mechanical Engineering At KKU
        </BioSection>
        <BioSection>
          <BioYear>Jun-Oct 2023</BioYear>
          Full-Stack Software Development At TechUp
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>May 2022 -May 2023</BioYear>
          Product Engineer At Delta Electronics
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>Langues</BioYear>
          Thai, English
        </BioSection>
        <BioSection>
          <BioYear>Tools</BioYear>
          JavaScript(ES6), TypeScript, React.js, Next.js, Vite.js, Tailwind CSS,
          Axios, Firebase, Node.js, Express.js, SQL, NoSQL, PostgreSQL, Mongodb,
          Supabase, Git, Github
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact Information
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/10Kanan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                my github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:phornlapat.p@gmail.com" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<EmailIcon />}
              >
                phornlapat.p@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoPersonCircle />}
              >
                0621752214
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://linkedin.com/in/phornlapat-piban-61a077288/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                my linkedin
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
