import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonLoader = () => {
    return (
        <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-6 w-32" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Skeleton className="h-40" />
                <Skeleton className="h-40" />
            </div>
        </div>
    );
};
