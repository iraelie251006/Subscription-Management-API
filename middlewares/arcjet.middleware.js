import { aj } from "../config/arcjet.js";

const arcjetMiddleware = async(req, res, next) => {
    try {
        const decision = await aj.protect(req, {requested: 1});

        if (decision.isDenied()){
            if (decision.reason.isRateLimit()) {
                return res.status(429).json({
                    message: "Rate limit exceeded",
                    details: decision.reason.details,
                });
            };
            if (decision.reason.isSensitiveInfo()) {
                return res.status(403).json({
                    message: "Sensitive information detected",
                    details: decision.reason.details,
                });
            };
            if (decision.reason.isBot()) {
                return res.status(403).json({
                    message: "Bot detected",
                    details: decision.reason.details,
                });
            };
            if (decision.reason.isShield()) {
                return res.status(403).json({
                    message: "SQL Injection detected",
                    details: decision.reason.details,
                });
            };
            return res.status(403).json({
                message: "Request denied",
                details: decision.reason.details,
            });
        }
    } catch (error) {
        console.log(`Arcjet Middleware Error: ${error}`);
        next(error);
    }
};

export default arcjetMiddleware;