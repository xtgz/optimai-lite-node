class Generator {
    generateXClientAuthentication(timezone, browserName) {
        const timestamp = Date.now();
        const random = Math.random().toString(36).substring(2, 15);
        return Buffer.from(`${timestamp}:${random}:${timezone}:${browserName}`).toString('base64');
    }
}

module.exports = Generator;