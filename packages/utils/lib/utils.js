"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["NONE"] = 0] = "NONE";
    UserRole[UserRole["ADMIN"] = 1] = "ADMIN";
    UserRole[UserRole["AGENT"] = 2] = "AGENT";
    UserRole[UserRole["VISITOR"] = 3] = "VISITOR";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
// Article, Item, etc.
var ContentStatus;
(function (ContentStatus) {
    ContentStatus[ContentStatus["MODERATION"] = 1] = "MODERATION";
    ContentStatus[ContentStatus["PUBLISHED"] = 2] = "PUBLISHED";
    ContentStatus[ContentStatus["DELETED"] = 3] = "DELETED";
    ContentStatus[ContentStatus["DRAFT"] = 4] = "DRAFT";
})(ContentStatus = exports.ContentStatus || (exports.ContentStatus = {}));
