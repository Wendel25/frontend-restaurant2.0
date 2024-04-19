import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FormControlLabel from '@mui/material/FormControlLabel';

import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';

import returnProducts from './services/list-products';
import returnListCategory from './services/return-categories';

// ----------------------------------------------------------------------

const GENDER_OPTIONS = ['Todos', 'Ativados', 'Desativados'];

// ----------------------------------------------------------------------

export default function ProductFilters({ openFilter, onOpenFilter, onCloseFilter }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await returnListCategory();
      setCategories(data);
    }

    fetchData();
  }, []);

  const handleGetProductsByCategory = (category) => {
    returnProducts({category})
  };

  const renderCategory = (
    <Stack spacing={1}>
      <Typography variant="subtitle2">Produtos</Typography>
      <RadioGroup>
        {GENDER_OPTIONS.map((item) => (
          <FormControlLabel
            key={item}
            value={item}
            control={<Radio onClick={() => handleGetProductsByCategory(item)} />}
            label={item}
          />
        ))}

        <Typography className="py-4" variant="subtitle2">
          Categorias
        </Typography>

        {categories.map((category) => (
          <FormControlLabel
            key={category?.id}
            value={category?.id}
            control={<Radio onClick={() => handleGetProductsByCategory(category?.id)} />}
            label={category?.name}
          />
        ))}
      </RadioGroup>
    </Stack>
  );

  return (
    <>
      <Button
        disableRipple
        color="inherit"
        endIcon={<Iconify icon="ic:round-filter-list" />}
        onClick={onOpenFilter}
      >
        Filtros
      </Button>

      <Drawer
        anchor="right"
        open={openFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 1, py: 2 }}
        >
          <Typography variant="h6" sx={{ ml: 1 }}>
            Filtros
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            {renderCategory}
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}

ProductFilters.propTypes = {
  openFilter: PropTypes.bool,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
};
