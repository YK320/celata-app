# Account Settings Screen

## Project Description

This project is a React Native **Account Settings** screen that allows users to update their account details, including their username, password, mobile number, and email. It features a user-friendly UI with input fields, a profile display section, and a back navigation button.

## Setup Instructions

### Clone the repository:
```sh
git clone https://github.com/YK320/celata-app
cd celata-app
```

### Install dependencies:
```sh
npm install
```

### Run the project:
```sh
npx expo start
```

### Test on Emulator/Device:
- Scan the QR code in **Expo Go** (for mobile testing)
- Use an **Android/iOS emulator**

## Technologies Used

- **React Native** - UI framework for mobile app development
- **Expo** - Simplifies the development and testing process
- **React Navigation** - Manages screen navigation
- **Ionicons** - Provides icons for UI elements

## Assumptions and Design Decisions

- **Navigation**: The back button navigates to the previous screen using `navigation.goBack()`.
- **User Profile Display**: A placeholder image and sample user details are used.
- **Security**: Password inputs are masked using `secureTextEntry`.
- **UI Styling**: A simple and clean design with **blue and white** color themes.
- **Form Validation**: Basic input fields included, but no validation logic implemented yet.
