import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';
import { queryClient } from '../module/react-query';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools} from 'react-query/devtools'

const ErrorFallback = () => {
    return (
         <div>Fallback error goes here</div>
    )
}
type AppProviderProps = {
     children: React.ReactNode
}
export const AppProvider = ({ children } : AppProviderProps) => {
   
    

  return (
    <React.Suspense
        fallback={
            <div>splash screen goes here</div>
        }
    > 
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QueryClientProvider client={queryClient}>
                    <Router>
                        {children}
                    </Router>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
             {/* */}
        </ErrorBoundary>
        
    </React.Suspense>
  )
}