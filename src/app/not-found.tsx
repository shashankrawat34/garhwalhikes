import Link from "next/link";
import { AlertCircle, Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark to-primary px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-6 max-w-md">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-2xl font-bold text-white font-heading">
          Trek Not Found
        </h2>
        <p className="text-white/80">
          It seems like this trail doesn&apos;t exist in our collection. Don&apos;t worry,
          we have many amazing treks waiting for you!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Link
            href="/treks"
            className="flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-dark hover:bg-accent-light transition-all"
          >
            <ArrowRight className="h-4 w-4" />
            View All Treks
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <Home className="h-4 w-4" />
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
