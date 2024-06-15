import { Lucia, TimeSpan } from "lucia";
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
// import { PrismaClient } from '@prisma/client/edge';
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const adapter = new PrismaAdapter(client.session, client.user);

export const db = client;
export const lucia = new Lucia(adapter, {
	sessionExpiresIn: new TimeSpan(30, "d"), // no more active/idle
	sessionCookie: {
		name: "session",
		// this sets cookies with super long expiration
		// since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
		expires: false,
		attributes: {
			// set to `true` when using HTTPS
			// secure: true,
			secure: process.env.NODE_ENV === "production"

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
		db: typeof db;
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username	:string;
}