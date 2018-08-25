import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { Input, InputLabel, FormControl } from '@material-ui/core';

import { Container, Form } from './styles';

const Categories = ({ classes }) => (
  <Container>
    <Formik
      initialValues={{
        title: '',
        isRoot: false,
        description: '',
      }}
      validationSchema={() => Yup.object().shape({
        title: Yup.string().required(),
        isRoot: Yup.boolean().required(),
      })
      }
      onSubmit={({ values }) => {
        console.log(values);
      }}
      render={({
        values, touched, errors, handleChange, handleBlur, handleSubmit,
      }) => (
        <Form>
          <FormControl className={classes.formControlEmail}>
            <InputLabel
              className={classes.inputLabel}
              FormLabelClasses={{
                root: classes.cssLabel,
                focused: classes.cssFocused,
              }}
              htmlFor="title"
            >
              Título da categoria
            </InputLabel>
            <Input
              className={classes.inputText}
              classes={{
                underline:
                  touched.title && errors.title ? classes.cssUnderlineError : classes.cssUnderline,
              }}
              id="title"
              type="title"
              placeholder="Cadastrar nova categoria"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.title}
            />
          </FormControl>
        </Form>
      )}
    />
  </Container>
);

export default Categories;
