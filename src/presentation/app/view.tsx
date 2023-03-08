import { useState, useEffect } from 'react';
import { AssetModel } from 'src/domain/models';
import { AssetCard } from '../components';
import { SearchInput } from '../components/search-input/view';
import { useAssets } from '../hooks';
import { Container } from './styles';

export function App() {
  const { assets } = useAssets();

  const [filteredAssets, setFilteredAssets] = useState<AssetModel[]>([]);

  useEffect(() => {
    if (assets.length && !filteredAssets.length) setFilteredAssets(assets);
  }, [assets, filteredAssets]);

  console.log('a');

  return (
    <Container>
      <SearchInput assets={assets} setAssets={setFilteredAssets} />

      {filteredAssets.map((asset) => (
        <AssetCard key={asset.id} asset={asset} />
      ))}
    </Container>
  );
}
