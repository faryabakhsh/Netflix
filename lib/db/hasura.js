export async function isNewUser(token) {
  const operationsDoc = `
  query MyQuery {
    users(where: {issuer: {_eq: "did:ethr:0x4f0Bfc842885E2775Ef77109222E9EBAce6aaA04"}}) {
      issuer
      publicAddress
      email
    }
  }
`;

  const response = await queryHasuraGQL(operationsDoc, "MyQuery", {}, token);
  console.log({ response });
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

function fetchMyQuery() {
  return queryHasuraGQL(
    operationsDoc,
    "MyQuery",
    {},
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3N1ZXIiOiJkaWQ6ZXRocjoweDRmMEJmYzg0Mjg4NUUyNzc1RWY3NzEwOTIyMkU5RUJBY2U2YWFBMDQiLCJwdWJsaWNBZGRyZXNzIjoiMHg0ZjBCZmM4NDI4ODVFMjc3NUVmNzcxMDkyMjJFOUVCQWNlNmFhQTA0IiwiZW1haWwiOiJmYXJ5YWJha2hzaEBnbWFpbC5jb20iLCJvYXV0aFByb3ZpZGVyIjpudWxsLCJwaG9uZU51bWJlciI6bnVsbCwid2FsbGV0cyI6W10sImlhdCI6MTY3MjAzMjM1NywiZXhwIjoxNjcyNjM3MTU3LCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsidXNlciIsImFkbWluIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InVzZXIiLCJ4LWhhc3VyYS11c2VyLWlkIjoiZGlkOmV0aHI6MHg0ZjBCZmM4NDI4ODVFMjc3NUVmNzcxMDkyMjJFOUVCQWNlNmFhQTA0In19.lWVJq624zzBD4OGsQ47vXdN-X301hnmiDlsrDXT4YEA"
  );
}

export async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();
  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }
  // do something great with this precious data
  console.log(data);
}
startFetchMyQuery();
