import * as React from 'react';
import { cn } from '@/lib/utils';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{variant?:'default'|'outline'}
export const Button=React.forwardRef<HTMLButtonElement,ButtonProps>(({className,variant='default',...props},ref)=><button ref={ref} className={cn('ui-button',variant==='outline'&&'ui-button-outline',className)} {...props}/>);Button.displayName='Button';
