import { SizeContext } from "@/utils/size-observer";
import useAnimationFrame from "@/utils/use-animation-frame";
import React, { useContext, useRef, useCallback, useEffect } from "react";
import Image from "next/image";

interface Props {
  initialOffsetX?: number;
  className?: string;
  contentWidth: number;
  children: React.ReactNode;
}

const SliderContainer: React.FC<Props> = ({
  children,
  initialOffsetX = 0,
  contentWidth,
  className = ""
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef<number>(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);
  const refAnimationFrame = useRef<number>();

  const enabled = innerWidth < contentWidth;

  const animate = useCallback(() => {
    if (!refContainer.current || !refContent.current) return;

    refScrollX.current += 0.5;
    refContainer.current.scrollLeft = refScrollX.current;

    // Reset position when scrolled halfway
    if (refScrollX.current >= refContent.current.scrollWidth / 2) {
      refScrollX.current = 0;
      refContainer.current.scrollLeft = 0;
    }

    refAnimationFrame.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (enabled) {
      refAnimationFrame.current = requestAnimationFrame(animate);
    } else {
      if (refAnimationFrame.current) {
        cancelAnimationFrame(refAnimationFrame.current);
      }
      refScrollX.current = initialOffsetX;
      if (refContainer.current) {
        refContainer.current.scrollLeft = initialOffsetX;
      }
    }

    return () => {
      if (refAnimationFrame.current) {
        cancelAnimationFrame(refAnimationFrame.current);
      }
    };
  }, [enabled, animate, initialOffsetX]);

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden whitespace-nowrap w-full ${className}`}
    >
      <div ref={refContent} className="inline-flex">
        {children}
      </div>
      {enabled && (
        <div className="inline-flex">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                key: `clone-${index}`,
                style: { ...child.props.style, flexShrink: 0 }
              });
            }
            return child;
          })}
        </div>
      )}
    </div>
  );
};

interface ItemProps {
  width?: number;
  children: React.ReactNode;
  className?: string;
}

export const SliderItem: React.FC<ItemProps> = ({ 
  children, 
  width = 300,
  className = ""
}) => {
  return (
    <div
      className={`inline-flex justify-center items-center mx-4 ${className}`}
      style={{ 
        width: `${width}px`,
        flexShrink: 0
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            style: {
              ...child.props.style,
              width: '100%',
              height: 'auto',
              maxWidth: '100%',
              objectFit: 'contain'
            }
          });
        }
        return child;
      })}
    </div>
  );
};

export default SliderContainer;