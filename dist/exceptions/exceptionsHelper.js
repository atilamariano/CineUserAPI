"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleException = exports.Exceptions = void 0;
const common_1 = require("@nestjs/common");
var Exceptions;
(function (Exceptions) {
    Exceptions[Exceptions["InvalidData"] = 0] = "InvalidData";
    Exceptions[Exceptions["DatabaseException"] = 1] = "DatabaseException";
    Exceptions[Exceptions["NotFoundData"] = 2] = "NotFoundData";
    Exceptions[Exceptions["UnauthorizedException"] = 3] = "UnauthorizedException";
})(Exceptions = exports.Exceptions || (exports.Exceptions = {}));
function handleException({ message, exception }) {
    if (exception === Exceptions.InvalidData ||
        exception === Exceptions.NotFoundData) {
        throw new common_1.BadRequestException(message);
    }
    if (exception === Exceptions.DatabaseException) {
        throw new common_1.InternalServerErrorException(message ? message : 'Error in database.');
    }
    if (exception === Exceptions.UnauthorizedException) {
        throw new common_1.UnauthorizedException(message ? message : 'You not have permission to make this action.');
    }
}
exports.handleException = handleException;
//# sourceMappingURL=exceptionsHelper.js.map