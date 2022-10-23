import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { contextData } from "../App";

export default function AllUsers() {
  const ALLUSERS = useContext(contextData);
  return (
    <div>
      <Grid container spacing={6}  alignItems="center" direction="row">
        {ALLUSERS.authors.map((author) => (
          <Grid item >
            <Card sx={{ width: 300, length: 300, margin: 5, padding: 2 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="270"
                image={author.photo}
              ></CardMedia>
              <CardContent>
                <Typography textAlign='center'  variant="h4">{author.name}</Typography>
              </CardContent>
              <CardActions>
                <Button  variant="contained">Click To View Profile</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
