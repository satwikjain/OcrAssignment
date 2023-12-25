# OCR Application

This project is an Optical Character Recognition (OCR) application that analyzes Thai ID cards and extracts relevant data. It integrates with the Google Vision API for OCR processing and uses a MongoDB database to store the results. The application is divided into two parts: the client (front end) and the server (back end).

## Getting Started

### Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- Node.js
- MongoDB (for local development)
- Google Cloud SDK (for API integration)

### Database Configuration

1. Connect to a local MongoDB server.
2. Update the MongoDB URI in the server's `.env` file.

### Google Cloud API Integration

1. Install the Google Cloud SDK on your local machine.
2. Obtain a service account key for the Google Vision API.
3. Paste the key in the server's `.env` file.

## Running the Frontend

1. Navigate to the `client` folder: `cd client`.
2. Install dependencies: `npm install`.
3. Start the frontend: `npm start`.

## Running the Backend

1. Navigate to the `server` folder: `cd server`.
2. Install dependencies: `npm install`.
3. Run the server: `nodemon .\server.js`.

## Contributing

If you'd like to contribute to the project, please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to [Google Cloud](https://cloud.google.com/) for providing the Vision API.
- Inspired by the need for efficient OCR in real-world applications.
