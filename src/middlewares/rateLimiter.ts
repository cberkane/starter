import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        status: 429,
        error: "Too many requests, please try again later.",
    },
});

export const loginRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: {
        status: 429,
        error: "Too many login attempts, please try again later.",
    },
});