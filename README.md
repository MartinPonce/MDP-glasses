MDP-glasses | E-commerce react app proyect

Run Locally
1. Install Dependencies
$ yarn install
2. Create a new firebase project
Login to your google account and create a new firebase project here

Create an .env file and add the following variables.

// SAMPLE CONFIG .env, you should put the actual config details found on your project settings

FIREBASE_API_KEY=AIzaKJgkjhSdfSgkjhdkKJdkjowf
FIREBASE_AUTH_DOMAIN=yourauthdomin.firebaseapp.com
FIREBASE_DB_URL=https://yourdburl.firebaseio.com
FIREBASE_PROJECT_ID=yourproject-id
FIREBASE_STORAGE_BUCKET=yourstoragebucket.appspot.com
FIREBASE_MSG_SENDER_ID=43597918523958
FIREBASE_APP_ID=234598789798798fg3-034

After setting up necessary configuration, create a Database and choose Cloud Firestore and start in test mode

3. Run development server
$ yarn dev
Build the project
$ yarn build
How to add products or perform CRUD operations for Admin
Navigate to your site to /signup
Create an account for yourself
Go to your firestore collection users collection and edit the account you've just created. Change the role from USER to ADMIN.
Reload or sigin again to see the changes.
Firebase Admin to be integrated soon

Features
Admin CRUD operations
Firebase authentication
Firebase auth provider authentication
Account creation and edit