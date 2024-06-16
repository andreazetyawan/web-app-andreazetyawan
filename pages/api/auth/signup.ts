import prisma from "@/lib/prisma";
import { lucia } from "@/lib/auth";
import { generateIdFromEntropySize } from "lucia";
import { hash } from "@node-rs/argon2";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler( req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		// res.status(404).end();
        res.status(404).json({ message: 'sorry, cant use GET method' })
		return;
		// res.status(200).json({ message: 'Hello from Next.js!' })
	}

	const body: null | Partial<{ username: string; password: string }> = req.body;
	const username = body?.username;
	if (
		!username ||
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		res.status(400).json({
			error: "Invalid Username"
		});
		return;
	}
	const password = body?.password;
	if (!password || password.length < 6 || password.length > 255) {
		res.status(400).json({
			error: "Invalid Password"
		});
		return;
	}

	const passwordHash = await hash(password, {
		// recommended minimum parameters
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});
	const userId = generateIdFromEntropySize(16); // 16 characters long

	// TODO: check if username is already used
	const checkUser = await prisma.user.findUnique({
		where: {
			username: username,
		},
	  })
	  if (checkUser) {
		res.status(400).json({
			error: "user already exists"
		});
		return;
	}

    const createUser = await prisma.user.create({
        data: {
            id: userId,
            username: username,
            password: passwordHash
        },
    })
	if (createUser) {
		res.status(200).json({
			message: "user created successfully"
		});
		return;
	}

	const session = await lucia.createSession(userId, {});
	res.appendHeader("Set-Cookie", lucia.createSessionCookie(session.id).serialize())
		.status(200)
		.end();
}