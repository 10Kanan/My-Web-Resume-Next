import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="tourist">
    <Container my={10}>
      <Title>
        Tourist-attraction <Badge>(Class Project)</Badge>
      </Title>
      <WorkImage src="/images/portfolio/tourist01.jpg" alt="Inkdrop" />
      <P>
        This is my class project-2 a backend project using Mongodb, Node.js,
        Express.js with simple UI.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>code</Meta>
          <Link href="https://github.com/10Kanan/Tourist-attraction-react-mini-project">
            https://github.com/10Kanan/Tourist-attraction-react-mini-project
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Vite.js , React.js ,Tailwind CSS ,CSS , Mongodb, Node.js, Express.js
          </span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <div>
            <Badge>All user:</Badge>
            <P>
              - User can search 🔎 for travel places data list from server side.
            </P>
            <P>- Title link to new website</P>
            <P>
              - When clicking on tags, they will be used as input search tags.
            </P>
            <P>- UI limit description not exceed 100 characters.</P>
          </div>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
