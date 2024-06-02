"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Heading = () => {
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Welcome to my plactice App <span className="underline">Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl">
                TypeScript × NextJS × React 
                <br />for speady development
            </h3>
            <Button>
                check App
                <ArrowRight className="h-4 w-4 ml-2"></ArrowRight>
            </Button>
        </div>
    );
}
 
export default Heading;