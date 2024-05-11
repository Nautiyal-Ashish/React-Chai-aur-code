const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPEWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPEWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPEWRITE_DATABASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPEWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPEWRITE_BUCKET_ID),
};

export default conf;
