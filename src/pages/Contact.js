import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from "@mui/material";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <Layout>
      <Box sx={{ m: 5, mb: 2, mt: 10 }}>
        <Typography variant="h3">Contact Us</Typography>
        <Typography component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          exercitationem tempore ad, provident ratione, ex ut consectetur ipsam
          deserunt cumque corrupti accusantium deleniti quisquam iusto mollitia
          molestiae nihil, rerum nisi aliquam repellendus at soluta vitae quas
          in? Illum exercitationem doloribus sequi necessitatibus accusantium
          sunt nobis ipsum aliquam cumque repudiandae. Ut adipisci iusto qui
          laboriosam, obcaecati asperiores vero cum quisquam ipsa porro non ab
          corrupti, enim quasi assumenda, velit at eum! Delectus doloremque
          ratione iure maiores, impedit dolorum quis nobis dicta deleniti quam
          ut mollitia inventore odit quo obcaecati ab ipsam quasi hic, excepturi
          libero saepe totam rerum adipisci sapiente! Maiores.
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            m: 5,
            width: { xs: "300px", lg: "500px" },

            // margin: "auto",
            // width: "50%",
            // padding: "10px",
            // minWidth: "300px",
          }}
        >
          <TableContainer
            component={Paper}

            // sx={{
            //   display: "flex",
            //   justifyContent: "center",
            //   textAlign: "center",
            //   flexDirection: "column",
            // }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Us
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="1800-00-0000">
                  <TableCell component="th" scope="row">
                    <SupportAgentIcon sx={{ color: "red", pt: 1, mr: 2 }} />
                    1800-00-0000
                  </TableCell>
                </TableRow>
                <TableRow key="help_greentable@gmail.com">
                  <TableCell component="th" scope="row">
                    <MailIcon sx={{ color: "skyblue", pt: 1, mr: 2 }} />
                    help_greentable@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow key="9945321345">
                  <TableCell component="th" scope="row">
                    <CallIcon sx={{ color: "green", pt: 1, mr: 2 }} />
                    9945321345
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>

    // <Layout>
    //   <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
    //     <Typography variant="h4">Contact My Resturant</Typography>
    //     <p>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio
    //       beatae ducimus magni nobis culpa praesentium velit expedita quae,
    //       corrupti, pariatur inventore laboriosam consectetur modi impedit
    //       error, repudiandae obcaecati doloribus.
    //     </p>
    //   </Box>
    //   <Box
    //     sx={{
    //       m: 3,
    //       width: "600px",
    //       ml: 10,
    //       "@media (max-width:600px)": {
    //         width: "300px",
    //       },
    //     }}
    //   >
    //     <TableContainer component={Paper}>
    //       <Table aria-label="contact table">
    //         <TableHead>
    //           <TableRow>
    //             <TableCell
    //               sx={{ bgcolor: "black", color: "white" }}
    //               align="center"
    //             >
    //               Contact Details
    //             </TableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           <TableRow>
    //             <TableCell>
    //               <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
    //               (tollfree)
    //             </TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell>
    //               <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
    //             </TableCell>
    //           </TableRow>
    //           <TableRow>
    //             <TableCell>
    //               <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
    //             </TableCell>
    //           </TableRow>
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </Box>
    // </Layout>
  );
};

export default Contact;
