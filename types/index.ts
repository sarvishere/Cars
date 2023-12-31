import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string;
    textStyles?:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
    rightIcon?:string;
    isDisabled?: boolean;
}

export interface SearchManuFacturerProps {
    manufacturer : string;
    setManuFacturer: (manufacturer : string) => void;
    
}

export interface CarProps {
    city_mpg: number;                       
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number
}

export interface FilterProps {
    manufacturer:string;
    year:number;
    fuel:string;
    model:string;
    limit:number;
}

export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }

  export interface ShowMoreProps {
    pageNumber: number;
    isNext:boolean;    
}

export interface ShowMoreProps {
    pageNumber : number;
    inNext: boolean;
  }