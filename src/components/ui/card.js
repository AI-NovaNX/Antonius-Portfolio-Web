import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const Card = React.forwardRef(({ as: Component = 'div', className, ...props }, ref) => (
  <Component
    ref={ref}
    data-slot="card"
    className={cn('rounded-xl border bg-card text-card-foreground shadow-sm', className)}
    {...props}
  />
));
Card.displayName = 'Card';
Card.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
};

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-header"
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';
CardHeader.propTypes = {
  className: PropTypes.string,
};

const CardTitle = React.forwardRef(({ as: Component = 'h3', className, ...props }, ref) => (
  <Component
    ref={ref}
    data-slot="card-title"
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';
CardTitle.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
};

const CardDescription = React.forwardRef(({ as: Component = 'p', className, ...props }, ref) => (
  <Component
    ref={ref}
    data-slot="card-description"
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';
CardDescription.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
};

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} data-slot="card-content" className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';
CardContent.propTypes = {
  className: PropTypes.string,
};

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="card-footer"
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';
CardFooter.propTypes = {
  className: PropTypes.string,
};

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
