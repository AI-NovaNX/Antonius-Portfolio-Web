import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../lib/utils';

const variantClasses = {
  default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
  outline:
    'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
};

const sizeClasses = {
  default: 'h-9 px-4 py-2',
  icon: 'h-9 w-9',
};

const Button = React.forwardRef(
  ({ className, variant = 'default', size = 'default', type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      data-slot="button"
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  ),
);

Button.displayName = 'Button';
Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outline', 'ghost']),
  size: PropTypes.oneOf(['default', 'icon']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export { Button };
