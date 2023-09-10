import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { CalendarDays, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as React from "react";
type PostPreviewProps = {
  title: string;
  url: string;
  pubDate: string;
  layout: string;
  description: string;
  author: string;
  authorImage: {
    url: string;
    alt: string;
  };
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
};

export const PostHover: React.FC<PostPreviewProps> = ({
  title,
  url,
  pubDate,
  layout,
  description,
  author,
  authorImage,
  image,
  tags,
}) => {
  return (
    <HoverCard openDelay={1} closeDelay={0}>
      <span className="border border-black p-2 rounded-2xl hover:bg-muted-foreground/5 transition-colors">
        <div className="flex items-center border-b-2 border-gray-400 justify-between">
          <div className='flex items-center gap-2'>
            <PenLine />
            <p className="text-xs">{author}</p>
          </div>
          <div className="flex w-fit items-center">
            <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
            <p>{pubDate}</p>
          </div>
        </div>
        <div className="flex justify-between items-center sm:flex-row">
          <HoverCardTrigger asChild>
            <a href={url}>
              <Button
                variant="link"
                className="md:text-2xl text-left max-w-lg sm:text-md h-fit"
              >
                {title}
              </Button>
            </a>
          </HoverCardTrigger>
        </div>
        <p className="sm:text-xs md:text-base font-extralight text-black ml-8 dark:text-gray-300 transition-colors text-left mb-4">
          {description}
        </p>
        <div className="flex flex-wrap items-center">
          Tags:
          {tags.map((tag: string) => (
            <a
            id={tag}
              href={`/tags/${tag}`}
              className="m-1 border-dotted border border-[#a1a1a1] rounded-lg p-2 hover:p-3 text-lg transition-all w-fit"
            >
              {tag}
            </a>
          ))}
        </div>
        <img src={image.url} width={300} height={200} className="mt-4"></img>
      </span>
      <HoverCardContent
        className="w-80 bg-slate-700"
        side="bottom"
        collisionPadding={10}
        avoidCollisions
      >
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={authorImage.url} />
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{title}</h4>
            <p className="text-sm">{description}</p>
            <p className="font-bold text-sm text-purple-500">{author}</p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">{pubDate}</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
