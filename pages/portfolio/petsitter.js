import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/portfolio'
import P from '../../components/paragraph'
import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'

const Work = () => (
  <Layout title="PetSitter" mt={10}>
    <Container my={10}>
      <Title>
        Pet-Sitter-App <Badge>(Find trusted pet sitter)</Badge>
      </Title>
      <WorkImage src="/images/portfolio/petsitter01.jpg" alt="Inkdrop" />
      <P>
        Pet-Sitter-App is a full-stack web application that allows pet owners to
        find trusted caregivers for their pets. It is a team project that I
        created following a Figma design. We used Agile Methodology and SCRUM
        Practice to collaborate with team members, and I played the role of a
        backend developer.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>code</Meta>
          <Link href="https://github.com/10Kanan/Pet-Sitter-App">
            https://github.com/10Kanan/Pet-Sitter-App
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React.js, JavaScript(ES6), Vite.js, Tailwind CSS, CSS, Material UI,
            Axios , Node.js, Express, multer library ,Supabase storage ,Prisma
            ,nodemailer ,PostgreSQL
          </span>
        </ListItem>
        <ListItem>
          <Meta>Features</Meta>
          <div>
            <Badge>All user:</Badge>
            <P>- JWT Authentication </P>
            <P>- Log-in via email and password</P>
            <P>- Dashboard profile update</P>
            <P>- Input Validation</P>
          </div>
          <Badge>As pet owner:</Badge>
          <P>- CRUD (Create, Read, Update, Delete) their pets</P>
          <P>- Dashboard for pet owners to manage their pets and bookings</P>
          <P>- Search for pet sitters(check box ,keywords)</P>
          <P>- Booking pet sitter system</P>
          <Badge>As pet sitter:</Badge>
          <P>- Dashboard to manage schedules and bookings.</P>
          <P>- Accept or decline booking requests</P>
          <P>- Upload pictures to their profile (up to 10 pictures)</P>
          <P>- Search for booking history</P>
        </ListItem>

        <ListItem>
          <Meta>Demo</Meta>
        </ListItem>
      </List>
      <CldVideoPlayer
        width="1920"
        height="1080"
        src="demo/vsdsdiff85qynmtyfyhg"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
