import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber === 7) {
    return res.status(200).json({ message: "You're very lucky today!" });
  } else {
    return res.status(500).json({ error: "Sorry, something went wrong." });
  }
}