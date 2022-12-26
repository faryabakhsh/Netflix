import { magicAdmin } from "../../lib/magic";
import jwt from "jsonwebtoken";
import { isNewUser } from "../../lib/db/hasura";

export default async function login(req, res) {
  if (req.method == "POST") {
    try {
      const auth = req.headers.authorization;
      const didToken = auth ? auth.substr(7) : "";
      console.log({ didToken });

      //invoke magic
      const metadata = await magicAdmin.users.getMetadataByToken(didToken);
      console.log({ metadata });

      //create jwt
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
        "thisisasecrettthisisasecrettt1234"
      );
      console.log({ token });

      // check if user exits

      const isNewUserQuery = await isNewUser(token);

      res.send({ done: true });
    } catch (error) {
      console.error("something went wrong logging in", error);
      res.status(500).send({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}
