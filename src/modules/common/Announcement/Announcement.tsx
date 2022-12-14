import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { flex, hideScroll, userSelect } from '@mixins/mixins';
import useInterval from '@hooks/useInterval';
import { fillContainer } from '@mixins/mixins';

export interface AnnouncementProps {
   title: string;
   description: string;
}

export interface AnnouncementListProps {
   announcements: Array<AnnouncementProps>;
}

export const Announcement: FC<AnnouncementListProps> = ({ announcements }) => {
   const scrollRef = useRef<HTMLElement>(null);
   const [isDown, setIsDown] = useState<boolean>(false);
   const [startX, setStartX] = useState<number>(0);
   const [move, setMove] = useState<number>(0);

   useEffect(() => {
      if (scrollRef.current) {
         setMove(scrollRef.current.scrollWidth / announcements.length);
      }
   }, [announcements]);

   useInterval(
      () => {
         if (scrollRef.current) {
            let moveTo: number = scrollRef.current.scrollLeft + move;
            if (moveTo + 1 >= scrollRef.current.scrollWidth) {
               moveTo = 0;
            }
            scrollRef.current.scrollLeft = moveTo;
         }
      },
      isDown ? null : 5000
   );

   const onMouseDown = (e: React.MouseEvent<HTMLElement>): void => {
      e.persist();
      setIsDown(true);

      if (scrollRef.current) {
         setStartX(e.pageX - scrollRef.current.offsetLeft);
         scrollRef.current.style.cursor = 'grabbing';
      }
   };

   const onMouseUp = (): void => {
      setIsDown(false);

      if (scrollRef.current) {
         scrollRef.current.style.cursor = 'grab';
      }
   };

   const onMouseMove = (e: React.MouseEvent<HTMLElement>): void => {
      e.preventDefault();

      if (!isDown) return;

      if (scrollRef.current) {
         const { offsetLeft, scrollWidth, scrollLeft } = scrollRef.current;

         const x: number = e.pageX - offsetLeft;
         const tolerance: number = 20;

         let moveTo: number =
            scrollLeft + tolerance + move * Math.sign(startX - x);

         if (moveTo >= scrollWidth) moveTo = 0;
         else if (moveTo < 0) moveTo = scrollWidth;

         scrollRef.current.scrollLeft = moveTo;
      }
   };

   const announcementItems = useMemo(() => {
      return announcements.map((announcement, index) => {
         return (
            <section key={index}>
               <strong className="title">{announcement.title}</strong>
               {announcement.description && (
                  <span className="description">{announcement.description}</span>
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
         ref={scrollRef}
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

  ${hideScroll}

  section {
    ${fillContainer}
    flex: none;
    ${flex()}
    gap: 0.5rem;
    scroll-snap-align: start;

    ${userSelect}
  }

   .title {
      text-transform: uppercase;
      font-size: var(--fs-200);
      letter-spacing: var(--spacing-md);
   }

   .description {
      font-size: var(--fs-100);
      text-decoration: underline;
      letter-spacing: var(--spacing-sm);
   }
`;
