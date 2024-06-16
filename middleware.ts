import { verifyRequestOrigin } from "lucia";
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest): Promise<NextResponse> {
	if (request.method === "GET") {
		return NextResponse.next();
	}
	
	// NOTE: You may need to use `X-Forwarded-Host` instead
  	const host = request.headers.get('host');
  	const origin = request.headers.get('origin');

	if (!origin || !host || !verifyRequestOrigin(origin, [host])) {
		return new NextResponse(null, {
			status: 403
		});
	}
	return NextResponse.next();
}

// export const config = {
//   matcher: '/api/:path*',
// }