import {
  findVideoIdByUser,
  updateStats,
  insertStats,
} from "../../lib/db/hasura";
import { verifyToken } from "../../lib/utils";

export default async function stats(req, resp) {
  try {
    const token = req.cookies.token;
    if (!token) {
      resp.status(403).send({});
    } else {
      const inputParams = req.method === "POST" ? req.body : req.query;
      const { videoId } = inputParams;
      if (videoId) {
        const userId = await verifyToken(token);
        const findVideo = await findVideoIdByUser(token, userId, videoId);
        const doesStatsExist = findVideo?.length > 0;

        if (req.method === "POST") {
          const { favourited, watched = true } = req.body;
          if (doesStatsExist) {
            // update it
            const response = await updateStats(token, {
              watched,
              userId,
              videoId,
              favourited,
            });
            resp.send({ data: response });
          } else {
            // add it
            const response = await insertStats(token, {
              watched,
              userId,
              videoId,
              favourited,
            });
            resp.send({ data: response });
          }
        } else {
          if (doesStatsExist) {
            resp.send(findVideo);
          } else {
            resp.status(404);
            resp.send({ user: null, msg: "Video not found" });
          }
        }
      }
    }
  } catch (error) {
    resp.status(500).send({ done: false, error: error?.message });
  }
}

// import jwt from "jsonwebtoken";
// import {
//   findVideoIdByUser,
//   insertStats,
//   updateStats,
// } from "../../lib/db/hasura";

// export default async function stats(req, resp) {
//   if (req.method === "POST") {
//     try {
//       const token = req.cookies.token;
//       if (!token) {
//         resp.status(403).send({});
//       } else {
//         const { videoId } = req.body;
//         if (videoId) {
//           const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

//           const userId = decodedToken.issuer;

//           const findVideo = await findVideoIdByUser(token, userId, videoId);
//           const doesStatsExist = findVideo?.length > 0;

//           const { favourited, watched = true } = req.body;
//           if (doesStatsExist) {
//             // update it
//             const response = await updateStats(token, {
//               watched,
//               userId,
//               videoId,
//               favourited,
//             });

//             resp.send({ data: response });
//           } else {
//             // add it
//             const response = await insertStats(token, {
//               watched,
//               userId,
//               videoId,
//               favourited,
//             });

//             resp.send({ data: response });
//           }
//         } else {
//           resp.status(500).send({ msg: "videoId is required" });
//         }
//       }
//     } catch (error) {
//
//       resp.status(500).send({ done: false, error: error?.message });
//     }
//   } else {
//     const token = req.cookies.token;
//     if (!token) {
//       resp.status(403).send({});
//     } else {
//       const { videoId } = req.query;
//       if (videoId) {
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

//         const userId = decodedToken.issuer;
//         const findVideo = await findVideoIdByUser(token, userId, videoId);
//         const doesStatsExist = findVideo?.length > 0;
//         if (doesStatsExist) {
//           resp.send(findVideo);
//         } else {
//           // add it
//           resp.status(404);
//           resp.send({ user: null, msg: "Video not found" });
//         }
//       }
//     }
//   }
// }
