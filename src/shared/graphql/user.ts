// ---- Runtime config ---------------------------------------------------------

import axios, { AxiosError } from 'axios'

// Fail fast if the env var is missing to avoid silent runtime errors later.
export const PAYLOAD_URL: string = (() => {
  const url = process.env.PAYLOAD_GRAPHQL
  if (!url) throw new Error('Environment variable PAYLOAD_GRAPHQL is not set')
  return url
})()

// ---- Raw GraphQL documents --------------------------------------------------

export const Q_GET_USER_BY_EMAIL = `
  query ($email: EmailAddress!) {
    Users(where: { email: { equals: $email } }) {
      totalDocs
      docs {
        id
        email
        role
        signupMethod
      }
    }
  }
`

export const M_CREATE_USER = `
  mutation (
    $email: String!
    $password: String!
    $role: User_role_MutationInput!
    $signupMethod: User_signupMethod_MutationInput!
  ) {
    createUser(
      data: { email: $email, password: $password, role: $role, signupMethod: $signupMethod }
    ) {
      id
    }
  }
`

export const M_LOGIN_USER = `
  mutation ($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      user {
        id
        email
      }
    }
  }
`

export async function graphQLRequest<V = Record<string, unknown>>(query: string, variables?: V) {
  try {
    const res = await axios.post(PAYLOAD_URL, {
      query,
      variables,
    })
    return res.data.data
  } catch (error) {
    const err = error as AxiosError<{ errors?: { message: string }[] }>
    const message = err.response?.data?.errors?.[0]?.message ?? err.message
    throw new Error(`PayloadCMS: ${message}`)
  }
}

export async function getUserByEmail(email: string) {
  const data = await graphQLRequest(Q_GET_USER_BY_EMAIL, { email })
  return data.Users.docs[0]
}

export async function emailExists(email: string): Promise<boolean> {
  const data = await graphQLRequest(Q_GET_USER_BY_EMAIL, {
    email,
  })
  return data.Users.totalDocs > 0
}

export async function createUser(
  email: string,
  password: string,
  role: 'user' | 'admin' = 'user',
  signupMethod: 'email' | 'yandex' = 'email',
) {
  const data = await graphQLRequest(M_CREATE_USER, {
    email,
    password,
    role,
    signupMethod,
  })

  return data.createUser
}

export async function loginUser(email: string, password: string) {
  const data = await graphQLRequest(M_LOGIN_USER, {
    email,
    password,
  })

  return data?.loginUser?.user
}
