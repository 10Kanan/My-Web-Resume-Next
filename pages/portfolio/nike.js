import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="nike">
    <Container my={10}>
      <Title>
        Nike <Badge>(Practice project)</Badge>
      </Title>
      <WorkImage src="/images/portfolio/nikehome01.jpg" alt="Inkdrop" />
      <P>
        A simple clone UI homepage for learning tailwind css from doing real
        project.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>code</Meta>
          <Link href="https://github.com/10Kanan/Nike-Landingpage-Clone">
            https://github.com/10Kanan/Nike-Landingpage-Clone
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Deploy</Meta>
          <Link href="https://tranquil-strudel-5244c4.netlify.app/">
            click here!
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Vite.js , React.js ,Tailwind CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Acknowledgments</Meta>
          <P>
            - This project was learning by doing through video tutorial by
            @javascriptmastery give a credit and special thanks to adrianhajdin
            for sharing a good knowledge 💖
          </P>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
