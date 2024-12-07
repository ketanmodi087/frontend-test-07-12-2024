import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import SearchBar from '../../components/SearchBar';
import { observer } from 'mobx-react';
import store from '../../stores/AppStore';
import ServiceCard from '../../components/ServiceCard';
import ComparisonTable from '../../components/ComparisonTable';

const HeroSection = observer(() => {
  const { service } = store;
  const [serviceList, setServiceList] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortCriterion, setSortCriterion] = useState('price'); // Default sorting by price
  const selectedServices = service.selected.slice();

  // Handles the search input and filters the service list
  const handleSearch = (searchText) => {
    service.searchServices(searchText);
  };

  // Toggles the visibility of the filter options
  const handleFilterToggle = () => {
    setShowFilter((prevState) => !prevState);
  };

  // Updates the service list when the data in the store changes
  useEffect(() => {
    setServiceList(service.services.slice());
  }, [service.services.slice()]);

  // Updates the sorting criterion based on user selection
  const handleSortChange = (event) => {
    setSortCriterion(event.target.value);
  };

  // Sorts the service list based on the selected criterion
  const sortServices = (services) => {
    if (sortCriterion === 'price') {
      return services.sort((a, b) => a.price - b.price);
    } else if (sortCriterion === 'rating') {
      return services.sort((a, b) => b.rating - a.rating);
    }
    return services;
  };

  const sortedServiceList = sortServices(serviceList);

  // Handles the selection or deselection of services for comparison
  const handleCompare = (id) => {
    if (selectedServices.includes(id)) {
      service.setSelectedServices(selectedServices.filter((serviceId) => serviceId !== id));
    } else if (selectedServices.length < 3) {
      service.setSelectedServices([...selectedServices, id]);
    } else {
      alert('You can only select 3 at single time, please deselect other to select new one.');
    }
  };

  const selectedServiceDetails = sortedServiceList.filter((service) =>
    selectedServices.includes(service.id),
  );

  return (
    <>
      <Box component="section" className="hero">
        <div className="filter-box">
          <Card className="hero-filter">
            <Box sx={{ display: { sm: 'block', md: 'flex' }, alignItems: 'center', gap: '16px' }}>
              <SearchBar sx={{ flex: '1' }} handleChange={handleSearch} />
              <Button className="btn btn-light-primary" onClick={handleFilterToggle}>
                Filter
              </Button>
            </Box>
            {showFilter && (
              <Box sx={{ mt: 3 }}>
                <FormControl className="hero-search-input" fullWidth>
                  <InputLabel>Sort By</InputLabel>
                  <Select value={sortCriterion} label="Sort By" onChange={handleSortChange}>
                    <MenuItem value="price">Price</MenuItem>
                    <MenuItem value="rating">Rating</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            )}
          </Card>
        </div>
      </Box>

      <Box component="section" className="section-padding" sx={{ backgroundColor: '#f8f8f8' }}>
        <Container>
          <Grid container justifyContent="center" spacing={2}>
            {sortedServiceList.map((service) => (
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <ServiceCard
                  service={service}
                  onCompare={handleCompare}
                  isSelected={selectedServices.includes(service.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {selectedServiceDetails.length > 0 && (
        <Box component="section" className="section-padding ">
          <Container>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12} sm={12} md={10} lg={8}>
                <Card className="freelancer-box" sx={{ backgroundColor: '#f8f8f8' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight="700" sx={{ mb: 2 }}>
                      Comparison
                    </Typography>
                    <ComparisonTable services={selectedServiceDetails} />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>
      )}
    </>
  );
});

export default HeroSection;
