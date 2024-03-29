import React from 'react'

type SectionHeadingProps = {
  children?: React.ReactNode;
  title: string;
  moreLink?: string;
};

export const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-2xl font-bold">{props.title}</h1>
        <a href={props.moreLink || '/'} className="text-blue-500">
          Více
        </a>
      </div>
      {props.children}
    </>
  )
}
