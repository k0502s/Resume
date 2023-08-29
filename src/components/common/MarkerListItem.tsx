import { memo } from "react";
import styled from "styled-components";

interface MarkerListItemProps {
  text: string;
}

const MarkerListItem = ({ text }: MarkerListItemProps) => {
  return <MarkerList>{text}</MarkerList>;
};

export default memo(MarkerListItem);

const MarkerList = styled.li`
  margin-bottom: 1rem;
  white-space: pre-wrap;
  word-break: keep-all;
  color: inherit;
  font-size: 1rem;
  line-height: 1.5;
  ::marker {
    color: rgb(49, 132, 255);
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
`;