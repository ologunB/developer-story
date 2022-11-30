import Image from "next/image";
import { Tags } from "./Tags";
import { avatarImageSize, iconSize } from "../lib/constants";

type HeaderProps = {
  name: string;
  occupation: string;
  image_url: string;
  location: string;
  twitter: string;
  github: string;
  website: string;
  email: string;
  linkedin: string;
  technologies: string[];
};

export const Header = ({
  name,
  occupation,
  image_url,
  location,
  twitter,
  github,
  email, 
  linkedin,
  website,
  technologies,
}: HeaderProps) => (
  <header>
    <div className="flex flex-row items-center my-2">
      <div className="grow">
        <p className="text-3xl">{name}</p>
        <p className="text-base">{occupation}</p>
      </div>
      <Image
         className="rounded-md"
        src='/icons/mine.png'
        alt={"Image of " + name}
        width={avatarImageSize}
        height={avatarImageSize}
      />
    </div>
    <div className="flex flex-col gap-y-1 text-sm text-slate-600">
      <HeaderItem title={location} icon="marker" />
      <HeaderItem
        title={twitter}
        icon="twitter"
        href={`https://twitter.com/${twitter}`}
      />
      <HeaderItem
        title={github}
        icon="github"
        prepend="github.com/"
        href={`https://github.com/${github}`}
      />
      <HeaderItem title={email} icon="email" href="emailto:ologunbabatope@gmail.com"/>
      <HeaderItem title={linkedin} icon="linkedin" href={linkedin} />
      <HeaderItem title={website} icon="link" href={website} />
    </div>
    <div className="mt-4">
      <Tags items={technologies} />
    </div>
  </header>
);

const HeaderItem = ({
  title,
  icon,
  prepend,
  href,
}: {
  title: string;
  icon: "github" | "email" |"linkedin"|"link" | "marker" | "twitter";
  prepend?: string;
  href?: string;
}) => (
  <div className="flex gap-x-2">
    <Image
      src={`/svg/${icon}.svg`}
      alt={icon}
      width={iconSize}
      height={iconSize}
    />
    <span>
      {prepend}
      {href ? (
        <a target="_blank" rel="noreferrer" href={href}>
          {title}
        </a>
      ) : (
        title
      )}
    </span>
  </div>
);
