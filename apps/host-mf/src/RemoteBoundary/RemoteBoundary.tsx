import Loader from "@/components/Loader";
import { SafeComponent } from "@/components/safe/SafeComponents"
import { Suspense, type ReactNode } from "react";

type RemoteBoundaryProps = {
    name: string;
    children: ReactNode;
}

const RemoteBoundary = ({ name, children }: RemoteBoundaryProps) => {
    return (
        <SafeComponent name={name}>
            <Suspense fallback={<Loader />}>
                {children}
            </Suspense>
        </SafeComponent>
    )
}

export default RemoteBoundary