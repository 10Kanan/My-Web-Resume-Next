import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="tripp">
    <Container my={10}>
      <Title>
        Tripp <Badge>(class project)</Badge>
      </Title>
      <WorkImage src="/images/portfolio/responsive_tripp01.jpg" alt="Inkdrop" />
      <P>
        Class group project responsive travel page using html , css , tailwind
        css
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>code</Meta>
          <Link href="https://github.com/10Kanan/my-first-react-app-nan">
            https://github.com/10Kanan/my-first-react-app-nan
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://tourmaline-sunflower-fb4669.netlify.app/">
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
