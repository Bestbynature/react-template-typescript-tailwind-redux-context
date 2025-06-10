import type { FallbackProps } from "react-error-boundary";
import { ServerCoolDown } from "../assets/images";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div
      role="alert"
      className="grid grid-cols-1 md:grid-cols-2 items-center justify-center min-h-screen bg-gray-50 text-gray-800 p-6 gap-6"
    >
      <div className="bg-white shadow-md rounded-lg border border-red-500 flex flex-col items-center justify-center w-full h-full">
        <div className="max-w-md w-full p-6">
          <p className="text-xl font-semibold text-red-600 mb-4">
            Something went wrong:
          </p>
          <pre className="bg-gray-100 text-sm text-gray-700 p-4 rounded border border-gray-200 overflow-x-auto">
            {error.message}
          </pre>
          <button
            onClick={resetErrorBoundary}
            className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Try again
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={ServerCoolDown}
          loading="lazy"
          alt="a man fixing the computer cables"
          className="rounded-3xl shadow-md object-contain max-w-full max-h-full"
        />
      </div>
    </div>
  );
};

export default ErrorFallback;
