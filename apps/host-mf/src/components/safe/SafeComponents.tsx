import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Button } from '../ui/button';
type Props = {
    children: ReactNode;
    fallback?: ReactNode;
    name?: string;
};

type State = {
    hasError: boolean;
    error: Error | null;
};
export class SafeComponent extends Component<Props, State> {
    state: State = {
        hasError: false,
        error: null,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(
            `[SafeComponent] ${this.props.name ?? "Component"} failed`,
            error,
            errorInfo
        );
    }
    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    handleRetry() {
        window.navigation.reload();

    }

    render() {

        if (this.state.hasError) {
            return (
                <div className="flex min-h-[300px] items-center justify-center p-6">
                    <div className="flex max-w-md flex-col items-center text-center">

                        <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-error/10 text-error">
                            <AlertTriangle className="size-6" />
                        </div>

                        <h2 className="font-headline-md text-headline-md text-on-surface">
                            {this.props.name} service is discontinued
                        </h2>

                        <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                            We couldn't load this section. Please try again.
                        </p>

                        <Button
                            onClick={this.handleRetry}
                            className="mt-5 gap-2"
                        >
                            <RefreshCw className="size-4" />
                            Try again
                        </Button>
                    </div>
                </div>
            )
        }
        return this.props.children;

    }

}