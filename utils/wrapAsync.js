module.exports = (fn) => {
    return function (req, res, next) {
        Promise.resolve(fn(req, res, next)).catch((err) => {
            console.log("🔥 ERROR:", err);   // debug
            next(err);                      // pass properly
        });
    };
};