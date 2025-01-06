# Malawi Village
A brief description of your project.

## Table of Contents
- Project Structure
- Technologies Used
- Getting Started
- Folder Structure
- Contributing
- License

## Project Structure
The project is built with React (using Vite as the build tool) and styled using Tailwind CSS. It is organized into pages and components for modularity and reusability.

# Technologies Used
- React: Frontend library for building UI.
- Vite: Fast build tool and development server.
- Tailwind CSS: Utility-first CSS framework.
- React Router: For navigation between pages.

# Getting Started
## Prerequisites
Make sure you have the following installed:

- Node.js (v14+)
- npm or yarn

## Clone the Repository
```bash
git clone <repo-url>
cd <project-folder>
```
- Install Dependencies
```bash
npm install
```
- Run the Development Server
```bash
npm run dev
```
- Build for Production
```bash
npm run build
```
- Preview the Build
```bash
npm run preview
```

### Folder Structure
```
src/
├── assets/             # Static files (images, icons, fonts, etc.)
├── components/         # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Footer.jsx      # Footer section
│   ├── And many more
|
├── pages/              # Page components
│   ├── All pages in here
|
├── constants/              
│   ├── index.js        # contains data that will store all dynamic stuffs that will be fetched from the backend
|
├── index.css     # Tailwind imports and global styles
│   
├── App.jsx             # Main application component
├── main.jsx            # Entry point for React app
├── vite.config.js      # Vite configuration file
└── tailwind.config.js  # Tailwind configuration
```

## Contributing
We welcome contributions! Follow these steps to contribute:

### Fork the repository.
- Create a new branch:
```bash
git checkout -b feature-name
```
- Make changes and commit:
```bash
git commit -m "Add new feature"
```
- Push to your branch:
```bash
git push origin feature-name
```
- Open a Pull Request.

## License
This project is licensed under the MIT License.