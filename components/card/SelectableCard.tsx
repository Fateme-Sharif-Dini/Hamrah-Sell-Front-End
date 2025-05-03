import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ChevronLeft } from "@/components/icons/ChevronLeft";
import clsx from "clsx";
import { CheckCircleIcon } from "@/components/icons/CheckCircleIcon";
import { VectorIcon } from "../icons/VectorIcon";
import { HashtagIcon } from "../icons/HashtagIcon";
import { BuildingStorefrontIcon } from "../icons/BuildingStorefrontIcon";
import { PhoneIcon } from "../icons/PhoneIcon";

export type Variant = "rectangle" | "square" | "store" | "supplier";

type Item = {
  label: string;
};

type Props = {
  variant: Variant;
  title?: string;
  image: string;
  href: string;
  icon?: string;
  storeName?: string;
  signTitle?: string;
  items?: Item[];
  className?: string;
  overlayLogo?: string;
  showChevron?: boolean;
  cardTitle?: string;
};

export default function SelectableCard({
  variant,
  title,
  image,
  href,
  icon,
  storeName,
  signTitle,
  items = [],
  className,
  overlayLogo,
  showChevron = false,
  cardTitle,
}: Props) {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setSelected(true);
    setTimeout(() => router.push(href), 150);
  };

  const renderOverlay = (isImageCard?: boolean) => {
    if (!selected || variant === "store" || variant === "supplier") return null;

    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-150">
        {isImageCard && overlayLogo ? (
          <div className="relative w-12 h-12">
            <Image
              src={overlayLogo}
              alt="overlay logo"
              fill
              className="object-contain"
            />
          </div>
        ) : null}
      </div>
    );
  };

  const renderImage = () => (
    <div className="relative w-[192px] h-[128px] overflow-hidden rounded-t-xl">
      <Image
        src={image}
        alt={title || "image"}
        fill
        className={clsx(
          "object-cover transition-all duration-150",
          selected && variant !== "store" && variant !== "supplier" && "brightness-50 scale-105"
        )}
      />
      {renderOverlay(true)}
    </div>
  );

  const renderItemWithIcon = (item: Item, idx: number) => {
    const icons = variant === "store" 
      ? [
          <HashtagIcon key="email" className="w-3.5 h-3.5" />,
          <BuildingStorefrontIcon key="website" className="w-3.5 h-3.5" />,
          <PhoneIcon key="phone" className="w-3.5 h-3.5" />,
          <CheckCircleIcon key="check" className="w-3.5 h-3.5" />
        ]
      : [
        <HashtagIcon key="email" className="w-3.5 h-3.5" />,
        <PhoneIcon key="phone" className="w-3.5 h-3.5" />,
        <CheckCircleIcon key="check" className="w-3.5 h-3.5" />
        ];
    
    return (
      <div key={idx} className="flex items-center gap-1 text-xs">
        {icons[idx]}
        <span className="font-semibold">{item.label}</span>
      </div>
    );
  };

  const isActive = selected || hovered;

  const cardStyles = {
    base: "cursor-pointer transition-all duration-150 overflow-hidden hover:shadow-md",
    selected: isActive
      ? "bg-primary text-primary-foreground transform scale-[0.98]"
      : "bg-card text-card-foreground",
    square: "w-[356px] h-[300px] flex flex-col justify-center items-center p-0 border-[#BFBFBF] border-[2px]",
    rectangle: "rounded-xl h-[128px] w-[1523px] p-0 border-[#BFBFBF] border-[2px]",
    store: "rounded-xl h-[128px] w-[1523px] border-[#BFBFBF] border-[2px] p-0",
    supplier: "rounded-xl h-[128px] w-[1523px] border-[#BFBFBF] border-[2px] p-0",
  };

  return (
    <Card
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={clsx(
        cardStyles.base,
        cardStyles.selected,
        cardStyles[variant],
        className
      )}
    >
      {variant === "rectangle" && (
        <div className="relative h-[128px] w-[1523px] bg-white">
          <div className="absolute left-4 top-[40%] -translate-y-1/2">
            <ChevronLeft className="w-8 h-8 text-black" />
          </div>
          <div className="absolute right-[208px] top-[40%] -translate-y-1/2">
            <h3 className={clsx(
              "text-[32px] font-semibold text-right transition-colors duration-150",
              isActive ? "text-[#005B85] -translate-x-2" : "text-black"
            )}>{cardTitle || title}</h3>
          </div>
          <div 
            className={clsx(
              "absolute bottom-0 left-0 right-[192px] h-[32px] transition-colors duration-150",
              isActive ? "bg-[#006899]" : "bg-[#0095DA]"
            )}
          />
          <div className="right-0 top-0 w-[192px] h-[128px] relative">
            <Image
              src={image}
              alt={title || "image"}
              fill
              className={clsx(
                "object-cover transition-all duration-150",
                isActive && "brightness-50"
              )}
            />
            {selected && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[108px] h-[79px]">
                  <Image
                    src="/images/logo-s2.png"
                    alt="MCI logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {variant === "square" && (
        <div className="relative flex flex-col w-full h-full">
          <div className="relative w-[356px] h-[237px] top-0">
            <Image
              src={image}
              alt={title || "square"}
              fill
              className={clsx(
                "object-contain transition-all duration-150",
                isActive && "brightness-50"
              )}
            />
            {selected && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[176px] h-[129px]">
                  <Image
                    src="/images/logo-s2.png"
                    alt="MCI logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}
          </div>
          <span className={clsx(
            "font-semibold text-center text-[20px] line-clamp-2 transition-colors duration-150",
            isActive ? "text-[#005B85]" : "text-black"
          )}>
            {cardTitle || title}
          </span>
          <div 
            className={clsx(
              "absolute bottom-0 lef-0 right-0 h-[13px] w-[356px] transition-colors duration-150",
              isActive ? "bg-[#006899]" : "bg-[#0095DA]"
            )}
          />
        </div>
      )}

      {variant === "store"  && (
        <div className="flex flex-row w-[1523px]">
          <div className="flex flex-1 flex-col p-4">
            <h3 className={clsx(
              "font-semibold text-2xl mb-2 transition-colors duration-150",
              isActive ? "text-[#005B85]" : "text-black"
            )}>{cardTitle || storeName}</h3>
            
            <div className="flex items-center gap-2 mb-3">
              <div className="relative w-[24px] h-[24px]">
              <VectorIcon />
              </div>
              <p className="text-sm text-muted-foreground">{signTitle}</p>
            </div>

            <div className="flex flex-wrap gap-30">
              {items.map(renderItemWithIcon)}
            </div>
          </div>
          {/* Store Image */}
          <div className="relative w-[192px] h-[128px] flex-shrink-0">
          <Image
              src={image}
              alt={title || "image"}
              fill
            />
          </div>

          {/* Chevron Container */}
          <div className={clsx(
            "relative left-0 top-0 p-0 m-0 w-[32px] h-[126px] flex items-center justify-center transition-colors duration-150",
            isActive ? "bg-[#0095DA]" : "bg-white"
          )}>
            <ChevronLeft className="w-6 h-6 text-black" />
          </div>
        </div>
      )}
            {variant === "supplier"  && (
        <div className="flex flex-row w-[1523px]">
          <div className="flex flex-1 flex-col p-4">
            <h3 className={clsx(
              "font-semibold text-2xl mb-2 transition-colors duration-150",
              isActive ? "text-[#005B85]" : "text-black"
            )}>{cardTitle || storeName}</h3>
            <div className="flex flex-wrap gap-30 mt-8">
              {items.map(renderItemWithIcon)}
            </div>
          </div>
          {/* Store Image */}
          <div className="relative w-[192px] h-[128px] flex-shrink-0">
          <Image
              src={image}
              alt={title || "image"}
              fill
            />
          </div>

          {/* Chevron Container */}
          <div className={clsx(
            "relative left-0 top-0 p-0 m-0 w-[32px] h-[126px] flex items-center justify-center transition-colors duration-150",
            isActive ? "bg-[#0095DA]" : "bg-white"
          )}>
            <ChevronLeft className="w-6 h-6 text-black" />
          </div>
        </div>
      )}
    </Card>
  );
}