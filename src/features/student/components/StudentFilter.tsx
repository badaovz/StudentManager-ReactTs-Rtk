import { Search } from '@mui/icons-material';
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { City, ListParams } from 'models';
import { ChangeEvent, useRef } from 'react';

export interface StudentFilterProps {
    filter: ListParams;
    cityList: City[];

    onChange?: (newFilter: ListParams) => void;
    onSearchChange?: (newFilter: ListParams) => void;
}

function StudentFilter({
    filter,
    cityList,
    onChange,
    onSearchChange,
}: StudentFilterProps) {
    const searchRef = useRef<HTMLInputElement>();
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!onSearchChange) return;
        const newFilter: ListParams = {
            ...filter,
            name_like: e.target.value,
            _page: 1,
        };
        onSearchChange(newFilter);
    };

    const handleCityChange = (
        e: SelectChangeEvent<{ name?: string; value: unknown }>,
    ) => {
        if (!onChange) return;
        const newFilter: ListParams = {
            ...filter,
            city: e.target.value || undefined,
            _page: 1,
        };
        onChange(newFilter);
    };
    const handleSortChange = (
        e: SelectChangeEvent<{ name?: string; value: unknown } | string>,
    ) => {
        if (!onChange) return;
        const value = e.target.value;
        const [_sort, _order] = (value as string).split('.');
        const newFilter: ListParams = {
            ...filter,
            _sort: _sort || undefined,
            _order: _order,
        };
        onChange(newFilter);
    };
    const handleClearFilter = () => {
        if (!onChange) return;
        const newFilter: ListParams = {
            ...filter,
            _page: 1,
            _sort: undefined,
            _order: undefined,
            city: undefined,
            name_like: undefined,
        };

        onChange(newFilter);
        if (searchRef.current) {
            searchRef.current.value = '';
        }
    };
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel htmlFor="searchByName">
                            Search By Name
                        </InputLabel>
                        <OutlinedInput
                            id="searchByName"
                            label="Search By Name"
                            startAdornment={<Search />}
                            defaultValue={filter.name_like}
                            onChange={handleSearchChange}
                            inputRef={searchRef}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3}>
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel id="filterByCity">
                            Filter By City
                        </InputLabel>
                        <Select
                            labelId="Search By Name"
                            value={filter.city || ''}
                            label="Filter By City"
                            onChange={handleCityChange}
                        >
                            <MenuItem>
                                <em>All</em>
                            </MenuItem>
                            {cityList.map((city) => (
                                <MenuItem key={city.code} value={city.code}>
                                    {city.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={2}>
                    <FormControl fullWidth variant="outlined" size="small">
                        <InputLabel id="sortBy">Sort</InputLabel>
                        <Select
                            labelId="sortBy"
                            value={
                                filter._sort
                                    ? `${filter._sort}.${filter._order}`
                                    : ''
                            }
                            defaultValue={filter.name_like}
                            onChange={handleSortChange}
                            label="Sort"
                        >
                            <MenuItem value="">
                                <em>No sort</em>
                            </MenuItem>

                            <MenuItem value="name.asc">Name Asc</MenuItem>
                            <MenuItem value="name.desc">Name Desc</MenuItem>
                            <MenuItem value="mark.asc">Mark Asc</MenuItem>
                            <MenuItem value="mark.desc">Mark Desc</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={1}>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={handleClearFilter}
                    >
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default StudentFilter;
