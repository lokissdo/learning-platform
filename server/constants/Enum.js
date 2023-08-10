const UserRoleEnum = {
    member: 0,
    lecturer: 1
};

const UserStatusEnum = {
    permSuspended: -2,
    tempSuspended: -1,
    active: 0
};

module.exports = { UserRoleEnum, UserStatusEnum };