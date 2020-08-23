import React from 'react'

export type Error = {
  message: string
}

type GraphQLErrorListProps = {
  errors: Error[]
}

const GraphQLErrorList = ({errors}: GraphQLErrorListProps) => (
  <div>
    <h1>GraphQL Error</h1>
    {errors.map(error => (
      <pre key={error.message}>{error.message}</pre>
    ))}
  </div>
)

export default GraphQLErrorList
