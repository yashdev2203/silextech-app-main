import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { NextPageWithLayout } from 'types';
// import { useTranslation } from 'next-i18next';
import { Img } from '@react-email/components';
import { useState } from 'react';
import {  HashtagIcon } from '@heroicons/react/24/outline'

// import app from '@/lib/app';

const Products: NextPageWithLayout = () => {
  // const { t } = useTranslation('common');

  const [features] = useState([
    {
      name: 'Clause Management',
      description: 'The Clause Library feature centralizes legal clauses with standardized formats, version control, and metadata for easy search.',
      icon: HashtagIcon
    },
    {
      name: 'Template Management',
      description: 'The platform facilitates the development and customization of document templates, including a template library for commonly used legal documents.',
      icon: HashtagIcon
    },
    {
      name: 'Collaboration and Guidance',
      description: 'The platform supports real-time collaboration, commenting, and change tracking, along with workflow management and compliance verification.',
      icon: HashtagIcon
    },
    {
      name: 'User Experience',
      description: 'The platform features an intuitive interface for seamless access to the clause library, document creation, and collaboration.',
      icon: HashtagIcon
    },
    {
      name: 'AI-powered Document Analysis',
      description: 'Automated Clause Extraction uses AI to streamline clause population from contracts, minimizing manual input.',
      icon: HashtagIcon
    },

  ])

  return (

    <>
      <div className="overflow-hidden bg-[#f3f5f8] rounded-[8px]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="lg:pr-4 lg:pt-4 lg:pl-4  mt-5">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{"Download and install the word extension and start empowering your teams."}</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {" Seamlessly insert references and bibliographies into your document using our citation add-in for Microsoft® Word."}
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="inline-flex rounded-md bg-[#F3892C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#F3892C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    {"Download Silex CLM for Microsoft Word"}
                  </a>
                </div>
              </div>
            </div>
            <Img
              src="https://www.marketing91.com/wp-content/uploads/2019/03/Alternatives-of-Microsoft-Word-11.jpg"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[1010px] md:-ml-4 lg:ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-24 sm:py-32">
      <div className=" border border-solid mb-20	mx-20" ></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {"Manage the legal documents lifeCycle"}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {"The Silex CLM Word plugin streamlines legal document management in Microsoft Word, empowering professionals to handle clauses and templates seamlessly within their familiar workspace."}
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features && features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>

                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

      </div>
      <div className="bg-gradient-to-r from-[#428da4]    py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {"Get Silex CLM from Microsoft AppSource"}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {"Efficient Legal Document Management with AI-Powered Clause Extraction and Analysis.Get started with Silex CLM for Microsoft Word today."}
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex rounded-md bg-[#F3892C] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#F3892C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                {"Get started"}
              </a>
            </div>
            
          </div>
          
        </div>
      
      </div>
    </>

  );
};

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
    },
  };
}

export default Products;
