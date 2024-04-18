import { authMiddleware } from "@clerk/nextjs";

// https://stackoverflow.com/questions/77358888/how-can-i-make-next-js-dynamic-route-public-in-clerk-js

export default authMiddleware({
  publicRoutes: ["/", "/project", "/project/(.*)", "/blog", "/blog/(.*)"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/(api|trpc)(.*)"],
};
