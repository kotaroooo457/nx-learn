import { useRecoilValue } from 'recoil';

import { shopListState } from '../store/shopsSelector';

export const Shops: React.FC = () => {
  const shops = useRecoilValue(shopListState);

  return (
    <div>
      <div>Shops</div>
      <ul className="flex justify-center">
        {shops.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
