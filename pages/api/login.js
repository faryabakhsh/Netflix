export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      const auth = req.headers;
      console.log({ auth });
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
