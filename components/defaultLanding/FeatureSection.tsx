// import { useTranslation } from 'next-i18next';
import {
  ClipboardDocumentListIcon,
  WrenchIcon,
  CheckBadgeIcon,
} from '@heroicons/react/20/solid';
import Image from 'next/image';
import tempImage from '../../public/template.png';

const features = [
  {
    name: 'Diverse Template Library:',
    description:
      'Access a wide range of legal templates and clauses covering various industries and requirements.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Customization Options:',
    description:
      'Tailor templates to your clients specific needs with easy-to-use customization tools.',
    icon: WrenchIcon,
  },
  {
    name: 'Compliance Assurance:',
    description:
      'Ensure legal compliance with up-to-date templates and clauses, reducing the risk of errors and disputes.',
    icon: CheckBadgeIcon,
  },
];
const FeatureSection = () => {
  // const { t } = useTranslation('common');
  return (
    <div className="overflow-hidden bg-s-lightblue py-24 sm:py-32">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-white">
                Deploy faster
              </h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Powerful Features of SilexTech Plugin
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Unlock the potential of legal document creation with SilexTech.
                Explore its comprehensive features designed to simplify your
                workflow and enhance client satisfaction.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-darkblue px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
              <div
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                aria-hidden="true"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  src={tempImage}
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[24rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
                  alt="Product screenshot"
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
