import { NextResponse } from "next/server";
import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { RoutePath } from "./lib/utils/constants";
import { routeList } from "./lib/utils";

async function middleware(req: NextRequestWithAuth) {
    const response = NextResponse.next();
    const session = req.nextauth.token;
    if (
        session &&
        (req.nextUrl.pathname === RoutePath.HOME ||
            req.nextUrl.pathname === RoutePath.SIGN_IN ||
            req.nextUrl.pathname === RoutePath.SIGN_UP)
    ) {
        return NextResponse.redirect(new URL(RoutePath.WAITLIST, req.url));
    }

    if (
        !session &&
        req.nextUrl.pathname !== RoutePath.HOME &&
        req.nextUrl.pathname !== RoutePath.SIGN_IN &&
        req.nextUrl.pathname !== RoutePath.SIGN_UP
    ) {
        return NextResponse.redirect(new URL(RoutePath.SIGN_IN, req.url));
    }

    return response;
}

const publicRoutes = [RoutePath.HOME, RoutePath.SIGN_IN, RoutePath.SIGN_UP];

export default withAuth(middleware, {
    callbacks: {
        authorized: ({ token, req }) => {
            if (!token) {
                return publicRoutes.includes(req.nextUrl.pathname);
            } else {
                return true;
            }
        },
    },
    pages: {
        signIn: RoutePath.SIGN_IN,
    },
});
export const config = {
    matcher: [
        "/",
        "/sign-in",
        "/sign-up",
        "/waitlist",
        "/display",
        "/schedule",
        "/locations",
        "/serving",
        "/settings",
        "/team-members",
    ],
};
