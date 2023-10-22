import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'

const Work = () => (
  <Layout title="MerryMatch">
    <Container my={10}>
      <Title>
        Merry Match <Badge>(Online Dating Web App)</Badge>
      </Title>
      <WorkImage src="/images/portfolio/merrymatch01.jpg" alt="Inkdrop" />
      <P>
        Merry Match is a full-stack web application project that allows everyone
        to create their own dating profile and discover new people. It was
        created following a Figma design using React.js, JavaScript (ES6),
        Node.js, Express, and Firebase.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>code</Meta>
          <Link href="https://github.com/10Kanan/Merry-Match">
            https://github.com/10Kanan/Merry-Match
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React.js, JavaScript(ES6), Vite.js, Tailwind CSS, CSS, Material UI,
            Axios , Node.js Express and Firebase Authentication, Firebase cloud
            store, Firebase storage
          </span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <div ml={10}>
            <Badge>As users :</Badge>
            <P>- Authentication</P>
            <P>- CRUD (Create, Read, Update, Delete) profile</P>
            <P>- CRUD (Create, Read, Update, Delete) favorite users</P>
            <P>- Upload pictures to their profile (up to 5 pictures)</P>
            <P>- View other users’ profiles</P>
            <P>- Search other users’ profiles (check box ,range ,keywords)</P>
            <P>- Limit merry per/day up to subscribe package</P>
            <P>- Submit complaints to admins</P>
          </div>
          <Badge>As admins:</Badge>
          <P>- Authentication</P>
          <P>- CRUD (Create, Read, Update, Delete) Merry Packages</P>
          <P>- CRUD (Read, Update, Delete) customer's complaints (CRM)</P>
          <P>- Upload icon of Merry Packages</P>
        </ListItem>

        <ListItem>
          <Meta>Demo</Meta>
        </ListItem>
      </List>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="demo/iyldw7v2qrsajnvjmgck"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
