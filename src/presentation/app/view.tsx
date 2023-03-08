import { AssetCard } from '../components';
import { useAssets } from '../hooks';
import { Container } from './styles';

export function App() {
  const { assets } = useAssets();

  return (
    <Container>
      {assets.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </Container>
  );
}
