export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen dark:bg-dark-area bg-gray-100 text-gray-700">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19V6l-2-2 5-5 5 5-2 2v13H9z"
          ></path>
        </svg>
        <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
        <p className="text-base mt-4">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
}
