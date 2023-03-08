import { Container, Name, Symbol, Price } from './styles';

import { AssetCardProps } from './types';

export function AssetCard(props: AssetCardProps) {
  const { asset } = props;

  return (
    <Container trade={asset.trade}>
      <Name>{asset.name}</Name>
      <Symbol>{asset.symbol}</Symbol>
      <Price trade={asset.trade}>U$ {asset.price}</Price>
    </Container>
  );
}
