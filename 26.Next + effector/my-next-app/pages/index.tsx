import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useUnit } from "effector-react";
import { $counter, incrementCounter, decrementCounter } from "@/store/counter";

export default function Home() {
  const { counter, onIncrement, onDecrement } = useUnit({
    counter: $counter,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
  });

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: 2,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Число: {counter}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="outlined" color="secondary" onClick={onDecrement}>
              Уменьшить
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={onIncrement}>
              Увеличить
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary">
              Рандомное число
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
