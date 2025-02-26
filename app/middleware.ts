import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, event: NextFetchEvent) {
    event.waitUntil(
        (async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("middleware");
        })()
    );

    return NextResponse.next();
}
