import { magicAdmin } from "../../lib/magic";
import jwt from "jsonwebtoken";

export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      const auth = req.headers.authorization;
      const didToken = auth ? auth.substr(7) : "";
      console.log({ didToken });

      const metadata = await magicAdmin.users.getMetadataByToken(didToken);
      console.log({ metadata });

      const token = jwt.sign(
        {
          ...metadata,
          iat: Math.floor(Date.now() / 1000),
          exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60),
          "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${metadata.issuer}`,
          },
        },
        "thisisasecretthisisasecrett1234"
      );
      console.log({ token });

      res.send({ done: true });
    } catch (error) {
      console
        .error("something went wrong logging in", error)
        .res.status(500)
        .send({ done: false }); // send  function is going to act as a return so it should be after console. send should be after console so that we can see the error before it returns anything
    }
  } else {
    res.send({ done: false });
  }
}
