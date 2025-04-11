import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <Box sx={{ backgroundColor: '#f4f6f8', minHeight: '100vh', padding: 3 }}>
      <Typography variant="h4" align="center" sx={{ mb: 3, fontWeight: 'bold', color: '#333' }}>
        Blog Posts
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {posts.slice(0, 10).map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{
              boxShadow: 4,
              borderRadius: 3,
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.03)' },
              backgroundColor: '#ffffff',
            }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1, color: '#7f8c8d' }}>
                  {post.body}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
