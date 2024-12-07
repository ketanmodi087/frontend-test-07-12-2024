import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Rating } from '@mui/material';

// Functional component to render a service card.
// Displays details of a service and allows users to select or deselect it for comparison.
const ServiceCard = ({ service, onCompare, isSelected }) => {
  return (
    <Card className='freelancer-box'> 
      <CardContent>
        <Typography variant="h6" component="h6" fontWeight="600" sx={{ mb: 0.5 }}>
          {service.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 0.5, color: '#696665' }}>
          Freelancer: {service.freelancer}
        </Typography>
        <Typography variant="h6" className="text-primary" sx={{ fontWeight: '500', mb: 1 }}>
          {service.price}
        </Typography>
        <Rating value={service.rating} readOnly precision={0.1} sx={{ mb: 2 }} />
        <div>
          <Button
            className={`btn ${isSelected ? 'btn-light-primary' : 'btn-primary'}`}
            onClick={() => onCompare(service.id)}
          >
            {isSelected ? 'Deselect' : 'Compare'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard; // Exporting the component for use in other parts of the application.
