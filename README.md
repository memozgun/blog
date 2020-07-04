# React Resume and blog app with built-in CMS

This is my attempt to learn React by creating a dynamic blog that has a basic content management system. The system uses Firebase as the database for posts and user authentication. It uses Redux for state management and Sass for styling.

Demo: [https://practical-beaver-b82f57.netlify.app/](https://practical-beaver-b82f57.netlify.app/) [![Netlify Status](https://api.netlify.com/api/v1/badges/18d59e74-eab6-4787-93ac-871486e33d7f/deploy-status)](https://app.netlify.com/sites/practical-beaver-b82f57/deploys)

Admin Page: [https://practical-beaver-b82f57.netlify.app/admin](https://practical-beaver-b82f57.netlify.app/admin)

This project was bootstrapped with Create React App.

---

To deploy it yourself, create a .env file in the home directory of the project with following attributes:

```
REACT_APP_FIREBASE_API_KEY=XXXXX
REACT_APP_FIREBASE_AUTH_DOMAIN=XXXXX
REACT_APP_FIREBASE_DATABASE_URL=XXXXX
REACT_APP_FIREBASE_PROJECT_ID=XXXXX
REACT_APP_FIREBASE_STORAGE_BUCKET=XXXXX
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=XXXXX
REACT_APP_FIREBASE_APP_ID=XXXXX
REACT_APP_ALLOWED_UID=XXXXX (This is used to create a workaround for firebase authentication to stop signing up new users, input your own Google UID.)
```

Firebase rules

```
{
  /* Visit https://firebase.google.com/docs/database/security to learn more about security rules. */
  "rules": {
  ".read": true,
  ".write": "auth.uid == "GOOGLE_UID",
  }
}
```
