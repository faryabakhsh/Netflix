// export async function queryHasuraGQL(
//   operationsDoc,
//   operationName,
//   variables,
//   token
// ) {
//   const result = await fetch(process.env.NEXT_PUBLIC_HASURA_ADMIN_URL, {
//     method: "POST",
//     headers: {
//       Authorization: `Bearer ${token}`,
//       // "Content-type": "application/json",
//     },
//     body: JSON.stringify({
//       query: operationsDoc,
//       variables: variables,
//       operationName: operationName,
//     }),
//   });

//   return await result.json();
// }

// function fetchMyQuery() {
//   const operationsDoc = `
//     query MyQuery {
//       Users {
//         email
//         id
//         issuer
//         publicAddress
//       }
//     }
//   `;
//   return queryHasuraGQL(operationsDoc, "MyQuery", {});
// }

// export async function startFetchMyQuery() {
//   const { errors, data } = await fetchMyQuery();
//   if (errors) {
//     // handle those errors like a pro
//     console.error(errors);
//   }
//   // do something great with this precious data
//   console.log(data);
// }
// startFetchMyQuery();

// /*
// This is an example snippet - you should consider tailoring it
// to your service.
// */

// async function fetchGraphQL(operationsDoc, operationName, variables) {
//   const result = await fetch(
//     "undefined",
//     {
//       method: "POST",
//       body: JSON.stringify({
//         query: operationsDoc,
//         variables: variables,
//         operationName: operationName
//       })
//     }
//   );

//   return await result.json();
// }

// const operationsDoc = `
//   query MyQuery {
//     users {
//       id
//       email
//       issuer
//       publicAddress
//     }
//   }
// `;

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

const operationsDoc = `
  query MyQuery {
    users 
      {
      id
      email
      issuer
      
    }
  }
`;

// export async function startFetchMyQuery() {
//   const { errors, data } = await fetchMyQuery();
//   if (errors) {
//     // handle those errors like a pro
//     console.error(errors);
//   }
//   // do something great with this precious data
//   console.log(data);
// }
// startFetchMyQuery();
