FundApp - Crowdfunding Platform

FundApp is a modern web application that allows users to create, browse, and contribute to fundraisers. Built with React, Firebase, and Tailwind CSS, FundApp provides a user-friendly interface for people to raise funds for various causes with zero platform fees.

Features

Create Fundraisers: Users can create their own fundraisers by filling out a simple form with title, description, goal, and an image.

Browse Fundraisers: Users can browse through a list of active fundraisers and view detailed information, including the goal, amount raised, and description.

Donate: Users can donate to any fundraiser and see the real-time list of donors.

Comment: Users can leave comments on the fundraisers to support or inquire.

Zero Platform Fees: Unlike most crowdfunding platforms, FundApp does not take any fees from the donations.

Tech Stack

Frontend:

React.js (for building the user interface)

React Router (for handling routing)

Tailwind CSS (for styling)

Axios (for making HTTP requests)

Firebase (for user authentication and real-time database)

Lucide-react (for icons)

Backend:

Firebase Realtime Database (for storing fundraiser data, donations, and comments)

Setup Instructions

To get started with this project, follow the steps below:

1. Clone the Repository
git clone https://github.com/your-username/fund-app.git
cd fund-app

2. Install Dependencies

Install the necessary dependencies using npm or yarn.

npm install


or

yarn install

3. Configure Firebase

Go to Firebase Console
, create a new project, and add Firebase to your web app.

Copy your Firebase config and paste it inside your Firebase configuration file.

For example:

// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  databaseURL: "your-database-url",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const database = getDatabase(app);

4. Run the Development Server

Start the local development server:

npm run dev