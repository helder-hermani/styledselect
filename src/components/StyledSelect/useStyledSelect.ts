import { useContext } from "react";
import {StyledSelect} from './index';
import {StyledSelectContext} from './StyledSelectContext';

export function useStyledSelect(){
    const {getValue} =useContext(StyledSelectContext);
    return {StyledSelect, getValue};
}