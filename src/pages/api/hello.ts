// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../db/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await prisma.user.findFirst();
  res.status(200).json({ name: user?.email });
}
