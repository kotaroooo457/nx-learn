import { FC } from 'react';

type Props = {
  className?: string;
  signOutClick?: () => void;
};

export const Header: FC<Props> = ({ className, signOutClick }) => {
  return (
    <header className={className}>
      <div>ロゴ</div>
      <ul>
        <li>アイコン1</li>
        <li>アイコン2</li>
      </ul>
      <div onClick={signOutClick}>サインアウト</div>
    </header>
  );
};
