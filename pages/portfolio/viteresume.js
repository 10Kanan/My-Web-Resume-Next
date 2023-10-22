import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="vite-resume">
    <Container my={10}>
      <Title>
        Vite-resume <Badge>(class project)</Badge>
      </Title>
      <WorkImage src="/images/portfolio/resume_vite01.jpg" alt="Inkdrop" />
      <P>
        This is my skill check point class project-1 created and deployed web
        resume by using Vite.js , React.js ,Tailwind CSS for design was referred
        to figma but add more additional motion and style that I was learn from
        youtube video.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>code</Meta>
          <Link href="https://github.com/10Kanan/Web-Resume-mini-project">
            https://github.com/10Kanan/Web-Resume-mini-project
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://phornlapat-resume.netlify.app/">
            click here!
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite.js , React.js ,Tailwind CSS</span>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
