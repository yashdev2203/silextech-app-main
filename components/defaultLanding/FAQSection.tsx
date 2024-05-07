// import { useTranslation } from 'next-i18next';
// import { Card } from 'react-daisyui';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

// import faqs from './data/faq.json';

const faqs = [
  {
    question: 'How does SilexTech simplify legal document creation?',
    answer:
      "SilexTech automates the process of generating legal templates and clauses, saving you time and effort. Our intuitive interface allows you to quickly find and customize documents to meet your clients' needs.",
  },
  {
    question:
      'Is SilexTech suitable for my specific industry or legal requirements?',
    answer:
      "Yes! SilexTech offers a diverse library of templates and clauses tailored to various industries and legal scenarios. Whether you're in healthcare, finance, or real estate, SilexTech has you covered.",
  },
  {
    question: 'How can I customize templates in SilexTech?',
    answer:
      "SilexTech provides easy-to-use customization tools, allowing you to tailor templates to your clients' specific needs. You can modify content, adjust formatting, and personalize documents effortlessly.",
  },
  {
    question: 'Can I trust the legal compliance of SilexTech documents?',
    answer:
      'Absolutely! SilexTech ensures legal compliance by offering up-to-date templates and clauses. Our team regularly updates the library to reflect the latest regulations, minimizing the risk of errors and disputes.',
  },
  {
    question:
      'Is SilexTech suitable for solo practitioners as well as law firms?',
    answer:
      "Yes, SilexTech caters to both solo practitioners and law firms. Whether you're a freelancer managing your own clients or a part of a larger firm, SilexTech provides the tools you need for efficient legal document creation.",
  },
  {
    question: 'Does SilexTech offer customer support?',
    answer:
      'Of course! SilexTech is dedicated to providing excellent customer support. Our team is available to assist you with any questions or issues you may encounter while using the tool.',
  },
  {
    question: 'How frequently are new templates added to SilexTech?',
    answer:
      'We strive to regularly update SilexTech with new templates and clauses to meet the evolving needs of our users. Keep an eye on our announcements for updates on the latest additions to the library.',
  },
];

const FAQSection = () => {
  // const { t } = useTranslation('common');
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        ) : (
                          <PlusSmallIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">
                      {faq.answer}
                    </p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default FAQSection;
