/*
This is an example snippet - you should consider tailoring it
to your service.
*/

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch("https://epic-zebra-55.hasura.app/v1/graphql", {
    method: "POST",
    headers: {
      "x-hasura-admin-secret":
        "SPb9KHOiZ8cwlL5VLEeKqiNKpINOMq4nJtGuM4nCwO9o7eRhu4qgRat1vGZVcEJg",
    },
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
  query MyQuery {
    users {
      id
    }
  }
  
  mutation MyMutation {
    insert_users(objects: {email: "salwa@gmail.com", id: 10, issuer: "salwa", publicAddress: "did:ethr:0djfkdj"}) {
      affected_rows
    }
  }
`;

function fetchMyQuery() {
  return fetchGraphQL(operationsDoc, "MyQuery", {});
}

function executeMyMutation() {
  return fetchGraphQL(operationsDoc, "MyMutation", {});
}

async function startFetchMyQuery() {
  const { errors, data } = await fetchMyQuery();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}

startFetchMyQuery();

export async function startExecuteMyMutation() {
  const { errors, data } = await executeMyMutation();

  if (errors) {
    // handle those errors like a pro
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
}
