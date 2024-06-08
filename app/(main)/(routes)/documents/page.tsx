"use client"

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
const Documentspage = () => {
  const {user} =useUser();
    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
              src='/notebook.svg'
              height="300"
              width="300"
              alt="you can add some notes!"
              className="dark:hidden"
            ></Image>
            <Image
              src='/notebook-dark.svg'
              height="300"
              width="300"
              alt="you can add some notes!"
              className="hidden dark:block"
            ></Image>
            <h2 className="text-lg font-medium">
              Welcome to {user?.firstName}&apos;s Jotion
            </h2>
            <Button>
              <PlusCircle className="h-4 w-4 mr-2"/>
              Create a note
            </Button>
        </div>
     );
}
 
export default Documentspage;