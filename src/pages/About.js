import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: { xs: 10, lg: 15 },
          textAlign: "justify",
          p: 2,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            p: 2,

            fontSize: { xs: "1.2rem", lg: "2rem" },
          }}
        >
          Welcome to my Restaurant
        </Typography>
        <Typography>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          architecto temporibus unde totam enim suscipit aliquid consectetur
          commodi, libero repellendus molestias autem, quae assumenda doloribus
          dignissimos nihil esse facilis explicabo earum excepturi fugiat velit.
          Minima ex voluptates vel? Voluptates tempora culpa aut ratione
          architecto laboriosam? Voluptatem ratione illo architecto consequatur
          eaque, sint eius magni beatae ullam placeat in animi libero nobis nisi
          velit nam quidem officia quam aspernatur labore. Expedita quo eos,
          atque deleniti sit harum fuga in libero recusandae dolorum doloribus
          saepe quae. Iusto sed quasi impedit magni, natus repellat perferendis
          expedita facilis. Ut architecto dolores illo dignissimos labore!
        </Typography>
        <br />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea
          quisquam quae nemo, excepturi eum? Error est facilis tempore?
          Expedita, reiciendis. Dicta labore voluptate incidunt ipsam nihil sint
          amet explicabo eveniet perspiciatis in sit, itaque quisquam aliquam
          obcaecati maiores voluptas nostrum. Reprehenderit, doloribus quo
          asperiores impedit est debitis nisi tempora repudiandae dignissimos
          quisquam voluptatum. Illo libero corrupti voluptate eius recusandae
          sed? Error ducimus officiis voluptates ullam, aspernatur accusantium.
          Repellendus quis atque alias mollitia asperiores labore illum ratione
          at modi facere dolore laborum nam minus corporis rem itaque incidunt,
          inventore dolorem odit fugit quas debitis. Temporibus provident
          asperiores quod natus, assumenda velit ipsa unde laborum iusto a?
          Iusto odio tenetur vel aliquam sequi praesentium, laudantium omnis
          tempore illo? Adipisci laboriosam eveniet doloremque eius sapiente
          praesentium error ipsam fuga, non nulla quos illo repellendus! Quasi
          quos ratione nobis iste iure voluptatum ut perferendis quia quisquam
          reiciendis nemo modi repellendus eum maxime, labore numquam itaque
          magni, facilis id? Blanditiis dolore quos odit, fuga incidunt aliquid
          ad vitae fugit, illo quod porro! Unde fuga id laudantium cupiditate
          quidem, dignissimos cumque recusandae atque ea, consequatur ipsam et?
          Nobis iste autem consequuntur molestiae amet soluta, dolorum fuga
          ipsam vel cum! Provident cumque harum possimus eveniet nemo.
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
