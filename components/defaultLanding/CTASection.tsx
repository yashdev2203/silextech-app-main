import Link from 'next/link';
import React from 'react';

const CTASection = () => {
  return (
    <div className="bg-s-lightblue mt-32">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Streamlining Your Legal <br /> Workflow Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white">
            Discover the power of SilexTech and revolutionize your legal
            document creation process. Sign up now to access our extensive
            library of templates and clauses.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/auth/join"
              className="rounded-md bg-s-orange px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-s-darkblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
