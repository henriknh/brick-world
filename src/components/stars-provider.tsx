import React, { useState } from "react";

export interface IStars {
  stars: string[];
  toggleStar(set: string): void;
  hasStar(set: string): boolean;
}

const StarsContext = React.createContext<IStars>({
  stars: [],
  toggleStar: (set_num) => {},
  hasStar: (set_num) => {
    return false;
  },
});

function StarsProvider({ children }: any) {
  const [stars, setStars] = useState<string[]>([]);

  function toggleStar(set_num: string) {
    const exists = stars.some((_star: string) => _star === set_num);
    if (exists) {
      setStars((prev) => prev.filter((_star) => _star !== set_num));
    } else {
      setStars((prev) => [...prev, set_num]);
    }
  }

  function hasStar(set_num: string) {
    return stars.some((_star) => _star === set_num);
  }

  return (
    <StarsContext.Provider value={{ stars, toggleStar, hasStar }}>
      {children}
    </StarsContext.Provider>
  );
}

export { StarsContext, StarsProvider };
