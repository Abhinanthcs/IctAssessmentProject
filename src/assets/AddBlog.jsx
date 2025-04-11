import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

const AddBlog = () => {
  const formik = useFormik({
    initialValues: {
      blogName: '',
      description: '',
      authorName: '',
    },
    validationSchema: Yup.object({
      blogName: Yup.string().required('Blog Name is required'),
      description: Yup.string().required('Description is required'),
      authorName: Yup.string().required('Author Name is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
      alert('Blog Added Successfully!');
    },
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '400px', margin: 'auto', mt: 5 }}
    >
      <TextField
        label="Blog Name"
        name="blogName"
        value={formik.values.blogName}
        onChange={formik.handleChange}
        error={formik.touched.blogName && Boolean(formik.errors.blogName)}
        helperText={formik.touched.blogName && formik.errors.blogName}
      />
      <TextField
        label="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        error={formik.touched.description && Boolean(formik.errors.description)}
        helperText={formik.touched.description && formik.errors.description}
      />
      <TextField
        label="Author Name"
        name="authorName"
        value={formik.values.authorName}
        onChange={formik.handleChange}
        error={formik.touched.authorName && Boolean(formik.errors.authorName)}
        helperText={formik.touched.authorName && formik.errors.authorName}
      />
      <Button type="submit" variant="contained">
        Add Blog
      </Button>
    </Box>
  );
};

export default AddBlog;