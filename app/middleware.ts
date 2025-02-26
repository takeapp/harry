import { geolocation } from "@vercel/functions";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export default async function middleware(
    req: NextRequest,
    event: NextFetchEvent
) {
    event.waitUntil(
        (async () => {
            const geo = geolocation(req);
            const isVercel = process.env.VERCEL === "1";
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("middleware", geo, isVercel);
        })()
    );

    return NextResponse.next();
}
