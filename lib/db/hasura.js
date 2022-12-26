export async function createNewUser(token, issuer) {
  const operationsDoc = `
  mutation createNewUser() {
    insert_users(objects: {email: "faryabakhsh@gmail.com", id: 10, issuer: "did:ethr:0x4f0Bfc842885E2775Ef77109222E9EBAce6aaA04", publicAddress: "0x4f0Bfc842885E2775Ef77109222E9EBAce6aaA04"}) {
      affected_rows
      returning {
        email
        id
        issuer
      }
    }
  }
`;


export async function isNewUser(token, issuer) {
  const operationsDoc = `
  query isNewUser ($issuer: String!) {
    users(where: {issuer: {_eq: $issuer}}) {
     id
     email
     issuer
    }
  } 
`;

  const response = await queryHasuraGQL(
    operationsDoc,
    "isNewUser",
    { issuer },
    token
  );
  console.log({ response, issuer });
  return response?.users?.length === 0;
}

export async function queryHasuraGQL(
  operationsDoc,
  operationName,
  variables,
  token
) {
  const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}