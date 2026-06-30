function generateUsername() {
    return `user${Date.now()}`;
}

module.exports = {
    generateUsername
};