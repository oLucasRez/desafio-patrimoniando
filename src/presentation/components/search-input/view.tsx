import { debounce } from 'lodash';
import { useCallback, ChangeEvent, useMemo } from 'react';
import { Container, Input } from './styles';
import { SearchInputProps } from './types';

export function SearchInput(props: SearchInputProps) {
  const { assets, setAssets } = props;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAssets(() => {
        const newAssets = assets.filter(({ name }) =>
          name
            .normalize()
            .toLowerCase()
            .includes(event.target.value.normalize().toLowerCase())
        );

        return newAssets;
      });
    },
    [assets, setAssets]
  );

  const handleDebouncedChange = useMemo(
    () => debounce(handleChange, 300),
    [handleChange]
  );

  return (
    <Container>
      <Input placeholder="Pesquisar..." onChange={handleDebouncedChange} />
    </Container>
  );
}
