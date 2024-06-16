import { Lucia, TimeSpan } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "@/lib/db";
import { webcrypto } from "node:crypto";

globalThis.crypto = webcrypto as Crypto;

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(30, "d"), // no more active/idle
	sessionCookie: {
		name: "session",
		// this sets cookies with super long expiration
		// since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
		expires: false,
		attributes: {
			// set to `true` when using HTTPS
			secure: true,
			// secure: process.env.NODE_ENV === "production"
			// secure: !devMode // disable when `devMode` is `true`

		}
	},
	getSessionAttributes:() =>{
		return{};
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			username: attributes.username
		};
	}
});

// IMPORTANT!
declare module "lucia" {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username	:string;
}