import React, { FC } from 'react';
import styled from 'styled-components';

interface AnimationCascadeProps {
  duration?: number;
  active?: boolean;
  className?: string;
  children: any;
}

const AnimationCascade: FC<AnimationCascadeProps> = ({
  duration = 2,
  active = true,
  className,
  children,
  ...other
}) => {
  const baseDelay: number = 1;
  return (
    <AnimationCascadeWrapper
      duration={duration}
      className={`${active && 'active'} ${className}`}
      {...other}
    >
      {children.map((child, index) => {
        return React.cloneElement(child, {
          style: { '--delay': `${baseDelay * index}s` },
        });
      })}
    </AnimationCascadeWrapper>
  );
};

const AnimationCascadeWrapper = styled.div`
  --delay: 0s;

  & * {
    animation-delay: var(--delay);
    animation-duration: ${(props) => props.duration && `${props.duration}s`};
    animation-fill-mode: both;
  }

  &.active * {
    animation-name: slideUp;
  }

  @keyframes slideUp {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default AnimationCascade;
