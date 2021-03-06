export default {
  environment: process.env.NODE_ENV,
  port: process.env.PORT || 3000,

  isProduction() {
    return this.get('express.environment') === 'production';
  },
};
