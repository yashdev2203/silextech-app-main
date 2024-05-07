import React from 'react';

const stats = [
  { label: 'Founded', value: '2021' },
  { label: 'Employees', value: '37' },
  { label: 'Countries', value: '12' },
  { label: 'Raised', value: '$25M' },
];
function StatsSection() {
  return (
    <div className="bg-s-lightblue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A better workflow
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                SilexTech simplifies legal document creation by streamlining the
                entire workflow. First, users select the template or clause they
                need from our extensive library. Then, they can customize it to
                suit their specific requirements, ensuring accuracy and
                relevance.
              </p>
              <p className="mt-8">
                After customization, users can preview the document to ensure it
                meets their expectations. Once satisfied, they can download the
                finalized document in their preferred format, whether its Word,
                PDF, or another file type, ready for immediate use.
              </p>
            </div>
            <div>
              <p>
                SilexTecch intuitive interface and user-friendly tools make the
                entire process seamless and efficient. Users can navigate
                effortlessly through the platform, with clear instructions and
                prompts guiding them at every step, ensuring a hassle-free
                experience.
              </p>
              <p className="mt-8">
                Whether you are a solo practitioner or part of a larger firm,
                SilexTech adapts to your needs, providing the tools you need to
                succeed in todays legal landscape. Join countless professionals
                who have already embraced SilexTech to enhance their workflow
                and client satisfaction.
              </p>
            </div>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div
                key={statIdx}
                className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6"
              >
                <dt className="text-base leading-7 text-white">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
