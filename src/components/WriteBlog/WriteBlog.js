import React from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap'

export default function WriteBlog() {
  return (
    <Container>
        <Form>
        <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder='Blog Title'
        />
      </InputGroup>
        </Form>
    </Container>
  )
}
