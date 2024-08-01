import React from "react";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to the Maintenance Ticket System
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          An efficient solution for managing and tracking all your maintenance
          requests and issues. Our Maintenance Ticket System is designed to
          streamline workflows, provide clear communication channels, and ensure
          that all maintenance tasks are addressed promptly.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Seamless Communication
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Our system provides a seamless platform for communication
                between maintenance teams and requestors. Easily submit
                maintenance requests, receive updates, and get real-time
                notifications about the progress of your tickets.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Efficient Task Management
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Organize, prioritize, and assign tasks with ease. The intuitive
                dashboard helps managers monitor workloads and optimize resource
                allocation to ensure timely resolution of issues.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Real-Time Analytics
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Gain valuable insights into your maintenance operations with
                real-time analytics. Track key performance indicators, identify
                trends, and make data-driven decisions to improve efficiency and
                service quality.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Customizable Workflows
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Tailor the system to meet your specific needs with customizable
                workflows. Define roles, set permissions, and automate processes
                to align with your organization’s unique requirements.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Why Choose Our System?
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Our Maintenance Ticket System is trusted by hundreds of
            organizations worldwide for its reliability, flexibility, and ease
            of use. Whether you're a small business or a large enterprise, our
            platform is designed to help you maintain operational efficiency and
            deliver excellent service.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
