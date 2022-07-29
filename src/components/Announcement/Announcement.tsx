import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { flex } from "@mixins/mixins";
import useInterval from "@hooks/useInterval";

interface AnnouncementProps {
   title: string;
   description: string;
}

export interface Props {
   announcements: Array<AnnouncementProps>;
}

const Announcement: FC<Props> = ({ announcements }) => {
   const scrollReff = useRef<HTMLElement>(null);
   const [isDown, setIsDown] = useState<boolean>(false);
   const [startX, setStartX] = useState<number>(0);
   const [move, setMove] = useState<number>(0);

   useEffect(() => {
      if (scrollReff.current) {
         setMove(scrollReff.current.scrollWidth / announcements.length);
      }
   }, [announcements]);

   useInterval(
      () => {
         if (scrollReff.current) {
            let moveTo: number = scrollReff.current.scrollLeft + move;
            if (moveTo + 1 >= scrollReff.current.scrollWidth) {
               moveTo = 0;
            }
            scrollReff.current.scrollLeft = moveTo;
         }
      },
      isDown ? null : 5000
   );

   const onMouseDown = (e: any): void => {
      e.persist();
      setIsDown(true);

      if (scrollReff.current) {
         setStartX(e.pageX - scrollReff.current.offsetLeft);
         scrollReff.current.style.cursor = "grabbing";
      }
   };

   const onMouseUp = (): void => {
      setIsDown(false);

      if (scrollReff.current) {
         scrollReff.current.style.cursor = "grab";
      }
   };

   const onMouseMove = (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();

      if (!isDown) return;

      if (scrollReff.current) {
         const { offsetLeft, scrollWidth, scrollLeft } = scrollReff.current;

         const x: number = e.pageX - offsetLeft;
         const tolerance: number = 20;

         let moveTo: number =
            scrollLeft + tolerance + move * Math.sign(startX - x);

         if (moveTo >= scrollWidth) moveTo = 0;
         else if (moveTo < 0) moveTo = scrollWidth;

         scrollReff.current.scrollLeft = moveTo;
      }
   };

   const announcementItems = useMemo(() => {
      return announcements.map((announcement, index) => {
         return (
            <section key={index}>
               <strong className="title">{announcement.title}</strong>
               {announcement.description && (
                  <span className="description">
                     {announcement.description}
                  </span>
               )}
            </section>
         );
      });
   }, [announcements]);

   return (
      <Wrapper
         onMouseDown={onMouseDown}
         onMouseUp={onMouseUp}
         onMouseLeave={onMouseUp}
         onMouseMove={onMouseMove}
         ref={scrollReff}
      >
         {announcementItems}
      </Wrapper>
   );
};

const Wrapper = styled.section`
   width: 100%;
   height: 2.5rem;

   display: flex;
   scroll-snap-type: x mandatory;
   scroll-behavior: smooth;
   overflow-x: scroll;

   cursor: grab;

   background: var(--bluishGreen-100);

   color: var(--bluishGreen-300);
   font-size: var(--fs-400);
   letter-spacing: var(--spacing-md);

   /* For removing the scrollbar from view */
   scrollbar-width: none;
   ::-webkit-scrollbar {
      display: none;
   }

   section {
      width: 100%;
      height: 100%;
      flex: none;
      ${flex()}
      gap: 0.5rem;
      scroll-snap-align: start;

      /* TODO: Create mixing for this property */
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
   }

   .title {
      text-transform: uppercase;
   }

   .description {
      font-size: var(--fs-300);
      text-decoration: underline;
   }
`;

export default Announcement;
