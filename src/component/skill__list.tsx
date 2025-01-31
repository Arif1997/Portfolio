import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgba(66, 66, 66, 1)",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: "#FFFFFF",
  display: "flex",
  borderRadius: "1.5rem",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: "#A2027",
    color: "#FFFFFF",
  }),
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: "2rem", ml: "1rem", mr: "1rem" }}>
      <Grid container spacing={3}>
        <Grid item xs={6} md={3}>
          <span className="skill__category">
            <img src="/images/frontend.webp" alt="Front end" />
          </span>
          <Item>
            <List>
              <ListItem>React JS</ListItem>
              <ListItem>HTML5</ListItem>
              <ListItem>CSS3</ListItem>
              <ListItem>Tailwind CSS</ListItem>
              <ListItem>MUI</ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <span className="skill__category">
            <img src="/images/backend.jpg" alt="Back end" />
          </span>
          <Item>
            <List>
              <ListItem>Node.js</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>JavaScript</ListItem>
              <ListItem>Ether.js</ListItem>
              <ListItem>Python</ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <span className="skill__category">
            <img src="/images/core_knowledge.jpg" alt="Core Knowledge" />
          </span>
          <Item>
            <List>
              <ListItem>Data Structures</ListItem>
              <ListItem>Algorithms</ListItem>
              <ListItem>OOP</ListItem>
              <ListItem>DBMS</ListItem>
              <ListItem>Git, Github</ListItem>
            </List>
          </Item>
        </Grid>

        <Grid item xs={6} md={3}>
          <span className="skill__category">
            <img src="/images/database.jpg" alt="Database" />
          </span>
          <Item>
            <List>
              <ListItem>MySQL</ListItem>
              <ListItem>PostgreSQL</ListItem>
              <ListItem>MongoDB</ListItem>
              <ListItem>Mongoose</ListItem>
              <ListItem>Prisma ORM</ListItem>
            </List>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
