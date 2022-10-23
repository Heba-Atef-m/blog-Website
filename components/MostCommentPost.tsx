import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { contextData } from "../App";

function MostCommentPost() {
  const MostComment = useContext(contextData);

  return (
    <div>
      {MostComment.mostLikeCommentPosts.map((likeposts) => (
        <Grid
          container
          alignItems="center"
          alignContent="center"
          spacing={8}
          sx={{ flexGrow: 1 }}
          xs="auto"
          padding={2}
          marginLeft={3}
        >
          <Grid xs={4} item>
            <Typography color="darkBlue" variant="h6" mt={2}>
              {likeposts.title}
            </Typography>
          </Grid>
          <Grid xs={4} item>
            <Typography color="darkCyan" variant="h6" mt={2}>
              {likeposts.date}
            </Typography>
          </Grid>
          <Grid xs={4} item>
            <Typography color="red" variant="h6" mt={2}>
              Comments {likeposts.numberOfComments}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}
export default MostCommentPost;
