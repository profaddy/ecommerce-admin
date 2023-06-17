/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI:
      "mongodb+srv://ecommerce:flip215272@ecommerce.fccpr22.mongodb.net/?retryWrites=true&w=majority",
    GOOGLE_ID:
      "944364658665-7uc1vi6f9i7t2lkt2gks28stcipd0s44.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    S3_ACCESS_KEY: "AKIAWM2WXZCGNHZSW5JX",
    S3_SECRET_ACCESS_KEY: "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",
    SECRET: "JiuMPZ9qq0*|!YPu",
    APP_ENV: "development",
    // NEXTAUTH_URL: "https://main.dk24ni53om5j0.amplifyapp.com",
  },
};

module.exports = nextConfig;
