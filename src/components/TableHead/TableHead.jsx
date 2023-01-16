import {THeadCell} from "./TableHead.styled"

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <THeadCell>Type</THeadCell>
        <THeadCell>Amount</THeadCell>
        <THeadCell>Currency</THeadCell>
      </tr>
    </thead>
  );
};
