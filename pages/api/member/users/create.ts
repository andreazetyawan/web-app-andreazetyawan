import { lucia } from "@/lib/auth";
import { generateIdFromEntropySize } from "lucia";
import { hash } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method !== "POST") {
		// res.status(404).end();
        res.status(404).json({ message: 'sorry, cant use GET method' });
		return;
	}

	const body: null | Partial<{ username: string; email: string; phoneNumber: string; password: string }> = req.body;
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
	const email = body?.email;
	if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi.test(email)) {
		res.status(400).json({
			error: "Invalid Email"
		});
		return;
	}
    const phoneNumber = body?.phoneNumber;
	if (!phoneNumber || phoneNumber.length < 12) {
		res.status(400).json({
			error: "Invalid Phone Number"
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
    await prisma.user.create({
        data: {
            id: userId,
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            password_hash: passwordHash
        },
    })

	const session = await lucia.createSession(userId, {});
	res.appendHeader("Set-Cookie", lucia.createSessionCookie(session.id).serialize())
		.status(200)
		.end();
}